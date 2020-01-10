import React from 'react';

function Pricing(){
    return(
        <>
        <div className="mb-24">
            <div className="flex flex-wrap justify-center">
                <span className="font-medium text-xs">04</span>
                <hr className="w-12 mt-2 ml-2 mr-2 border-1 border-gray-500"></hr>
                <span className="font-medium text-xs">PRICING</span>
            </div>

            <h1 className="text-3xl text-center my-6">Monthly plans for less than a parking space.</h1>

            <p className="font-light text-sm text-center px-64">Plans include concierge delivery and pickup, cleaning and refueling service, full coverage insurance and maintenance - everything but gas and tolls. Join instantly with $0 down and get your car right now. </p>
        </div>

        <div className="flex flex-wrap mb-56 mx-32">
            <div className="border-solid border rounded-sm border-gray-400 flex-1 mr-24 text-center pb-8">   
                <h3 className="text-2xl mt-12">FlexPass</h3>
                <p className="text-xs font-light mt-1 mb-4">Get 2 days/month</p>
                <span className="text-2xl font-medium text-gray-700">$159</span><span className="font-light text-xs text-gray-700">/month</span>
                <hr className="w-64 my-8 m-auto"></hr>
                <p className="text-xs font-light px-12 leading-loose mb-8">Not sure how much you drive? Get a magic button anytime you need a car.</p>
                <button className="py-4 px-8 rounded-full font-light text-xs bg-gray-600 text-white mb-8">Start with FlexPass</button>
                <br></br>
                <a href="#a" className="font-medium text-xs">View plan details -></a>
            </div>

            <div className="border-solid border-t-4 border-gray-600 flex-1 w-56 mr-24 text-center shadow-2xl h-custom">
                <h3 className="text-xs font-bold text-gray-700 pt-4">RECOMMENDED</h3>  
                <h3 className="text-2xl mt-4">Getaway</h3>
                <p className="text-xs font-light mt-1 mb-4">Get 4 days/month</p>
                <span className="text-2xl font-medium text-gray-700">$219</span><span className="font-light text-xs text-gray-700">/month</span>
                <hr className="w-64 my-8 m-auto"></hr>
                <p className="text-xs font-light px-12 leading-loose mb-8">Not sure how much you drive? Get a magic button anytime you need a car.</p>
                <button className="py-4 px-8 rounded-full font-light text-xs bg-gray-600 text-white mb-8">Start with Getaway</button>
                <br></br>
                <a href="#a" className="font-medium text-xs">View plan details -></a>
            </div>

            <div className="border-solid border rounded-sm border-gray-400 flex-1 w-56 text-center">   
                <h3 className="text-2xl mt-12">Freedom</h3>
                <p className="text-xs font-light mt-1 mb-4">Get 8 days/month</p>
                <span className="text-2xl font-medium text-gray-700">$389</span><span className="font-light text-xs text-gray-700">/month</span>
                <hr className="w-64 my-8 m-auto"></hr>
                <p className="text-xs font-light px-12 leading-loose mb-8">Not sure how much you drive? Get a magic button anytime you need a car.</p>
                <button className="py-4 px-8 rounded-full font-light text-xs bg-gray-600 text-white mb-8">Start with Freedom</button>
                <br></br>
                <a href="#a" className="font-medium text-xs">View plan details -></a>
            </div>
        </div>
        </>
        );
    }


export default Pricing;