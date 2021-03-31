import {
    BORDER_CREATE_REQUEST,
    BORDER_CREATE_SUCCESS,
    BORDER_CREATE_FAIL,

    BORDER_DETAILS_SUCCESS,
    BORDER_DETAILS_FAIL,

    BORDER_PAY_REQUEST,
    BORDER_PAY_SUCCESS,
    BORDER_PAY_FAIL,

    MY_BORDER_LIST_REQUEST,
    MY_BORDER_LIST_SUCCESS,
    MY_BORDER_LIST_FAIL,

    BORDER_LIST_REQUEST,
    BORDER_LIST_SUCCESS,
    BORDER_LIST_FAIL,

    BORDER_DELETE_REQUEST,
    BORDER_DELETE_SUCCESS,
    BORDER_DELETE_FAIL,
    FARMER_GET_BORDER_LIST_REQUEST,
    FARMER_GET_BORDER_LIST_FAIL,
    FARMER_GET_BORDER_LIST_SUCCESS
} from "../../constants/business/borderConstants";


let initialState = {
    order: false
}


function borderCreateReducer(state = initialState, action) {

    switch (action.type) {
        case BORDER_CREATE_REQUEST:
            return { loading: true };
        case BORDER_CREATE_SUCCESS:
            return { loading: false, order: action.payload, success: true };
        case BORDER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function borderDetailsReducer(state = { order: [] }, action) {
    switch (action.type) {
        case BORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload };
        case BORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function mybOrderListReducer(state = { orders: [] }, action) {
    switch (action.type) {
        case MY_BORDER_LIST_REQUEST:
            return { loading: true };
        case MY_BORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case MY_BORDER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function farmerbOrderListReducer(state = { orders: [] }, action) {
    switch (action.type) {
        case FARMER_GET_BORDER_LIST_REQUEST:
            return { loading: true };
        case FARMER_GET_BORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case FARMER_GET_BORDER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function borderListReducer(state = { orders: [] }, action) {
    switch (action.type) {
        case BORDER_LIST_REQUEST:
            return { loading: true };
        case BORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case BORDER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function borderPayReducer(state = { order: { orderItems: [], shipping: {}, payment: {} } }, action) {
    switch (action.type) {
        case BORDER_PAY_REQUEST:
            return { loading: true };
        case BORDER_PAY_SUCCESS:
            return { loading: false, success: true };
        case BORDER_PAY_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function borderDeleteReducer(state = {
    order: {
        orderItems: [],
        shipping: {},
        payment: {}
    }
}, action) {
    switch (action.type) {
        case BORDER_DELETE_REQUEST:
            return { loading: true };
        case BORDER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case BORDER_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

export {
    borderCreateReducer,
    borderDetailsReducer,
    farmerbOrderListReducer,
    borderPayReducer,
    mybOrderListReducer,
    borderListReducer,
    borderDeleteReducer
}
