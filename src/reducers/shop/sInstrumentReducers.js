import {
    SINSTRUMENT_DELETE_FAIL,
    SINSTRUMENT_DELETE_REQUEST,
    SINSTRUMENT_DELETE_SUCCESS,

    SINSTRUMENT_DETAILS_FAIL,
    SINSTRUMENT_DETAILS_SUCCESS,


    SINSTRUMENT_LIST_CATEGORY_FAIL,
    SINSTRUMENT_LIST_CATEGORY_REQUEST,
    SINSTRUMENT_LIST_CATEGORY_SUCCESS,

    SINSTRUMENT_LIST_REQUEST,
    SINSTRUMENT_LIST_SUCCESS,
    SINSTRUMENT_LIST_FAIL,

    SINSTRUMENT_SAVE_REQUEST,
    SINSTRUMENT_SAVE_SUCCESS,
    SINSTRUMENT_SAVE_FAIL,

    SINSTRUMENT_UPDATE_SUCCESS,
    SINSTRUMENT_UPDATE_FAIL
} from "../../constants/shop/sinstrumentConstants";

let initialState = {
    instrument: false

}

function sinstrumentListReducer(state = { instruments: [] }, action) {

    switch (action.type) {
        case SINSTRUMENT_LIST_REQUEST:
            return { loading: true };
        case SINSTRUMENT_LIST_SUCCESS:
            return { loading: false, instruments: action.payload };
        case SINSTRUMENT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}




function sinstrumentListByCategoryReducer(state = { instruments: [] }, action) {

    switch (action.type) {
        case SINSTRUMENT_LIST_CATEGORY_REQUEST:
            return { loading: true };
        case SINSTRUMENT_LIST_CATEGORY_SUCCESS:
            return { loading: false, instruments: action.payload };
        case SINSTRUMENT_LIST_CATEGORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}




function sinstrumentDetailsReducer(state = { instrument: false }, action) {

    switch (action.type) {
        case SINSTRUMENT_DETAILS_SUCCESS:
            return { loading: false, instrument: action.payload };
        case SINSTRUMENT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function sinstrumentDeleteReducer(state = { instrument: {} }, action) {

    switch (action.type) {
        case SINSTRUMENT_DELETE_REQUEST:
            return { loading: true };
        case SINSTRUMENT_DELETE_SUCCESS:
            return { loading: false, instrument: action.payload, success: true };
        case SINSTRUMENT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}



function sinstrumentSaveReducer(state = initialState, action) {

    switch (action.type) {
        case SINSTRUMENT_SAVE_REQUEST:
            return { loading: true };
        case SINSTRUMENT_SAVE_SUCCESS:
            return { loading: false, success: true, instrument: action.payload };
        case SINSTRUMENT_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function sinstrumentUpdateReducer(state = initialState, action) {

    switch (action.type) {

        case SINSTRUMENT_UPDATE_SUCCESS:
            return { loading: false, success: true, instrument: action.payload };
        case SINSTRUMENT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export {
    sinstrumentListReducer,
    sinstrumentListByCategoryReducer,
    sinstrumentDetailsReducer,
    sinstrumentDeleteReducer,
    sinstrumentUpdateReducer,
    sinstrumentSaveReducer
}