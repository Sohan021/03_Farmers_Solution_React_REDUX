import {
    UNION_DELETE_FAIL,
    UNION_DELETE_REQUEST,
    UNION_DELETE_SUCCESS,
    UNION_DETAILS_FAIL,
    UNION_DETAILS_SUCCESS,
    UNION_LIST_FAIL,
    UNION_LIST_REQUEST,
    UNION_LIST_SUCCESS,
    UNION_SAVE_FAIL,
    UNION_SAVE_REQUEST,
    UNION_SAVE_SUCCESS,
    UNION_UPDATE_FAIL,
    UNION_UPDATE_SUCCESS
} from '../../constants/Area/unionConstants';

let initialState = {
    union: false
}

function unionListReducer(state = { unions: [] }, action) {

    switch (action.type) {
        case UNION_LIST_REQUEST:
            return { loading: true };
        case UNION_LIST_SUCCESS:
            return { loading: false, unions: action.payload };
        case UNION_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function unionDetailsReducer(state = { union: {} }, action) {

    switch (action.type) {
        case UNION_DETAILS_SUCCESS:
            return { loading: false, union: action.payload };
        case UNION_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function unionDeleteReducer(state = { union: {} }, action) {

    switch (action.type) {
        case UNION_DELETE_REQUEST:
            return { loading: true };
        case UNION_DELETE_SUCCESS:
            return { loading: false, union: action.payload, success: true };
        case UNION_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function unionSaveReducer(state = initialState, action) {

    switch (action.type) {
        case UNION_SAVE_REQUEST:
            return { loading: true };
        case UNION_SAVE_SUCCESS:
            return { loading: false, success: true, union: action.payload };
        case UNION_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function unionUpdateReducer(state = initialState, action) {

    switch (action.type) {
        case UNION_UPDATE_SUCCESS:
            return { loading: false, success: true, union: action.payload };
        case UNION_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { unionListReducer, unionDetailsReducer, unionDeleteReducer, unionUpdateReducer, unionSaveReducer }