import { BCATEGORY_DELETE_FAIL, BCATEGORY_DELETE_REQUEST, BCATEGORY_DELETE_SUCCESS, BCATEGORY_DETAILS_FAIL, BCATEGORY_DETAILS_SUCCESS, BCATEGORY_LIST_FAIL, BCATEGORY_LIST_REQUEST, BCATEGORY_LIST_SUCCESS, BCATEGORY_SAVE_FAIL, BCATEGORY_SAVE_REQUEST, BCATEGORY_SAVE_SUCCESS, BCATEGORY_UPDATE_FAIL, BCATEGORY_UPDATE_SUCCESS } from "../../constants/business/bcategoryConstants";


let initialState = {
    category: false

}

function bcategoryListReducer(state = { categories: [] }, action) {

    switch (action.type) {
        case BCATEGORY_LIST_REQUEST:
            return { loading: true };
        case BCATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload };
        case BCATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function bcategoryDetailsReducer(state = { category: false }, action) {

    switch (action.type) {
        case BCATEGORY_DETAILS_SUCCESS:
            return { loading: false, category: action.payload };
        case BCATEGORY_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function bcategoryDeleteReducer(state = { category: {} }, action) {

    switch (action.type) {
        case BCATEGORY_DELETE_REQUEST:
            return { loading: true };
        case BCATEGORY_DELETE_SUCCESS:
            return { loading: false, category: action.payload, success: true };
        case BCATEGORY_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function bcategorySaveReducer(state = initialState, action) {

    switch (action.type) {
        case BCATEGORY_SAVE_REQUEST:
            return { loading: true };
        case BCATEGORY_SAVE_SUCCESS:
            return { loading: false, success: true, category: action.payload };
        case BCATEGORY_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function bcategoryUpdateReducer(state = initialState, action) {

    switch (action.type) {

        case BCATEGORY_UPDATE_SUCCESS:
            return { loading: false, success: true, category: action.payload };
        case BCATEGORY_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export {
    bcategoryListReducer,
    bcategoryDetailsReducer,
    bcategoryDeleteReducer,
    bcategoryUpdateReducer,
    bcategorySaveReducer
}