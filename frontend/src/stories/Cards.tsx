import '../index.css'
import { theme } from '../themes';

interface CardProps {
    squareFootage: string;
    commuteTime: string;
}
export const Card = ({
    squareFootage,
    commuteTime,
}: CardProps) => {
    const squareFootagePrice = Math.round(parseInt(squareFootage || '0') * 9.3);
    const commutePrice = Math.round(parseInt(commuteTime || '0') * 30);
    const subtotal = squareFootagePrice + commutePrice;
    const taxes = Math.round(subtotal * 0.08);
    const estimatedTotal = subtotal + taxes;

    return (
        <div
            style={{
                backgroundColor: theme.colors.backgroundLight
            }}
            className="flex flex-col justify-start items-start w-full p-6 md:p-14"
        >
            <div>
                <h1 className="text-2xl font-semibold leading-6 text-gray-800">Estimations</h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                <div className="grid grid-cols-3 w-full items-end">
                    <p className="text-lg leading-4 text-gray-600 justify-self-start">Square footage</p>
                    <p
                        className="text-sm leading-4 font-semibold text-gray-600 justify-self-start"
                        style={{
                            color: theme.colors.accent
                        }}
                    >{squareFootage} sq ft.</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600 justify-self-end">${squareFootagePrice}</p>
                </div>
                <div className="grid grid-cols-3 w-full items-center">
                    <p className="text-lg leading-4 text-gray-600 justify-self-start">Commute time</p>
                    <p
                        className="text-sm leading-4 font-semibold text-gray-600 justify-self-start"
                        style={{
                            color: theme.colors.accent
                        }}
                    >{commuteTime} hour{commuteTime !== '1' ? 's' : ''}</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600 justify-self-end">${commutePrice}</p>
                </div>
                <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Taxes</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">${taxes}</p>
                </div>
                <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Sub total</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">${subtotal}</p>
                </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
                <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total</p>
                <p className="text-lg font-semibold leading-4 text-gray-800">${estimatedTotal}</p>
            </div>
        </div>
    )
}