import React from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

function Pagination({ currentPage, totalPages, handlePageChange, perPageHandle }) {

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='w-full'>
      <div className='w-full flex flex-wrap px-4 mt-3 py-4  rounded-md justify-center'>
        <div className='w-full md:w-1/2'>
          <div className=''>
            <label htmlFor='c_per_page' className='w-auto py-0 px-2 border-2 bg-gray-300  flex items-center justify-center mx-auto md:mx-0 max-w-[210px] rounded-sm'>Capsules per page:
              <select id="c_per_page" className='border-0 bg-gray-300 text-black py-2 ml-2 px-0 outline-none  ' onChange={perPageHandle}>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </label>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='pagination w-full flex items-center mt-3 md:mt-0 justify-center md:justify-end flex-wrap'>
            <button disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className=' bg-white text-sky-800 hover:bg-sky-800 hover:text-white py-2 px-4 cursor-pointer mr-2 my-2 rounded-md text-xl disabled:bg-gray-500 disabled:text-white'>
              <FiChevronsLeft />
            </button>
            {pageNumbers.slice(Math.max(currentPage - 3, 0), Math.min(currentPage + 2, totalPages)).map(number => {
              return (
                <span key={number}
                  className={`inline-block cursor-pointer py-1 px-4 my-2 rounded-md text-lg mx-2 ${currentPage === number ? 'bg-sky-800 text-white shadow-2xl' : 'bg-white text-black hover:bg-sky-800 hover:text-white'}`}
                  onClick={() => handlePageChange(number)}>
                  {number}
                </span>
              )
            })}
            <button disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className=' bg-white text-sky-800 hover:bg-sky-800 hover:text-white py-2 px-4 ml-2 my-2 cursor-pointer rounded-md text-xl disabled:bg-gray-500 disabled:text-white'>
              <FiChevronsRight />
            </button>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Pagination