import React from 'react';
import Header from '../../stories/Header';

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="p-8">
                <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
                <p>You've successfully registered and logged in!</p>
            </div>
        </>
    );
};

export default HomePage;