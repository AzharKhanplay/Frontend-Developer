import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { CapsuleFilter, Stars, CapsuleCard, CapsuleModal, Pagination } from '../components/';
import { GiApolloCapsule } from 'react-icons/gi';
import { createPortal } from 'react-dom';

function Capsules() {
    const capsules = useSelector((state) => state.allCapsules.capsules);
    const filteredCapsules = useSelector((state) => state.allCapsules.filteredCapsules);
    const [selectedCapsule, setSelectedCapsule] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    
    //Show modal and set capsule data in state
    const showModal = (capsule) => {
        setModalVisible(true);
        setSelectedCapsule(capsule);
    }

    //CloseModal
    const closeModal = () => {
        setModalVisible(false);
    }

    //capsules list
    const capsulesList = capsules && capsules.map((capsule, i) => {
        const { serial, type, status, last_update } = capsule;
        return (
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4' key={i}>
                <CapsuleCard key={i} serial={serial} type={type} status={status} last_update={last_update} handleClick={() => showModal(capsule)} />
            </div>
        )
    });

    //filteredCapsules list 
    const filteredCapsulesList = filteredCapsules && filteredCapsules.map((capsule, i) => {
        const { serial, type, status, last_update } = capsule;
        return (
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4' key={i}>
                <CapsuleCard serial={serial} type={type} status={status} last_update={last_update} handleClick={() => showModal(capsule)} />
            </div>
        )
    });


    //For the pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    //Setting a capsulesData const to store the data of capsules or filteredCapsules
    const capsulesData = filteredCapsules.length > 0 ? (filteredCapsules) : (capsules);

    const totalPages = Math.ceil(capsulesData.length / itemsPerPage);

    //Handling the page change
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    //Setting the data in pagination
    const currentPageData = capsulesData.slice(startIndex, endIndex).map((capsule, i) => {
        const { serial, type, status, last_update } = capsule;
        return (
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2 md:p-4' key={i}>
                <CapsuleCard serial={serial} type={type} status={status} last_update={last_update} handleClick={() => showModal(capsule)} />
            </div>
        )
    }

    )

    return (
        <>
            <section className='py-5 relative bg-yellow-600/80 bg-opacity/30 '>
                <div className=' absolute top-0 right-0 bottom-0 left-0 z-0'>
                    <Stars />
                </div>
                <div className='container px-6 md:px-6 lg:px-10 mx-auto relative z-20'>
                    <CapsuleFilter />

                    <div className='flex flex-wrap justify-items-center mt-4 -ml-4 -mr-4'>

                        {
                            //Checking if there is no capseles in filter then show the all capsules else render the filtered capsules
                            !filteredCapsules.length > 0 ?
                                capsulesList &&
                                (
                                    capsulesList.length > 0 ? (
                                        <>
                                            {currentPageData}
                                            <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} perPageHandle={(e) => {setItemsPerPage(e.target.value);setCurrentPage(1);} } />
                                        </>
                                    ) : (
                                        <div className='w-full min-h-[400px] flex justify-center items-center'>
                                            <div className='text-center'>
                                                <GiApolloCapsule className='inline-block text-[3rem] text-white animate-ping' />
                                                <h4 className='text-2xl text-white mt-4'>Loading...</h4>
                                            </div>

                                        </div>
                                    )
                                )
                                :
                                filteredCapsulesList &&
                                (
                                    filteredCapsulesList.length > 0 ? (
                                        <>
                                            {currentPageData}
                                            <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} perPageHandle={(e) => {setItemsPerPage(e.target.value);setCurrentPage(1);} } />
                                        </>
                                    ) : (
                                        <div className='w-full min-h-[480px] flex justify-center items-center'>
                                            <div className='text-center'>
                                                <GiApolloCapsule className='inline-block text-[5rem]' />
                                                <h4 className='text-xl mt-4 font-semibold'>There is no capsule in this filter.</h4>
                                            </div>

                                        </div>
                                    )
                                )

                        }

                    </div>
                </div>
            </section>
             
            {  //Rendering Modal
                modalVisible && selectedCapsule && createPortal(
                <CapsuleModal selectedCapsule={selectedCapsule} handleClick={closeModal} />,
                document.getElementById('root-modal')
            )}


        </>
    )
}

export default Capsules