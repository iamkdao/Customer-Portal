import '../index.css'

interface ExpandPanelProps {
    label?: string,
    placeholder?: string,
}
export const ExpandPanel = ({
    label = 'Expand and Collapse Me',
    placeholder = 'John',
}: ExpandPanelProps) => {
    return (
        <label>
            <input className="peer/showLabel absolute scale-0" type="checkbox" />
            <span className="block max-h-14 max-w-lg overflow-hidden rounded-lg bg-transparent border border-gray-400 px-4 py-0 text-cyan-800 transition-all duration-300 peer-checked/showLabel:max-h-fit">
                <h3 className="flex h-14 cursor-pointer items-center font-bold">{label}</h3>
                <input type="text"
                    className="bg-transparent border border-transparent border-b-black text-gray-900 text-sm rounded-none hover:border-gray-400 focus:outline-none focus:ring-black focus:border-black block w-full p-2.5 m-2 ml-0"
                    placeholder={placeholder}
                    required
                />
            </span>
        </label>
    );
}