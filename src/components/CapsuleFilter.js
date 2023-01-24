
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { filterCapsules } from '../redux/actions';
import Checkbox from './Checkbox';
import DropdownButton from './DropdownButton';
import Search from './Search';
import { capsulesFilters } from '../filters';
import { CiFilter } from 'react-icons/ci';

const CapsuleFilter = () => {
    const dispatch = useDispatch();

    const [status, setStatus] = useState(capsulesFilters.status);
    const [type, setType] = useState(capsulesFilters.type);
    const [filtersCount, setFiltersCount] = useState(0);

    const handleStatusChange = ({ target }) => {
        const name = target.name;
        const checked = target.checked;

        setStatus(state => {
            return state.map((status) => {
                if (status.name === name) {
                    status.checked = checked;
                }
                return status;
            })
        });
        //Updating the selected filters count
        updateFiltersCount();
    }
    const handleTypeChange = ({ target }) => {
        const name = target.name;
        const checked = target.checked;

        setType(state => {
            return state.map((type) => {
                if (type.name === name) {
                    type.checked = checked
                }
                return type;
            })
        });
        //Updating the selected filters count
        updateFiltersCount();
    }

    useEffect(() => {
        //Dispatching data to redux filter action
        const isStatusChekced = status.filter(s => s.checked === true);
        const isTypeChecked = type.filter(t => t.checked === true);
        if (isStatusChekced.length > 0 || isTypeChecked.length > 0) {
            dispatch(filterCapsules({
                status: status,
                type: type
            }));

        }else{
            dispatch(filterCapsules({
                status: status,
                type: type
            }));  
        }
    }, [status, type, dispatch])
    
    //Checking how many filters are seleted
    const updateFiltersCount = () => {
        //Counting the filters selected
        const checkedStatus = status.filter(s => s.checked === true);
        const checkedTypes = type.filter(t => t.checked === true);
        setFiltersCount((checkedStatus.length) + (checkedTypes.length));
    }

    //Creating the filter button
    const FilterButton = () => {
        return (
            <>
                <CiFilter className='mr-2 text-2xl color-white font-bold' /> Filters
                {filtersCount > 0 ? <span className=' ml-3 flex text-base w-[30px] h-[30px] rounded-full bg-white text-sky-800 font-semibold items-center justify-center'>{filtersCount}</span> : ''}
            </>
        )
    }


    return (

        <div className='container mx-auto '>
            <div className='flex justify-items-stretch flex-col md:flex-row p-6 bg-slate-100 bg-opacity-20 rounded-md'>
                <div className='w-full md:w-1/2'>
                    <Search />
                </div>
                <div className='w-full md:w-1/2 flex justify-end mt-5 md:mt-0'>
                    <DropdownButton buttonText={<FilterButton />}>
                        <div className='p-4'>
                            <h4 className='font-bold mb-2 text-xl'>Status</h4>
                            <div className='border-b-2 mb-3'></div>
                            {
                                capsulesFilters.status.map((s, i) => <Checkbox key={i} id={`s_${i}`} name={s.name} title={s.title} checked={status[i].checked} onChange={handleStatusChange} className='mb-2' />)
                            }
                            <h4 className='font-bold text-xl mt-3 mb-2'>Types</h4>
                            <div className='border-b-2 mb-3'></div>
                            {
                                capsulesFilters.type.map((t, i) => <Checkbox key={i} id={`t_${i}`} name={t.name} title={t.title} checked={type[i].checked} onChange={handleTypeChange} className='mb-2' />)
                            }
                        </div>
                    </DropdownButton>
                </div>
            </div>
        </div>
    );
};

export default CapsuleFilter;




