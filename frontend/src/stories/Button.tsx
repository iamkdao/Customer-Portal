import '../index.css'

interface ButtonProps {
    label?: string,
    onClick?: () => {}
}
export const Button = ({
    label = 'Button',
    onClick
}: ButtonProps) => {
    return (
        <button
            className="bg-transparent hover:bg-gray-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={onClick}
        >
            {label}
        </button>
    )
}