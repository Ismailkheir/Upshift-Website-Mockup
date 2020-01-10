import React from 'react';

function Footer(){
    return(
        <div className="bg-gray-200" id="bottom">
            <div className="ml-32 mr-32 pt-16 flex flex-wrap">
                <div className="flex-1">
                    <h2 className="text-xs font-bold mb-8 text-gray-700">PRODUCT</h2>
                    <ul>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">Personal</a></li>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">Business</a></li>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">Pricing</a></li>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">Log in</a></li>
                    </ul>
                </div>

                <div className="flex-1">
                    <h2 className="text-xs font-bold mb-8 text-gray-700">COMPANY</h2>
                    <ul>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">About</a></li>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">Blog</a></li>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">Carrers</a></li>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">Contact Us</a></li>
                    </ul>
                </div>
                    
                <div className="flex-1">
                    <h2 className="text-xs font-bold mb-8 text-gray-700">HELP CENTER</h2>
                    <ul>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">FAQ</a></li>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">Insurance</a></li>
                        <li className="mb-6 text-sm text-gray-800"><a href="#a">Agreement</a></li>
                    </ul>
                </div>

                <div className="flex-1">
                    <h2 className="text-xs font-bold mb-8 text-gray-700">STAY IN TOUCH</h2>
                    <p className="mb-6 font-light text-xs text-gray-800 mb-3">Join our mailing list to get updates. We respect your privacy.</p>
                    <div className="relative">
                        <span className="absolute inset-y-0 icon-pos py-2 px-3">X</span>
                        <input type="text" placeholder="Email address ..." className="rounded-full px-4 py-4 bg-gray-300 outline-none font-light text-xs w-full"></input>
                    </div> 
                </div>

            </div>

            <div className="ml-32 mr-32 pt-16 flex flex-wrap pb-8">
                <span className="flex-0 font-semibold mr-56">Upshift</span>
                <span className="flex-0 font-light mr-56">Copyright, 2019 Upshift, Inc.</span>
                <div>
                    <span className="rounded-full h-16 w-16 bg-gray-300 py-2 px-3 text-center mx-auto mr-6">X</span>
                    <span className="rounded-full h-16 w-16 bg-gray-300 py-2 px-3 text-center mx-auto mr-6">X</span>
                    <span className="rounded-full h-16 w-16 bg-gray-300 py-2 px-3 text-center mx-auto">X</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;