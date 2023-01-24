import React from 'react'
import { GiApolloCapsule } from 'react-icons/gi'
import { MdClose } from 'react-icons/md';


function CapsuleModal({selectedCapsule, handleClick}) {
  

  return (
    <div className={`modal fixed  top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center transition-all duration-75  w-full h-full"}`}>
  <div className="overlay absolute w-full h-full bg-black/70" onClick={handleClick}></div>
  <div className="modal-content bg-white rounded-lg border-2 border-opacity-20 max-w-[360px] md:max-w-[480px] relative shadow-2xl">
    <div className="modal-header bg-gray-200 py-4 px-5  text-lg font-medium flex items-center justify-center">
        <h4 className='text-xl'>
          <GiApolloCapsule className='inline-block text-3xl text-black mr-3' /> 
          Capsule - {selectedCapsule ? selectedCapsule.serial : ""}</h4>
        <div className=' flex-grow'></div>
        <button className="modal-close cursor-pointer text-2xl font-medium py-2 pt-1 px-4 text-black" onClick={handleClick}><MdClose/></button>
    </div>
    <div className="modal-body p-3 pt-5 md:p-6">
        <div className=" overflow-auto pb-3">
           <table className='border min-w-full text-left rounded-md'>
            <tbody>
            <tr className='border-b border-2 hover:bg-gray-100 mb-3'>
              <th className='border-r border-2 p-3 min-w-[120px] md:min-w-[150px] whitespace-normal break-words'><span className="font-medium">Id:</span></th>
              <td className='border-2 p-3 whitespace-normal break-words'> {selectedCapsule ? selectedCapsule.id : ""}</td>
            </tr>
            <tr className='border-b border-2 hover:bg-gray-100 mb-3'>
              <th className='border-r border-2 p-3'><span className="font-medium">Serial:</span></th>
              <td className='border-2 p-3 whitespace-normal break-words'> {selectedCapsule ? selectedCapsule.serial : ""}</td>
            </tr>
            <tr className='border-b border-2 hover:bg-gray-100 mb-3'>
              <th className='border-r border-2 p-3'><span className="font-medium">Type:</span></th>
              <td className='border-2 p-3 whitespace-normal break-words'> {selectedCapsule ? selectedCapsule.type : ""}</td></tr>
            <tr className='border-b border-2 hover:bg-gray-100 mb-3'>
              <th className='border-r border-2 p-3'><span className="font-medium">Status:</span></th>
              <td className='border-2 p-3 whitespace-normal break-words'> {selectedCapsule ? selectedCapsule.status : ""}</td></tr>
            <tr className='border-b border-2 hover:bg-gray-100 mb-3'>
              <th className='border-r border-2 p-3'><span className="font-medium">Land Landings:</span></th>
              <td className='border-2 p-3 whitespace-normal break-words'> {selectedCapsule ? selectedCapsule.land_landings : ""}</td>
            </tr>
            <tr className='border-b border-2 hover:bg-gray-100 mb-3'>
              <th className='border-r border-2 p-3'><span className="font-medium">Water Landings:</span></th>
              <td className='border-2 p-3 whitespace-normal break-words'> {selectedCapsule ? selectedCapsule.water_landings : ""}</td></tr>
            <tr className='border-b border-2 hover:bg-gray-100 mb-3'>
              <th className='border-r border-2 p-3'><span className="font-medium">Launches:</span></th>
              <td className='border-2 p-3 whitespace-normal break-words'><span>{selectedCapsule ? selectedCapsule.launches : ""}</span></td></tr>
            <tr className='border-b border-2 hover:bg-gray-100 mb-3'>
              <th className='border-r border-2 p-3'><span className="font-medium">Reuse Count:</span></th>
              <td className='border-2 p-3 whitespace-normal break-words'> {selectedCapsule ? selectedCapsule.reuse_count : ""}</td></tr>
            <tr className='hover:bg-gray-100 mb-3'>
              <th className='border-r border-2 p-3'><span className="font-medium">Last Update:</span></th>
              <td className='border-2 p-3 whitespace-normal break-words'> {selectedCapsule ? selectedCapsule.last_update : ""}</td></tr>
            </tbody>
           </table>
        </div>
    </div>
  </div>
</div>

  )
}

export default CapsuleModal