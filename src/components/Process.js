import React from 'react';

function Process(){
    return(
        <div className="flex flex-wrap ml-16 mt-24 mb-24">
            <div className="flex-1 flex-col mr-12">
                <div className="rounded-full h-24 w-24 bg-gray-100 text-center pt-6 font-light text-3xl mx-auto mb-8">X</div>
                <h2 className="text-center text-2xl">Text Us</h2>
                <p className="leading-loose text-sm font-light text-center mt-8 px-6">Text when you want your car. No app needed, just an online account. Real human operators.</p>
                <hr className="mt-10 border-1 border-gray-400"></hr>
            </div>

            <div className="flex-1 flex-col mr-12 mt-16">
                <div className="rounded-full h-24 w-24 bg-gray-100 text-center pt-6 font-light text-3xl mx-auto mb-8">X</div>
                <h2 className="text-center text-2xl">We deliver</h2>
                <p className="leading-loose text-sm font-light text-center mt-8 px-16">Your car will arrive at your door - clean and fully fueled.</p>
                <hr className="mt-10 border-1 border-gray-400"></hr>
            </div>

            <div className="flex-1 flex-col mr-16">
                <div className="rounded-full h-24 w-24 bg-gray-100 text-center pt-6 font-light text-3xl mx-auto mb-8">X</div>
                <h2 className="text-center text-2xl">You drive</h2>
                <p className="leading-loose text-sm font-light text-center mt-8">Hop in and go with full coverage insurance, FasTrak, phone accessories, and unlimited mileage.</p>
                <hr className="mt-10 border-1 border-gray-400"></hr>
            </div>

            <div className="flex-1 flex-col mr-16 mt-16">
                <div className="rounded-full h-24 w-24 bg-gray-100 text-center pt-6 font-light text-3xl mx-auto mb-8">X</div>
                <h2 className="text-center text-2xl">We pick it up</h2>
                <p className="leading-loose text-sm font-light text-center mt-8">It's your for a few hours or a few days. Return on your own time, anywhere in our zone. We'll gas and clean it.</p>
                <hr className="mt-10 border-1 border-gray-400"></hr>
            </div>
        </div>
    );
}

export default Process;