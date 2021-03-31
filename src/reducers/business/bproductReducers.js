import {
    BPRODUCT_DELETE_FAIL,
    BPRODUCT_DELETE_REQUEST,
    BPRODUCT_DELETE_SUCCESS,

    BPRODUCT_DETAILS_FAIL,
    BPRODUCT_DETAILS_SUCCESS,


    BPRODUCT_LIST_CATEGORY_FAIL,
    BPRODUCT_LIST_CATEGORY_REQUEST,
    BPRODUCT_LIST_CATEGORY_SUCCESS,

    BPRODUCT_LIST_REQUEST,
    BPRODUCT_LIST_SUCCESS,
    BPRODUCT_LIST_FAIL,

    BPRODUCT_SAVE_REQUEST,
    BPRODUCT_SAVE_SUCCESS,
    BPRODUCT_SAVE_FAIL,

    BPRODUCT_UPDATE_SUCCESS,
    BPRODUCT_UPDATE_FAIL
} from "../../constants/business/bproductConstants";

let initialState = {
    product: false

}

function sproductListReducer(state = { products: [] }, action) {

    switch (action.type) {
        case BPRODUCT_LIST_REQUEST:
            return { loading: true };
        case BPRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case BPRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}




function sproductListByCategoryReducer(state = { products: [] }, action) {

    switch (action.type) {
        case BPRODUCT_LIST_CATEGORY_REQUEST:
            return { loading: true };
        case BPRODUCT_LIST_CATEGORY_SUCCESS:
            return { loading: false, products: action.payload };
        case BPRODUCT_LIST_CATEGORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}




function sproductDetailsReducer(state = { product: false }, action) {

    switch (action.type) {
        case BPRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case BPRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function sproductDeleteReducer(state = { product: {} }, action) {

    switch (action.type) {
        case BPRODUCT_DELETE_REQUEST:
            return { loading: true };
        case BPRODUCT_DELETE_SUCCESS:
            return { loading: false, product: action.payload, success: true };
        case BPRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}



function sproductSaveReducer(state = initialState, action) {

    switch (action.type) {
        case BPRODUCT_SAVE_REQUEST:
            return { loading: true };
        case BPRODUCT_SAVE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case BPRODUCT_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function sproductUpdateReducer(state = initialState, action) {

    switch (action.type) {

        case BPRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case BPRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export {
    sproductListReducer,
    sproductListByCategoryReducer,
    sproductDetailsReducer,
    sproductDeleteReducer,
    sproductUpdateReducer,
    sproductSaveReducer
}