import React from 'react';
import Header from '../../stories/Header';
import { ExpandCard } from '../../stories/ExpandCard';

const ServicesPage = () => {
    const services = [
        {
            id: 1,
            label: 'Basic Service',
            description: 'Essential features for getting started'
        },
        {
            id: 2,
            label: 'Premium Service',
            description: 'Advanced features for power users'
        },
        {
            id: 3,
            label: 'Enterprise Service',
            description: 'Complete solution for large organizations'
        },
        {
            id: 4,
            label: 'Custom Service',
            description: 'Tailored solution for specific needs'
        },
        {
            id: 5,
            label: 'Adhoc Service',
            description: 'Solution for on-demand needs'
        },
    ];

    return (
        <>
            <Header />
            <div className="min-h-screen p-4 md:p-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h1>
                    <p className="text-gray-600 mb-8">Choose the service that fits your needs</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <div key={service.id} className={`flex justify-center w-full ${services.length % 2 !== 0 ? 'md:last:col-span-2 md:last:flex md:last:justify-center' : ''}`}>
                                <ExpandCard
                                    label={service.label}
                                    description={service.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;