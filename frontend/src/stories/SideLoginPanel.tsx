interface SideLoginPanelProps {
    isLogin?: boolean,
}

export const SideLoginPanel = ({

}) => {
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
                <button
                    className="bg-white px-6 py-3 rounded-lg"
                    style={{ color: isLogin ? '#2563EB' : '#059669' }}
                    onClick={toggleMode}
                >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
            </div>
        </div>
    )
}