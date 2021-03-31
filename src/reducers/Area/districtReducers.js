import {
    DISTRICT_DELETE_FAIL,
    DISTRICT_DELETE_REQUEST,
    DISTRICT_DELETE_SUCCESS,
    DISTRICT_DETAILS_FAIL,
    DISTRICT_DETAILS_SUCCESS,
    DISTRICT_LIST_FAIL,
    DISTRICT_LIST_REQUEST,
    DISTRICT_LIST_SUCCESS,
    DISTRICT_SAVE_FAIL,
    DISTRICT_SAVE_REQUEST,
    DISTRICT_SAVE_SUCCESS,
    DISTRICT_UPDATE_FAIL,
    DISTRICT_UPDATE_SUCCESS
} from '../../constants/Area/districtConstants';

let initialState = {
    district: false
}

function districtListReducer(state = { districts: [] }, action) {

    switch (action.type) {
        case DISTRICT_LIST_REQUEST:
            return { loading: true };
        case DISTRICT_LIST_SUCCESS:
            return { loading: false, districts: action.payload };
        case DISTRICT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function districtDetailsReducer(state = { district: {} }, action) {

    switch (action.type) {
        case DISTRICT_DETAILS_SUCCESS:
            return { loading: false, district: action.payload };
        case DISTRICT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function districtDeleteReducer(state = { district: {} }, action) {

    switch (action.type) {
        case DISTRICT_DELETE_REQUEST:
            return { loading: true };
        case DISTRICT_DELETE_SUCCESS:
            return { loading: false, district: action.payload, success: true };
        case DISTRICT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function districtSaveReducer(state = initialState, action) {

    switch (action.type) {
        case DISTRICT_SAVE_REQUEST:
            return { loading: true };
        case DISTRICT_SAVE_SUCCESS:
            return { loading: false, success: true, district: action.payload };
        case DISTRICT_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function districtUpdateReducer(state = initialState, action) {

    switch (action.type) {
        case DISTRICT_UPDATE_SUCCESS:
            return { loading: false, success: true, district: action.payload };
        case DISTRICT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { districtListReducer, districtDetailsReducer, districtDeleteReducer, districtUpdateReducer, districtSaveReducer }