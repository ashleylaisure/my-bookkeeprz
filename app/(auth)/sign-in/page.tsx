import AuthForm from "@/components/forms/AuthForm";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const SignIn = async () => {
    const session = await getSession();
    if(session) redirect("/dashboard");
    
    return (
        <>
            <AuthForm
                formHeader="Welcome back"
                formSubHeader="Sign in to continue to your account"
                formType="SIGN_IN"
            />
        </>
    );
};

export default SignIn;