import React from 'react'

const MagicLinkForm = () => {
    return (
        <div>
            <form className="mt-8">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="body-medium text-dark700_light300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            className="input-field"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="button-primary mt-6 w-full"
                >
                    Send Magic Link
                </button>
            </form>
        </div>
    )
}

export default MagicLinkForm;
