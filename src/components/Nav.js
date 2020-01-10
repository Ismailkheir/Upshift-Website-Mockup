import React from 'react';

function Nav(){
    return (
        <nav className="flex flex-wrap bg-gray-100 items-center">
            <div className="flex items-center flex-shrink-0 ml-24 mr-48">
                <span className="font-semibold text-xl">Upshift</span>
            </div>
            
            <div className= "flex text-sm flex-none w-auto items-end h-full mb-8">
                <a href="#a" className= "border-t-2 border-gray-800 mr-8 pt-8">Personal</a>
                <a href="#a" className= "mr-56">Business</a>
                <a href ="#a" className= "block inline-block mr-8">About</a>
                <a href ="#a" className= "block inline-block mr-8">Pricing</a>
                <a href ="#a" className= "block inline-block mr-8">Faq</a>
                <a href ="#a" className= "block inline-block mr-56">Contact Us</a>
                <a href ="#a" className= "block mt-4 inline-block">Log In</a>
                
            </div>

            <div className="flex text-sm flex-none ml-8 mb-2">
                <a href ="#a" className= "block mt-2 inline-block bg-gray-300 rounded-full py-2 px-6">Join Now</a>
            </div>
            
        </nav>
    );
}

export default Nav;