import { ArrowRight } from "lucide-react"
import '../index.css';

interface SubmitButtonProps {
    isLogin?: boolean,
}

export const SubmitButton = ({
    isLogin,
}: SubmitButtonProps) => {
    return (
        <div className="mt-8">
            <button
                className={`cursor-pointer text-white px-6 py-3 rounded-lg w-full flex items-center justify-center ${isLogin ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}
            >
                {isLogin ? 'Sign In' : 'Sign Up'} <ArrowRight className="ml-2" size={20} />
            </button>
        </div>
    )
}