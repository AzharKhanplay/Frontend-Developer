import React from 'react'

function Checkbox({ id, name, value, checked, onChange, title, className }) {
    return (
        <div className={`flex items-center rounded-sm text-sm ${className} custom-checkbox`}>
            <input
                id={id}
                type="checkbox"
                name={name} 
                value={value}
                checked={checked}
                onChange={onChange}
                className='w-6 h-6 opacity-0 absolute'
            />
            <div className='bg-white border-2 rounded-md w-6 h-6 flex items-center justify-center'>
                <svg className="fill-white hidden w-3 h-3 pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <g transform="translate(-9 -11)">
                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                    </g>
                </svg>
            </div>
            <label className='ml-2 text-lg' htmlFor={id}>{title}</label>
        </div> 
    )
} 

export default Checkbox