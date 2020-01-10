import React from 'react';

function Header(){
    return (
        <div className="bg-gray-100">
            <div className="ml-16 mr-8 p-6 pt-24 bg-gray-100">
                <div className="font-regular text-5xl">Just drive.</div>
                <div className="font-regular text-5xl">We'll do the rest.</div>
            </div>

            <div className="ml-16 mr-8 p-6">
                <span className="font-light text-xs">All-inclusive, usage-based car subscriptions.</span>
            </div>
        
            <div className="flex flex-wrap ml-16 p-6">
                <div className="mr-2">
                    <form>
                    <input type="text" placeholder="Phone Number ..." className=" bg-gray-100 outline-none font-light text-xs w-56 mt-3"></input>
                    </form>
                    <hr className="w-10/12 mt-4"></hr>
                </div>
                <div>
                    <button className="py-4 px-8 rounded-full font-light text-xs bg-gray-700 text-white">Get started</button>
                </div>
            </div>
            
        </div>
    );
}

export default Header;