import {
    APPLICATIONROLE_DELETE_FAIL,
    APPLICATIONROLE_DELETE_REQUEST,
    APPLICATIONROLE_DELETE_SUCCESS,

    APPLICATIONROLE_DETAILS_FAIL,
    APPLICATIONROLE_DETAILS_SUCCESS,

    APPLICATIONROLE_LIST_FAIL,
    APPLICATIONROLE_LIST_REQUEST,
    APPLICATIONROLE_LIST_SUCCESS,

    APPLICATIONROLE_SAVE_FAIL,
    APPLICATIONROLE_SAVE_REQUEST,
    APPLICATIONROLE_SAVE_SUCCESS,

    APPLICATIONROLE_UPDATE_FAIL,
    APPLICATIONROLE_UPDATE_SUCCESS
} from "../../constants/Account/Roleonstants";

let initialState = {
    role: false

}

function roleListReducer(state = { roles: [] }, action) {

    switch (action.type) {
        case APPLICATIONROLE_LIST_REQUEST:
            return { loading: true };
        case APPLICATIONROLE_LIST_SUCCESS:
            return { loading: false, roles: action.payload };
        case APPLICATIONROLE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function roleDetailsReducer(state = { role: false }, action) {

    switch (action.type) {
        case APPLICATIONROLE_DETAILS_SUCCESS:
            return { loading: false, role: action.payload };
        case APPLICATIONROLE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function roleDeleteReducer(state = { role: {} }, action) {

    switch (action.type) {
        case APPLICATIONROLE_DELETE_REQUEST:
            return { loading: true };
        case APPLICATIONROLE_DELETE_SUCCESS:
            return { loading: false, role: action.payload, success: true };
        case APPLICATIONROLE_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function roleSaveReducer(state = initialState, action) {

    switch (action.type) {
        case APPLICATIONROLE_SAVE_REQUEST:
            return { loading: true };
        case APPLICATIONROLE_SAVE_SUCCESS:
            return { loading: false, success: true, role: action.payload };
        case APPLICATIONROLE_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function roleUpdateReducer(state = initialState, action) {

    switch (action.type) {

        case APPLICATIONROLE_UPDATE_SUCCESS:
            return { loading: false, success: true, role: action.payload };
        case APPLICATIONROLE_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { roleListReducer, roleDetailsReducer, roleDeleteReducer, roleUpdateReducer, roleSaveReducer }