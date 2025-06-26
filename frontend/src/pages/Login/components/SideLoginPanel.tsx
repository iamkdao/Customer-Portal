import { SignupButton } from "../../../stories/SignupButton";

interface SideLoginPanelProps {
    isLogin?: boolean,
    onToggle?: () => {},
}

export const SideLoginPanel = ({
    isLogin,
    onToggle,
}: SideLoginPanelProps) => {
    return (
        <div
            className={`relative w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 ${isLogin ? 'bg-blue-600' : 'bg-green-600'}`}
        >
            <h2 className="absolute top-4 right-6 text-2xl md:text-3xl font-bold text-white">
                QuickEst
            </h2>
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    {isLogin ? 'New here?' : 'Already have an account?'}
                </h2>
                <p className="text-gray-200 mb-8">
                    {isLogin
                        ? 'Sign up and start estimating your lawn!'
                        : 'Sign in to access your account.'}
                </p>
                <SignupButton isLogin={isLogin} onClick={onToggle} />
            </div>
        </div>
    )
}