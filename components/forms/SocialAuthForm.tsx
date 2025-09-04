"use client";

import Image from "next/image";
import { Button } from "../ui/button";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import ROUTES from "@/constants/routes";


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
            {/* Toggle between sign in and sign up */}
            {formType === "SIGN_IN" ? (
                    <div className="flex-center gap-4 flex-col my-4">
                        <p className="text-sm text-dark500_light400">
                            Don&apos;t have an account?{" "}
                            <Link
                                href={ROUTES.SIGN_UP}
                                className="paragraph-semibold primary-text-gradient"
                            >
                            Sign up
                            </Link>
                        </p>
                    </div>
                ) : (
                    <div className="flex-center gap-4 flex-col my-4">
                        <p className="text-center text-sm text-dark500_light400">
                            Already have an account?{" "}
                            <Link
                                href={ROUTES.SIGN_IN}
                                className="paragraph-semibold primary-text-gradient"
                                >
                                Sign in
                            </Link>
                        </p>
                    </div>
                )}

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 my-4">
                <hr className="flex-grow border-t-1.5 border-dark-500_light400" />
                <span className="text-xs text-dark500_light400 font-medium">OR</span>
                <hr className="flex-grow border-t-1.5 border-dark-500_light400" />
            </div>

            {/* Social Auth Buttons */}
            <div className="flex flex-wrap gap-2.5">

                <Button
                    variant={"outline"}
                    className='button-primary' 
                    onClick={handleSignInWithGoogle}
                >
                    <Image
                        src="/icons/google.svg"
                        alt="Google Logo"
                        width={20}
                        height={20}
                        className="mr-2.5 object-contain"
                    />
                    {formType === "SIGN_IN" ? (
                        <span>Sign in with Google</span>
                    ) : (
                        <span>Sign up with Google</span>
                    )}
                </Button>
            </div>
        </>
    );
};

export default SocialAuthForm;