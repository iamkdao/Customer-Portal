import { Dot } from 'lucide-react'
import { useState } from 'react'
import '../index.css'
import { motion } from 'framer-motion'
import { theme } from '../themes'

interface ExpandCardProps {
    active?: boolean
    clicked?: boolean
    label?: string
    description?: string
    onChoose?: () => void
    onChoosePlan?: () => void
}

const ExpandCardSmall = ({
    active,
    onChoose,
    label,
    description,
}: ExpandCardProps) => {
    const statusColor = active ? theme.colors.success : theme.colors.danger

    return (
        <div
            className="cursor-pointer relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-xl mx-auto"
            onClick={onChoose}
        >
            <div className="p-4">
                <h5 className="mb-2 text-xl font-semibold text-slate-800">{label}</h5>
                <p className="text-slate-600 leading-normal font-light">{description}</p>

                <div className="flex flex-wrap justify-between items-center mt-4">
                    <div className="flex items-center space-x-2">
                        <Dot style={{ color: statusColor }} />
                        <p className="font-semibold" style={{ color: statusColor }}>
                            {active ? 'Active' : 'Inactive'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ExpandCardBig = ({
    onChoose,
    onChoosePlan,
    active,
    label,
    description,
}: ExpandCardProps) => {
    return (
        <div
            className="cursor-pointer w-full max-w-xl mx-auto p-4 bg-white border rounded-lg shadow-sm sm:p-8"
            style={{
                borderColor: theme.colors.neutral300,
            }}
            onClick={onChoose}
        >
            <h5 className="mb-4 text-xl font-medium" style={{ color: theme.colors.textSecondary }}>
                {label}
            </h5>

            <div className="flex items-baseline" style={{ color: theme.colors.textPrimary }}>
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">49</span>
                <span
                    className="ms-1 text-xl font-normal"
                    style={{ color: theme.colors.textSecondary }}
                >
                    /month
                </span>
            </div>

            <p className="text-slate-600 leading-normal font-light my-2">{description}</p>

            <ul role="list" className="space-y-5 my-5 text-sm">
                {[
                    '2 team members',
                    '20GB Cloud storage',
                    'Integration help',
                    { label: 'Sketch Files', excluded: true },
                    { label: 'API Access', excluded: true },
                ].map((item, idx) => {
                    const isExcluded = typeof item === 'object' && item.excluded
                    const label = typeof item === 'string' ? item : item.label

                    return (
                        <li
                            key={idx}
                            className={`flex items-center ${isExcluded ? 'line-through decoration-gray-400 text-gray-400' : ''
                                }`}
                        >
                            <svg
                                className={`shrink-0 w-4 h-4 ${isExcluded ? 'text-gray-400' : 'text-primary'
                                    }`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="ms-3">{label}</span>
                        </li>
                    )
                })}
            </ul>

            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation()
                    onChoosePlan?.()
                }}
                className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center"
                style={{
                    backgroundColor: theme.colors.primary,
                }}
            >
                {active ? 'Deselect service' : 'Select service'}
            </button>
        </div>
    )
}

export const ExpandCard = ({ label = 'Service 1' }: ExpandCardProps) => {
    const [clicked, setClicked] = useState(false)
    const [active, setActive] = useState(false)

    const handleChoosePlan = () => {
        setClicked(false)
        setActive(!active)
    }

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div>
            {clicked ? (
                <motion.div
                    key="big"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <ExpandCardBig
                        onChoose={handleClick}
                        onChoosePlan={handleChoosePlan}
                        active={active}
                        label={label}
                        description="This is more than a description. This is a placeholder, which is spooky."
                    />
                </motion.div>
            ) : (
                <motion.div
                    key="small"
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <ExpandCardSmall
                        onChoose={handleClick}
                        active={active}
                        label={label}
                        description="This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam vel elit gravida vulputate. Praesent finibus tincidunt sagittis."
                    />
                </motion.div>
            )}
        </div>
    )
}
