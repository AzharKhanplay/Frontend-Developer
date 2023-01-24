import React, { useState } from 'react';

function DropdownButton({ children, buttonText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-sky-800 text-white py-2 px-4 rounded-md flex items-center text-lg"
      >
        {buttonText}
      </button>
      {isOpen && (
        <>
        <div className='fixed left-0 right-0 top-0 bottom-0 z-10' onClick={() => setIsOpen(false)}></div>
        <div className="absolute right-0 py-2 w-64 mt-2 bg-white rounded-xl shadow-lg border-2 border-gray-500 border-opacity-50 z-20">
          <div className='px-2'>
            {children}
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default DropdownButton;
