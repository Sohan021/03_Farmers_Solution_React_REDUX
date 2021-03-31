import {
    SORDER_CREATE_REQUEST,
    SORDER_CREATE_SUCCESS,
    SORDER_CREATE_FAIL,

    SORDER_DETAILS_SUCCESS,
    SORDER_DETAILS_FAIL,

    SORDER_PAY_REQUEST,
    SORDER_PAY_SUCCESS,
    SORDER_PAY_FAIL,

    MY_SORDER_LIST_REQUEST,
    MY_SORDER_LIST_SUCCESS,
    MY_SORDER_LIST_FAIL,

    SORDER_LIST_REQUEST,
    SORDER_LIST_SUCCESS,
    SORDER_LIST_FAIL,

    SORDER_DELETE_REQUEST,
    SORDER_DELETE_SUCCESS,
    SORDER_DELETE_FAIL
} from "../../constants/shop/sorderConstants";


let initialState = {
    order: false
}


function sorderCreateReducer(state = initialState, action) {

    switch (action.type) {
        case SORDER_CREATE_REQUEST:
            return { loading: true };
        case SORDER_CREATE_SUCCESS:
            return { loading: false, order: action.payload, success: true };
        case SORDER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function sorderDetailsReducer(state = { order: [] }, action) {
    switch (action.type) {
        case SORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload };
        case SORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function mysOrderListReducer(state = { orders: [] }, action) {
    switch (action.type) {
        case MY_SORDER_LIST_REQUEST:
            return { loading: true };
        case MY_SORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case MY_SORDER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function sorderListReducer(state = { orders: [] }, action) {
    switch (action.type) {
        case SORDER_LIST_REQUEST:
            return { loading: true };
        case SORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case SORDER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function sorderPayReducer(state = { order: { orderItems: [], shipping: {}, payment: {} } }, action) {
    switch (action.type) {
        case SORDER_PAY_REQUEST:
            return { loading: true };
        case SORDER_PAY_SUCCESS:
            return { loading: false, success: true };
        case SORDER_PAY_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function sorderDeleteReducer(state = {
    order: {
        orderItems: [],
        shipping: {},
        payment: {}
    }
}, action) {
    switch (action.type) {
        case SORDER_DELETE_REQUEST:
            return { loading: true };
        case SORDER_DELETE_SUCCESS:
            return { loading: false, success: true };
        case SORDER_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

export {
    sorderCreateReducer,
    sorderDetailsReducer,
    sorderPayReducer,
    mysOrderListReducer,
    sorderListReducer,
    sorderDeleteReducer
}
