import AuthForm from "@/components/forms/AuthForm";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const SignUp = async () => {
    const session = await getSession();
    if(session) redirect("/dashboard");

    return (
        <>
            <AuthForm
                formHeader="Welcome to your ultimate book-reading companion"
                formSubHeader="Create an account to start your journey"
                formType="SIGN_UP"
            />
        </>
    );
};

export default SignUp;