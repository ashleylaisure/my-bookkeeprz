
import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const SignUp = async () => {
    const session = await getSession();
        
    if(session) redirect("/dashboard");

    return (
        <>
            <div>Sign Up with Magic Link</div>
            <SocialAuthForm formType="SIGN_UP" />
        </>
    );
};

export default SignUp;