import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/drizzle/db"; // your drizzle instance
import { headers } from "next/headers";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    pages: {
        signIn: "/sign-in",
        // signOut: "/sign-out",
        // error: "/error",
        // verifyRequest: "/verify-request",
        // newUser: null // Will disable the new account creation screen
    },
    socialProviders: {
        google: {
            // prompt: "select_account",
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
});

export const getSession = async () => auth.api.getSession({
    headers: await headers()
});