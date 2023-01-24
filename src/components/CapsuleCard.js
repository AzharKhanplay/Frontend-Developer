import React from 'react';


function CapsuleCard ({ serial, type, status, last_update, handleClick }) {
    return (
        <article className=" bg-sky-100 cursor-pointer border-0 border-white shadow-white shadow-sm rounded-lg overflow-hidden h-full " onClick={handleClick}>
            <div className="px-6 py-4">
                <span className='inline-block px-2 text-sm py-1 bg-sky-800 text-white rounded-md'>{serial}</span>
                <h4 className="text-black py-2"><span className=' font-semibold'>Type:</span> {type}</h4>
                <h4 className="text-gray-600"><span className='font-semibold'>Status:</span> {status}</h4>
                <p className="text-gray-600 pt-2 min-h[56px]"><span className='font-semibold'>Last Update:</span> {last_update && last_update.length > 35 ? last_update.substr(0, 35)+'...' : last_update}</p>
                
            </div>
        </article>
    );
}

export default CapsuleCard;
