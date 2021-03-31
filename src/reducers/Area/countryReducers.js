
import {
    COUNTRY_DELETE_FAIL,
    COUNTRY_DELETE_REQUEST,
    COUNTRY_DELETE_SUCCESS,
    COUNTRY_DETAILS_FAIL,
    COUNTRY_DETAILS_SUCCESS,
    COUNTRY_LIST_FAIL,
    COUNTRY_LIST_REQUEST,
    COUNTRY_LIST_SUCCESS,
    COUNTRY_SAVE_FAIL,
    COUNTRY_SAVE_REQUEST,
    COUNTRY_SAVE_SUCCESS,
    COUNTRY_UPDATE_FAIL,
    COUNTRY_UPDATE_SUCCESS
} from '../../constants/Area/countryConstants';



let initialState = {
    country: false
}

function countryListReducer(state = { countries: [] }, action) {

    switch (action.type) {
        case COUNTRY_LIST_REQUEST:
            return { loading: true };
        case COUNTRY_LIST_SUCCESS:
            return { loading: false, countries: action.payload };
        case COUNTRY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function countryDetailsReducer(state = { country: false }, action) {

    switch (action.type) {
        case COUNTRY_DETAILS_SUCCESS:
            return { loading: false, country: action.payload };
        case COUNTRY_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function countryDeleteReducer(state = { country: {} }, action) {

    switch (action.type) {
        case COUNTRY_DELETE_REQUEST:
            return { loading: true };
        case COUNTRY_DELETE_SUCCESS:
            return { loading: false, country: action.payload, success: true };
        case COUNTRY_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function countrySaveReducer(state = initialState, action) {

    switch (action.type) {
        case COUNTRY_SAVE_REQUEST:
            return { loading: true };
        case COUNTRY_SAVE_SUCCESS:
            return { loading: false, success: true, country: action.payload };
        case COUNTRY_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function countryUpdateReducer(state = initialState, action) {

    switch (action.type) {
        case COUNTRY_UPDATE_SUCCESS:
            return { loading: false, success: true, country: action.payload };
        case COUNTRY_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { countryListReducer, countryDetailsReducer, countryDeleteReducer, countryUpdateReducer, countrySaveReducer }