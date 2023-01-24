import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchInCapsule } from '../redux/actions';
import SearchCard from './SearchCard';
import CapsuleModal from './CapsuleModal';
import { createPortal } from 'react-dom';
import { MdSearch } from 'react-icons/md'

function Search({ data, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearchingBox, setShowSearchingBox] = useState(false);
    const dispatch = useDispatch();
    const searchedData = useSelector((state) => state.allCapsules.searchedData);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);

        setShowSearchingBox(e.target.value !== '');

        console.log("searchedData", searchedData, showSearchingBox);
    }

    useEffect(() => {
        if (searchTerm !== '') {
            dispatch(searchInCapsule(searchTerm));
        }
    }, [searchTerm, dispatch]);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCapsule, setSelectedCapsule] = useState(null);
    const [mobileSearch, setMobileSearch] = useState(false);

    const showModal = (capsule) => {
        setModalVisible(!modalVisible);
        setSelectedCapsule(capsule);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const handleMobileSearch = () => {
        setMobileSearch(true);
    }

    const handleSearchClose = () => {
        setShowSearchingBox(false);
        setMobileSearch(false);
    }


    return (
        <>
            <div className='search-bar relative'>
               <button className=' absolute left-0 block md:hidden py-2 px-4 bg-white rounded-lg text-lg' onClick={handleMobileSearch}><MdSearch className='inline-block text-2xl'/> Search</button>
                <div className={`${mobileSearch === true ? 'block' : 'hidden'} fixed left-0 right-0 top-0 bottom-0 z-10`} onClick={() => handleSearchClose()}></div>
                <div className={`${mobileSearch === true ? 'block py-2 px-3 -mx-6 shadow-lg' : 'hidden' } absolute top-[70px] left-0 right-0 md:top-0 md:block md:relative rounded-md shadow-sm bg-white z-20`}>
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={handleSearch}
                        onFocus={handleSearch}
                        className="form-input py-3 pl-10 placeholder:text-lg placeholder:text-black pr-4 text-lg block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm"
                        placeholder="Search in capsules"
                    />
                    <div className="absolute left-2 inset-y-0 md:left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                {showSearchingBox && 
                    <>
                        <div className='fixed left-0 right-0 top-0 bottom-0 z-10' onClick={() => handleSearchClose()}></div>
                        <div className={`${mobileSearch === true ? 'w-auto px-3 top-[135px] -left-6 -right-6' : '' } search-content w-full p-3 md:py-5 md:px-6 absolute left-0 top-[130px] md:top-[calc(100%+25px)] bg-white rounded-lg shadow-2xl shadow-slate-900 z-20 max-h-[480px] overflow-hidden`}>
                            {searchedData && searchedData.length > 0
                                ? (
                                    <>
                                        <h4 className='mb-4'>Searched Capsules <span className='text-sm font-bold rounded-2xl border-2 bg-slate-200 px-2 py-1'>{searchedData.length}</span></h4>
                                        <div className=' overflow-y-auto h-[400px] pr-3'>
                                            {
                                                searchedData.map(((sd, i) => {
                                                    return (
                                                        <SearchCard key={i} serial={sd.serial} status={sd.status} type={sd.type} last_update={sd.last_update} handleClick={() => showModal(sd)} />
                                                    );
                                                }))
                                            }
                                        </div>
                                    </>
                                ) : (

                                    <h4>There is no capsule available with this Search '{searchTerm}''.</h4>
                                )
                            }
                        </div>
                    </>
                }
            </div>
            {
                //Rendering Modal
                 modalVisible && selectedCapsule && createPortal(
                <CapsuleModal selectedCapsule={selectedCapsule} handleClick={closeModal} />,
                document.getElementById('root-modal')
            )
            }
            
        </>
    );
}

export default Search;
