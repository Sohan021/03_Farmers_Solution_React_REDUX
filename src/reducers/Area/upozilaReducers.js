import {
    UPOZILA_DELETE_FAIL,
    UPOZILA_DELETE_REQUEST,
    UPOZILA_DELETE_SUCCESS,
    UPOZILA_DETAILS_FAIL,
    UPOZILA_DETAILS_SUCCESS,
    UPOZILA_LIST_FAIL,
    UPOZILA_LIST_REQUEST,
    UPOZILA_LIST_SUCCESS,
    UPOZILA_SAVE_FAIL,
    UPOZILA_SAVE_REQUEST,
    UPOZILA_SAVE_SUCCESS,
    UPOZILA_UPDATE_FAIL,
    UPOZILA_UPDATE_SUCCESS
} from '../../constants/Area/upozilaConstants';
let initialState = {
    upozila: false
}

function upozilaListReducer(state = { upozilas: [] }, action) {

    switch (action.type) {
        case UPOZILA_LIST_REQUEST:
            return { loading: true };
        case UPOZILA_LIST_SUCCESS:
            return { loading: false, upozilas: action.payload };
        case UPOZILA_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function upozilaDetailsReducer(state = { upozila: {} }, action) {

    switch (action.type) {
        case UPOZILA_DETAILS_SUCCESS:
            return { loading: false, upozila: action.payload };
        case UPOZILA_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function upozilaDeleteReducer(state = { upozila: {} }, action) {

    switch (action.type) {
        case UPOZILA_DELETE_REQUEST:
            return { loading: true };
        case UPOZILA_DELETE_SUCCESS:
            return { loading: false, upozila: action.payload, success: true };
        case UPOZILA_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function upozilaSaveReducer(state = initialState, action) {

    switch (action.type) {
        case UPOZILA_SAVE_REQUEST:
            return { loading: true };
        case UPOZILA_SAVE_SUCCESS:
            return { loading: false, success: true, upozila: action.payload };
        case UPOZILA_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function upozilaUpdateReducer(state = initialState, action) {

    switch (action.type) {
        case UPOZILA_UPDATE_SUCCESS:
            return { loading: false, success: true, upozila: action.payload };
        case UPOZILA_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { upozilaListReducer, upozilaDetailsReducer, upozilaDeleteReducer, upozilaUpdateReducer, upozilaSaveReducer }