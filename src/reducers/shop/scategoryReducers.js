import {
    SCATEGORY_DELETE_FAIL,
    SCATEGORY_DELETE_REQUEST,
    SCATEGORY_DELETE_SUCCESS,

    SCATEGORY_DETAILS_FAIL,
    SCATEGORY_DETAILS_SUCCESS,

    SCATEGORY_LIST_FAIL,
    SCATEGORY_LIST_REQUEST,
    SCATEGORY_LIST_SUCCESS,

    SCATEGORY_SAVE_FAIL,
    SCATEGORY_SAVE_REQUEST,
    SCATEGORY_SAVE_SUCCESS,

    SCATEGORY_UPDATE_FAIL,
    SCATEGORY_UPDATE_SUCCESS
} from "../../constants/shop/scategoryConstants";

let initialState = {
    category: false

}

function scategoryListReducer(state = { categories: [] }, action) {

    switch (action.type) {
        case SCATEGORY_LIST_REQUEST:
            return { loading: true };
        case SCATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload };
        case SCATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function scategoryDetailsReducer(state = { category: false }, action) {

    switch (action.type) {
        case SCATEGORY_DETAILS_SUCCESS:
            return { loading: false, category: action.payload };
        case SCATEGORY_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function scategoryDeleteReducer(state = { category: {} }, action) {

    switch (action.type) {
        case SCATEGORY_DELETE_REQUEST:
            return { loading: true };
        case SCATEGORY_DELETE_SUCCESS:
            return { loading: false, category: action.payload, success: true };
        case SCATEGORY_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function scategorySaveReducer(state = initialState, action) {

    switch (action.type) {
        case SCATEGORY_SAVE_REQUEST:
            return { loading: true };
        case SCATEGORY_SAVE_SUCCESS:
            return { loading: false, success: true, category: action.payload };
        case SCATEGORY_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function scategoryUpdateReducer(state = initialState, action) {

    switch (action.type) {

        case SCATEGORY_UPDATE_SUCCESS:
            return { loading: false, success: true, category: action.payload };
        case SCATEGORY_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export {
    scategoryListReducer,
    scategoryDetailsReducer,
    scategoryDeleteReducer,
    scategoryUpdateReducer,
    scategorySaveReducer
}