import React from 'react'
import { MdChevronRight } from 'react-icons/md'

function SearchCard({ serial, type, status, last_update, handleClick }) {
  return (
    <article className="searchCard cursor-pointer rounded-xl border-2 mb-4 p-4 hover:bg-sky-100" onClick={handleClick}>
            <div className="relative pr-4">
                <h4 className="text-gray-600 text-lg font-semibold">{serial} - <span>{type}</span> - <span className='inline-block py-0 px-3 bg-sky-800 text-white font-normal capitalize rounded-md text-[12px]'>{status}</span></h4>
                <p className="text-gray-600 mt-2">{last_update}</p>
                <button className='absolute top-0 bottom-0 my-auto right-0 w-4 h-4 flex items-center justify-center searchCard-hover:text-indigo-400'><span className='ml-1 text-2xl'><MdChevronRight /></span></button>
            </div>
        </article>
  )
}

export default SearchCard