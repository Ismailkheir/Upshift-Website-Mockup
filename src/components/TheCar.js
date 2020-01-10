import React from 'react';

function TheCar(){
    return(
        <div className="bg-gray-200">
            <div className="flex flex-wrap mt-64 pb-32">
                <div className="ml-32 mr-16 pt-24 flex-1 mb-64">
                    <div className="flex flex-wrap">
                                <span className="font-medium text-xs">05</span>
                                <hr className="w-12 mt-2 ml-2 mr-2 border-1 border-gray-500"></hr>
                                <span className="font-medium text-xs">THE CAR</span>
                    </div>
                    <h1 className="font-regular text-3xl mb-6 mt-6 mr-64">Always drive an identical plus.</h1>
                    <p className="text-gray-700 leading-loose mr-56 mb-8">All our cars are the same so they feel familiar. No branding so you don't stick out.</p>
                    <p className="text-gray-700 leading-loose mr-56">Fits 5 comfortably - or a surfboard, bicycle or skiis. 54 MPG hybrid gets you to Tahoe and back on a signle tank. Phone mount, charging cables, and FasTrak included. Bluetooth and safety technology like adaptive cruise control. We use all natural deodorizers and cleaning supplies.</p>
                </div>

                <div className="flex-1">
                    <div className="bg-gray-400 one"></div>
                    <div className="flex flex-wrap justify-between -mt-12">
                        <div className="bg-gray-400 two right-0 inset-y-0"></div>
                        <div className="bg-gray-400 three"></div>
                    </div>
                
                </div>
            </div>

            <div className="flex flex-wrap ml-32 mt-24 mr-32">
                <span className="flex-1 font-regular text-3xl pr-64">Join instantly with $0 down and get your car right now.</span>
                <button className="flex-shrink-0 py-4 px-24 rounded-full font-light text-xs bg-gray-600 text-white mb-8 mr-8 mt-4">Get started</button>
            
            </div>
            <hr className="mx-32 mt-16 border-1 border-gray-400"></hr>
        </div>
    );
}

export default TheCar;