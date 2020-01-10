import React from 'react';

function How(){
    return(
        <div className="flex flex-wrap justify-between">
            <div className="ml-16 mr-16 pt-24 flex-1">
                <div className="flex flex-wrap">
                            <span className="font-medium text-xs">02</span>
                            <hr className="w-12 mt-2 ml-2 mr-2 border-1 border-gray-500"></hr>
                            <span className="font-medium text-xs">HOW IT WORKS</span>
                </div>
                <h1 className="font-regular text-3xl mb-6 mt-6">Simple and handy rental process.</h1>
            </div>

            <div className="flex-1 pt-24 mr-16 mt-4">
                <p className="text-sm leading-loose">Snow chains, surf board rack, key lock box, or dog car seat hammock available upon request.</p>
                <hr className="mr-12 mt-8 mb-6 border-1 border-gray-400"></hr>
                <div className="flex flex-wrap">
                        <div className="rounded-full h-16 w-16 bg-gray-200 text-center pt-5 mr-6">X</div>
                        <div className="pt-4">
                            <a href="#a" className="font-medium text-xs">Check the available accessories -></a>
                        </div>
                </div>
            </div>

            <div className="flex-1 pt-24 mr-16 mt-4">
                <p className="text-sm leading-loose">Still got questions? We've probably covered them all in the Help Center.</p>
                <hr className="mr-12 mt-8 mb-6 border-1 border-gray-400"></hr>
                <div className="flex flex-wrap">
                        <div className="rounded-full h-16 w-16 bg-gray-200 text-center pt-5 mr-6">X</div>
                        <div className="pt-4">
                            <a href="#a" className="font-medium text-xs">Read our FAQ -></a>
                        </div>
                </div>
            </div>
        </div>
        
    );
}

export default How;