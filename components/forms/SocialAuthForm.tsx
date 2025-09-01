"use client";

import Image from "next/image";
import { Button } from "../ui/button";

import { authClient } from "@/lib/auth-client";


interface Props {
    formType: "SIGN_IN" | "SIGN_UP";
}

const SocialAuthForm = ({formType}: Props) => {

    const handleSignInWithGoogle = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/dashboard"
            })
        } catch (error) {
            console.log("Error during sign-in:", error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center gap-4 my-4">
                <hr className="flex-grow border-t-1.5 border-dark-500_light400" />
                <span className="text-xs text-dark500_light400 font-medium">OR</span>
                <hr className="flex-grow border-t-1.5 border-dark-500_light400" />
            </div>

            <div className="flex">

                <Button variant={"outline"} className="w-full" onClick={handleSignInWithGoogle}>
                    <Image
                        src="/icons/google.svg"
                        alt="Google Logo"
                        width={20}
                        height={20}
                        className="mr-2.5 object-contain"
                    />
                    {formType === "SIGN_IN" ? (
                        <span>Log in with Google</span>
                    ) : (
                        <span>Sign up with Google</span>
                    )}
                </Button>
            </div>
        </>
    );
};

export default SocialAuthForm;