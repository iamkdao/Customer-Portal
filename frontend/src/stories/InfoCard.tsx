import '../index.css'

interface InfoCardProps {
    onSquareFootageChange: (value: string) => void;
    onCommuteTimeChange: (value: string) => void;
    squareFootage: string;
    commuteTime: string;
}

export const InfoCard = ({
    onSquareFootageChange,
    onCommuteTimeChange,
    squareFootage,
    commuteTime,
}: InfoCardProps) => {
    return (
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                    <h2 className="m-0 text-xl font-semibold text-black dark:text-black">Delivery Details</h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900"> Your name </label>
                            <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
                        </div>

                        <div>
                            <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900"> Your email* </label>
                            <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
                        </div>

                        <div>
                            <label htmlFor="your_address" className="mb-2 block text-sm font-medium text-gray-900"> Address* </label>
                            <input type="text" id="your_address" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Type your address here" required />
                        </div>

                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <label htmlFor="select-city-input" className="block text-sm font-medium text-gray-900"> City* </label>
                            </div>
                            <select defaultValue="WC" id="select-city-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                <option value="WC">Worcester</option>
                                <option value="SF">San Francisco</option>
                                <option value="NY">New York</option>
                                <option value="LA">Los Angeles</option>
                                <option value="CH">Chicago</option>
                                <option value="HU">Houston</option>
                            </select>
                        </div>

                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <label htmlFor="select-city-input-3" className="block text-sm font-medium text-gray-900"> State* </label>
                            </div>
                            <select defaultValue="MA" id="select-state-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                <option value="MA">Massachusetts</option>
                                <option value="CA">California</option>
                                <option value="NY">New York</option>
                                <option value="IL">Illinois</option>
                                <option value="TX">Texas</option>
                            </select>
                        </div>
                    </div>

                    <h2 className="m-0 text-xl font-semibold text-black dark:text-black">Lawn Details</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                        <div>
                            <label htmlFor="your_area" className="mb-2 block text-sm font-medium text-gray-900">
                                Square footage
                            </label>
                            <input
                                type="text"
                                id="your_area"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                placeholder="In sq ft."
                                required
                                value={squareFootage}
                                onChange={(e) => onSquareFootageChange(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="your_commute_time" className="mb-2 block text-sm font-medium text-gray-900">
                                Commute time
                            </label>
                            <input
                                type="text"
                                id="your_commute_time"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
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