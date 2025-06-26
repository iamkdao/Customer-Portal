import { background } from 'storybook/internal/theming'
import '../index.css'
import { theme } from '../themes'
import { color } from 'motion'

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
            onMouseOver={(e) => {
                const target = e.target as HTMLElement;
                target.style.color = theme.colors.accent;
                target.style.backgroundColor = theme.colors.secondary;
            }}
            onMouseOut={(e) => {
                const target = e.target as HTMLElement;
                target.style.color = theme.colors.textLight;
                target.style.backgroundColor = 'transparent';
            }}
            style={{
                borderColor: theme.colors.accent,
                color: theme.colors.textLight
            }}
            className="bg-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={onClick}
        >
            {label}
        </button>
    )
}