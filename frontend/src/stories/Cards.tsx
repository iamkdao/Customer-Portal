import '../index.css'

export const Card = () => {
    return (

        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
                <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Total items</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">20</p>
                </div>
                <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">$2790</p>
                </div>
                <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Shipping charges</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">$90</p>
                </div>
                <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Sub total</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">$3520</p>
                </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
                <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total</p>
                <p className="text-lg font-semibold leading-4 text-gray-800">$2900</p>
            </div>
        </div>
    )
}