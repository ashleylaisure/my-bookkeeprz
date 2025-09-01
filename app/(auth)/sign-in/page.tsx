import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const SignIn = async () => {
    const session = await getSession();
    
    if(session) redirect("/dashboard");
    
    return (
        <>
            <div>Sign In with Magic Link</div>
            <SocialAuthForm formType="SIGN_IN" />
        </>
    );
};

export default SignIn;