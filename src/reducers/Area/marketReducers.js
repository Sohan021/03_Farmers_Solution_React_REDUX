import {
    MARKET_DELETE_FAIL,
    MARKET_DELETE_REQUEST,
    MARKET_DELETE_SUCCESS,
    MARKET_DETAILS_FAIL,
    MARKET_DETAILS_SUCCESS,
    MARKET_LIST_FAIL,
    MARKET_LIST_REQUEST,
    MARKET_LIST_SUCCESS,
    MARKET_SAVE_FAIL,
    MARKET_SAVE_REQUEST,
    MARKET_SAVE_SUCCESS,
    MARKET_UPDATE_FAIL,
    MARKET_UPDATE_SUCCESS
} from '../../constants/Area/marketConstants';

let initialState = {
    market: false
}

function marketListReducer(state = { markets: [] }, action) {

    switch (action.type) {
        case MARKET_LIST_REQUEST:
            return { loading: true };
        case MARKET_LIST_SUCCESS:
            return { loading: false, markets: action.payload };
        case MARKET_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function marketDetailsReducer(state = { market: {} }, action) {

    switch (action.type) {
        case MARKET_DETAILS_SUCCESS:
            return { loading: false, market: action.payload };
        case MARKET_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function marketDeleteReducer(state = { market: {} }, action) {

    switch (action.type) {
        case MARKET_DELETE_REQUEST:
            return { loading: true };
        case MARKET_DELETE_SUCCESS:
            return { loading: false, market: action.payload, success: true };
        case MARKET_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function marketSaveReducer(state = initialState, action) {

    switch (action.type) {
        case MARKET_SAVE_REQUEST:
            return { loading: true };
        case MARKET_SAVE_SUCCESS:
            return { loading: false, success: true, market: action.payload };
        case MARKET_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function marketUpdateReducer(state = initialState, action) {

    switch (action.type) {
        case MARKET_UPDATE_SUCCESS:
            return { loading: false, success: true, market: action.payload };
        case MARKET_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { marketListReducer, marketDetailsReducer, marketDeleteReducer, marketUpdateReducer, marketSaveReducer }