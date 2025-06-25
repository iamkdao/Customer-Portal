import React from "react";
import { ExpandPanel } from "../../stories/ExpandPanel";
import { Card } from "../../stories/Cards";
import '../../index.css'

const EstimatePage = () => {
    return (
        <div
            className="
				flex
				justify-center
				items-start
				2xl:container 2xl:mx-auto
				lg:py-16
				md:py-12
				py-9
				px-4
				md:px-6
				lg:px-20
				xl:px-44
			"
        >
            <div
                className="
					flex
					w-full
					sm:w-9/12
					lg:w-full
					flex-col
					lg:flex-row
					justify-between
					items-start
					lg:space-x-10
					2xl:space-x-36
					space-y-12
					lg:space-y-0
				"
            >
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <div className="space-y-4 flex flex-col w-full">
                        <ExpandPanel label="Name" placeholder="John" />
                        <ExpandPanel label="Email" placeholder="john@gmail.com" />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default EstimatePage;
