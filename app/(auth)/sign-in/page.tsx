import BrandIcon from "@/components/BrandIcon";
import MagicLinkForm from "@/components/forms/MagicLinkForm";
import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { getSession } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const SignIn = async () => {
    const session = await getSession();
    
    if(session) redirect("/dashboard");
    
    return (
        <>
            {/* Header */}
            <div className="flex items-center justify-between gap-2">
                <div className="space-y-2.5">
                    <h1 className="h2-bold text-dark100_light900">
                        Welcome back
                    </h1>
                    <p className="paragraph-regular text-dark500_light400">
                        Sign in to continue to your account
                    </p>
                </div>
                <Link href="/"><BrandIcon size={50} /></Link>
            </div>
                
            <MagicLinkForm />
                
            <SocialAuthForm formType="SIGN_IN" />
        </>
    );
};

export default SignIn;