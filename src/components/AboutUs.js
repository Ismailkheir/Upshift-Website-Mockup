import React from 'react';

function AboutUs(){
    return (
        <div className="flex flex-wrap mt-24 mb-12">
            <div className="flex-1 pl-32">
                <div className="z-0 w-64 bg-gray-200 custom-height">
                    
                </div>
                <div className="z-10 relative -mt-40 bg-gray-600 mr-32 ml-12 h-48 w-2/3">
                    <div className="flex flex-wrap">
                        <div className="flex-none vr ml-6 mt-8 mr-4"></div>
                        <p className="flex-1 text-gray-100 font-light pr-6 text-sm pt-10">
                            "Since becoming a monthly subscriber, I feel like I have my car back again. It's like I own a car without the worries or cost of keeping it around all the time."
                        </p>
                    </div>
                    

                    <div className="font-bold text-xs text-gray-100 mt-4 text-right mr-8">
                        <div>SAM R.</div>
                    </div>
                </div>
            </div>

            <div className="flex-1 pr-32">
                <div className="flex flex-wrap">
                    <span className="font-medium text-xs">01</span>
                    <hr className="w-12 mt-2 ml-2 mr-2 border-1 border-gray-500"></hr>
                    <span className="font-medium text-xs">ABOUT US</span>
                </div>

                <h1 className="font-regular text-3xl mb-6">Let's make cities better.</h1>
                <p className="mb-4 text-justify font-light text-sm">Upshift is like having your own car at your doorstep, but only the days you want it. Monthly plans based on how much you drive that include parking, insurance, maintenance and more.</p>
                <p className="mb-10 text-justify font-light text-sm">We believe in using business to drive positive change inn the world and never settling for what worked in the past.</p>
                <hr className="w-48 mb-8 border-1 border-gray-400"></hr>

                <div className="flex flex-wrap">
                    <div className="rounded-full h-16 w-16 bg-gray-200 text-center pt-5 mr-8">X</div>
                    <div className="pt-3">
                        <p className="text-xs font-light">Interested in our values?</p>
                        <a href="#a" className="font-medium text-xs">Learn more about the company -></a>
                    </div>
                </div>
            </div>
        </div>

    );

}


export default AboutUs;