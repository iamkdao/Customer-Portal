import { useState } from "react";
import { ExpandPanel } from "../../stories/ExpandPanel";
import { InfoCard } from "../../stories/InfoCard";
import { Card } from "../../stories/Cards";
import Header from "../../stories/Header";
import '../../index.css'

const EstimatePage = () => {
    const [squareFootage, setSquareFootage] = useState('');
    const [commuteTime, setCommuteTime] = useState('');

    return (
        <div>
            <Header />
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
                            <InfoCard
                                onSquareFootageChange={setSquareFootage}
                                onCommuteTimeChange={setCommuteTime}
                                squareFootage={squareFootage}
                                commuteTime={commuteTime}
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <Card
                            squareFootage={squareFootage}
                            commuteTime={commuteTime}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstimatePage;
