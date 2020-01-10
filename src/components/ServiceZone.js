import React from 'react';
import check from '../logos/check.svg';

function ServiceZone(){
    return(
        <div className="ml-48 flex flex-wrap mb-32">
            <div className="z-10 custom-wh bg-gray-400">
                
            </div>
            
            <div className="z-0 custom2-wh bg-gray-800 cp relative mt-16">
                <div className="ct mt-32">
                    <div className="flex flex-wrap">
                        <span className="font-medium text-xs text-gray-500">03</span>
                        <hr className="w-12 mt-2 ml-2 mr-2 border-1 border-gray-500"></hr>
                        <span className="font-medium text-xs text-gray-500">SERVICE ZONE</span>
                    </div>

                    <h1 className="text-3xl mb-6 text-white mt-4">We've got SF covered.</h1>
                    <p className="font-light text-sm text-gray-500">We provide two delivery options for any trip:</p>

                    <div className="flex inline-flex mt-6">
                        <img src={check} alt="Check" className="h-4 w-4 mt-1 mr-8"></img>
                        <div>
                            <h2 className="font-bold text-sm text-white">Concierge service(8am - 9pm daily)</h2>
                            <p className="text-xs font-light leading-loose text-gray-500 pr-32 mt-4">We deliver or pickup at your doorstep. Always have a parking spot right out front, just for you.</p>
                        </div>
                    </div>

                    <div className="flex inline-flex mt-6">
                        <img src={check} alt="Check" className="h-4 w-4 mt-1 mr-8"></img>
                        <div>
                            <h2 className="font-bold text-sm text-white">Self Service (24/7)</h2>
                            <p className="text-xs font-light leading-loose text-gray-500 pr-32 mt-4">We deliver within 3 blocks and unlock it whenever you are ready. Park anywhere legal in our zone, lock up, and walk away to return. More flexibility on timing, especially for starting early or ending late.</p>
                        </div>
                    </div>

                    <hr className="w-48 mt-8 mb-8 hr-faded border-1 border-gray-600"></hr>
                    <div className="flex flex-wrap">
                        <div className="rounded-full h-16 w-16 bg-gray-600 text-center pt-5 mr-8 text-gray-500">X</div>
                        <div className="pt-3">
                            <p className="text-xs font-light text-gray-500">Outside of SF?</p>
                            <a href="#a" className="font-medium text-xs text-gray-200">Tell us where to expand -></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}


export default ServiceZone;