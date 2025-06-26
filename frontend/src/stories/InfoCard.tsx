import '../index.css'
import { theme } from '../themes'

interface InfoCardProps {
    onSquareFootageChange: (value: string) => void
    onCommuteTimeChange: (value: string) => void
    squareFootage: string
    commuteTime: string
}

export const InfoCard = ({
    onSquareFootageChange,
    onCommuteTimeChange,
    squareFootage,
    commuteTime,
}: InfoCardProps) => {
    const inputBaseClass =
        'block w-full rounded-lg border p-2.5 text-sm focus:ring-2 focus:outline-none'

    const commonInputStyles = {
        backgroundColor: theme.colors.neutral200,
        color: theme.colors.textPrimary,
        borderColor: theme.colors.neutral300,
    }

    const focusStyles = {
        borderColor: theme.colors.primary,
        boxShadow: `0 0 0 2px ${theme.colors.primary}`,
    }

    const labelStyle = { color: theme.colors.textPrimary }

    return (
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                    <h2
                        className="m-0 text-xl font-semibold"
                        style={{ color: theme.colors.textPrimary }}
                    >
                        Delivery Details
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="your_name"
                                className="mb-2 block text-sm font-medium"
                                style={labelStyle}
                            >
                                Your name
                            </label>
                            <input
                                type="text"
                                id="your_name"
                                className={inputBaseClass}
                                style={commonInputStyles}
                                placeholder="Lebron James"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="your_email"
                                className="mb-2 block text-sm font-medium"
                                style={labelStyle}
                            >
                                Your email*
                            </label>
                            <input
                                type="email"
                                id="your_email"
                                className={inputBaseClass}
                                style={commonInputStyles}
                                placeholder="name@gmail.com"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="your_address"
                                className="mb-2 block text-sm font-medium"
                                style={labelStyle}
                            >
                                Address*
                            </label>
                            <input
                                type="text"
                                id="your_address"
                                className={inputBaseClass}
                                style={commonInputStyles}
                                placeholder="Type your address here"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="select-city-input"
                                className="mb-2 block text-sm font-medium"
                                style={labelStyle}
                            >
                                City*
                            </label>
                            <select
                                defaultValue="WC"
                                id="select-city-input"
                                className={inputBaseClass}
                                style={commonInputStyles}
                            >
                                <option value="WC">Worcester</option>
                                <option value="SF">San Francisco</option>
                                <option value="NY">New York</option>
                                <option value="LA">Los Angeles</option>
                                <option value="CH">Chicago</option>
                                <option value="HU">Houston</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="select-state-input"
                                className="mb-2 block text-sm font-medium"
                                style={labelStyle}
                            >
                                State*
                            </label>
                            <select
                                defaultValue="MA"
                                id="select-state-input"
                                className={inputBaseClass}
                                style={commonInputStyles}
                            >
                                <option value="MA">Massachusetts</option>
                                <option value="CA">California</option>
                                <option value="NY">New York</option>
                                <option value="IL">Illinois</option>
                                <option value="TX">Texas</option>
                            </select>
                        </div>
                    </div>

                    <h2
                        className="m-0 text-xl font-semibold"
                        style={{ color: theme.colors.textPrimary }}
                    >
                        Lawn Details
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                        <div>
                            <label
                                htmlFor="your_area"
                                className="mb-2 block text-sm font-medium"
                                style={labelStyle}
                            >
                                Square footage
                            </label>
                            <input
                                type="text"
                                id="your_area"
                                className={inputBaseClass}
                                style={commonInputStyles}
                                placeholder="In sq ft."
                                required
                                value={squareFootage}
                                onChange={(e) => onSquareFootageChange(e.target.value)}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="your_commute_time"
                                className="mb-2 block text-sm font-medium"
                                style={labelStyle}
                            >
                                Commute time
                            </label>
                            <input
                                type="text"
                                id="your_commute_time"
                                className={inputBaseClass}
                                style={commonInputStyles}
                                placeholder="In hours"
                                required
                                value={commuteTime}
                                onChange={(e) => onCommuteTimeChange(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
