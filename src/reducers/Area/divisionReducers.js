import {
    DIVISION_DELETE_FAIL,
    DIVISION_DELETE_REQUEST,
    DIVISION_DELETE_SUCCESS,
    DIVISION_DETAILS_FAIL,
    DIVISION_DETAILS_SUCCESS,
    DIVISION_LIST_FAIL,
    DIVISION_LIST_REQUEST,
    DIVISION_LIST_SUCCESS,
    DIVISION_SAVE_FAIL,
    DIVISION_SAVE_REQUEST,
    DIVISION_SAVE_SUCCESS,
    DIVISION_UPDATE_FAIL,
    DIVISION_UPDATE_SUCCESS
} from '../../constants/Area/divisionConstants';

let initialState = {
    division: false
}

function divisionListReducer(state = { divisions: [] }, action) {

    switch (action.type) {
        case DIVISION_LIST_REQUEST:
            return { loading: true };
        case DIVISION_LIST_SUCCESS:
            return { loading: false, divisions: action.payload };
        case DIVISION_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function divisionDetailsReducer(state = { division: {} }, action) {

    switch (action.type) {
        case DIVISION_DETAILS_SUCCESS:
            return { loading: false, division: action.payload };
        case DIVISION_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function divisionDeleteReducer(state = { division: {} }, action) {

    switch (action.type) {
        case DIVISION_DELETE_REQUEST:
            return { loading: true };
        case DIVISION_DELETE_SUCCESS:
            return { loading: false, division: action.payload, success: true };
        case DIVISION_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function divisionSaveReducer(state = initialState, action) {

    switch (action.type) {
        case DIVISION_SAVE_REQUEST:
            return { loading: true };
        case DIVISION_SAVE_SUCCESS:
            return { loading: false, success: true, division: action.payload };
        case DIVISION_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function divisionUpdateReducer(state = initialState, action) {

    switch (action.type) {
        case DIVISION_UPDATE_SUCCESS:
            return { loading: false, success: true, division: action.payload };
        case DIVISION_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { divisionListReducer, divisionDetailsReducer, divisionDeleteReducer, divisionUpdateReducer, divisionSaveReducer }