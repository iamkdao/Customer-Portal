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
            className={`w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 ${isLogin ? 'bg-blue-600' : 'bg-green-600'}`}
        >
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    {isLogin ? 'New here?' : 'Already have an account?'}
                </h2>
                <p className="text-gray-200 mb-8">
                    {isLogin
                        ? 'Sign up and discover a great amount of new opportunities!'
                        : 'Sign in to access your account and continue your journey!'}
                </p>
                <SignupButton isLogin={isLogin} onClick={onToggle} />
            </div>
        </div>
    )
}