import { actionTypes } from "../types/actionTypes";

const initialState = {
    capsules: [],
    filteredCapsules: [],
    searchedData: [],
    error: '',
};

export const capsuleReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_CAPSULES:
            return { ...state, capsules: payload };

        case actionTypes.FETCH_ERROR:
            return { ...state, error: payload };

        case actionTypes.FILTER_CAPSULES:
            const capsulesList = state.capsules;
            const { status, type } = payload;
            let filteredCapsules = [];
            const selectedStatuses = status.filter(st => st.checked);
            const selectedTypes = type.filter(tp => tp.checked);
            filteredCapsules = capsulesList.filter(c => {
                let match = true;
                //Searching filters in data
                if (selectedStatuses.length > 0 && selectedTypes.length > 0) {
                    if (!selectedStatuses.some(st => st.value === c.status) || !selectedTypes.some(tp => tp.value === c.type)) {
                        match = false;
                    }
                }else  if(selectedStatuses.length > 0 && !selectedTypes.length > 0) {
                    if (!selectedStatuses.some(st => st.value === c.status)) {
                        match = false;
                    }
                } else if(selectedTypes.length > 0 && !selectedStatuses.length > 0) {
                    if (!selectedTypes.some(tp => tp.value === c.type)) {
                        match = false;
                    }
                }

                return match;
            })

            return { ...state, filteredCapsules };
        
        case actionTypes.SEARCH:
            const searchTerm = payload.toLowerCase().trim();
            let searchedData = [];
            if(searchTerm){
                searchedData = state.capsules.filter(c => {
                   const serial = c.serial.toLowerCase();
                   const status = c.status.toLowerCase();
                   const type = c.type.toLowerCase();
                   let last_update_ = '';
                   if(c.last_update !== null){
                    last_update_ = c.last_update.toLowerCase();
                   }

                   return (
                    serial.includes(searchTerm) || 
                    status.includes(searchTerm) || 
                    type.includes(searchTerm) || 
                    last_update_.includes(searchTerm)
                   )
                }) 
            }
            return {...state, searchedData}
            
        default:
            return state;
    }
}

