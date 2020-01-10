import React from 'react';
import bilogo from '../logos/bi.svg';
import ibmlogo from '../logos/ibm.svg';
import wired from '../logos/wired.svg';
import googlelogo from '../logos/google.svg';
import arrow from '../logos/arrow.svg';

function Logos(){
    return (
        <div className="flex flex-wrap ml-0 justify-between text-center">
            <img src={bilogo} alt="Business Insider" className="flex-1 p-16 w-8 py-8 h-24"></img>
            <img src ={ibmlogo} alt="IBM"className ="flex-1 p-16 py-8 w-8 h-24"></img>
            <img src ={wired} alt="WIRED"className="flex-1 p-16 py-8 w-8 h-24"></img>
            <img src ={googlelogo} alt="Google" className="flex-1 p-16 py-8 w-8 h-24"></img>
            <a href="#bottom" className="flex-1">
                <img src={arrow} alt="Arrow" className="bg-gray-100 w-full text-center h-arrow"></img>
            </a>
        </div>

    );
}

export default Logos;