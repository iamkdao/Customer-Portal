import { ArrowRight } from "lucide-react"
import '../index.css';

interface SubmitButtonProps {
    isLogin?: boolean,
    loading?: boolean,
    onClick: () => void,
    type?: 'reset' | 'submit'
}

export const SubmitButton = ({
    isLogin, loading, onClick, type = 'submit'
}: SubmitButtonProps) => {
    return (
        <div className="mt-8">
            <button
                type={type}
                onClick={onClick}
                disabled={loading}
                className={`cursor-pointer text-white px-6 py-3 rounded-lg w-full flex items-center justify-center 
                    ${isLogin
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-green-600 hover:bg-green-700'
                    }`}
            >
                {loading ? (
                    <span className="flex items-center">
                        Loading...
                    </span>
                ) : (
                    <span className="flex items-center">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                        <ArrowRight className="ml-2" size={20} />
                    </span>
                )}
            </button>
        </div>
    )
}