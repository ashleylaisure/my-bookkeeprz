import React from 'react'
import SocialAuthForm from './SocialAuthForm'
import MagicLinkForm from './MagicLinkForm'
import Link from 'next/link'
import BrandIcon from '../BrandIcon'
import BrandText from '../BrandText'
import ROUTES from '@/constants/routes'

interface AuthFormProps {
    formHeader: string;
    formSubHeader?: string;
    formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = ({formHeader, formSubHeader, formType}: AuthFormProps) => {
    return (
        <>
            {/* Header */}
            <div className="flex-center flex-col gap-3">

                <Link href="/">
                    <div className="flex-center gap-2">
                        <BrandIcon size={35}/>
                        <BrandText />
                    </div>
                </Link>

                <h1 className="h2-bold text-dark100_light900 mt-5 text-center">
                    {formHeader}
                </h1>

                <p className="paragraph-regular text-dark500_light400">
                    {formSubHeader}
                </p>
            </div>
            
            {/* MagicLink Form */}
            <MagicLinkForm formType={formType} />


            {/* Divider */}
            <div className="flex items-center justify-center gap-4 my-4">
                <hr className="flex-grow border-t-1.5 border-dark-500_light400" />
                    <span className="text-xs text-dark500_light400 font-medium">OR</span>
                <hr className="flex-grow border-t-1.5 border-dark-500_light400" />
            </div>
                
            {/* Social Auth Form */}
            <SocialAuthForm formType={formType} />
            {/* Toggle between sign in and sign up */}
            {formType === "SIGN_IN" ? (
                    <div className="flex-center gap-4 flex-col mt-8">
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
                    <div className="flex-center gap-4 flex-col mt-8">
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
        </>
    )
}

export default AuthForm
