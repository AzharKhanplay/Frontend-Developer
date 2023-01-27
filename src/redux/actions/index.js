// define the actions
import { actionTypes } from "../types/actionTypes";

//Setting the capsules data into store
export const setCapsules = (capsules) => {
    return {
        type: actionTypes.FETCH_CAPSULES,
        payload: capsules
    }
}

//Action to handle Error in fetch api
export const setFetchError = (error) => {
    return {
        type: actionTypes.FETCH_ERROR,
        payload: error
    }
}

//Action to filter the capsules
export const filterCapsules = (filters) => {
    return {
        type: actionTypes.FILTER_CAPSULES,
        payload: filters
    }
}
//Search action
export const searchInCapsule = (term) => {
    return {
        type: actionTypes.SEARCH,
        payload: term
    }
}