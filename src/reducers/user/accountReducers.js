import {

    USER_PASSWORD_UPDATE_FAIL,
    USER_PASSWORD_UPDATE_SUCCESS,


    SIGNIN_FAIL,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,

    USER_PROFILE_UPDATE_FAIL,
    USER_PROFILE_UPDATE_SUCCESS,

    USER_PROFILE_DETAILS_SUCCESS,
    USER_PROFILE_DETAILS_FAIL,

    LOGOUT,
    FARMER_LIST_REQUEST,
    FARMER_LIST_SUCCESS,
    FARMER_LIST_FAIL,
    HOLESELLER_LIST_REQUEST,
    HOLESELLER_LIST_SUCCESS,
    HOLESELLER_LIST_FAIL,
    FARMER_REGISTER_REQUEST,
    FARMER_REGISTER_SUCCESS,
    FARMER_REGISTER_FAIL,
    HOLESELLER_REGISTER_REQUEST,
    HOLESELLER_REGISTER_SUCCESS,
    HOLESELLER_REGISTER_FAIL,
    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_REGISTER_FAIL,
} from "../../constants/Account/AccountConstsnts";

function userSigninReducer(state = {}, action) {

    switch (action.type) {
        case SIGNIN_REQUEST:
            return { loading: true };
        case SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case LOGOUT:
            return {};
        default: return state;
    }
}

function farmerListReducer(state = { farmers: [] }, action) {
    switch (action.type) {
        case FARMER_LIST_REQUEST:
            return { loading: true };
        case FARMER_LIST_SUCCESS:
            return { loading: false, farmers: action.payload };
        case FARMER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function holesellerListReducer(state = { holesellers: [] }, action) {
    switch (action.type) {
        case HOLESELLER_LIST_REQUEST:
            return { loading: true };
        case HOLESELLER_LIST_SUCCESS:
            return { loading: false, holesellers: action.payload };
        case HOLESELLER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function userUpdateReducer(state = {}, action) {
    switch (action.type) {
        case USER_PROFILE_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function userProfileDetailsReducer(state = {}, action) {
    switch (action.type) {
        case USER_PROFILE_DETAILS_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function userUpdatePasswordReducer(state = {}, action) {
    switch (action.type) {
        case USER_PASSWORD_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_PASSWORD_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function farmerRegistrationReducer(state = {}, action) {
    switch (action.type) {
        case FARMER_REGISTER_REQUEST:
            return { loading: true };
        case FARMER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case FARMER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function holesellerRegistrationReducer(state = {}, action) {
    switch (action.type) {
        case HOLESELLER_REGISTER_REQUEST:
            return { loading: true };
        case HOLESELLER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case HOLESELLER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
function adminRegistrationReducer(state = {}, action) {
    switch (action.type) {
        case ADMIN_REGISTER_REQUEST:
            return { loading: true };
        case ADMIN_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case ADMIN_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

export {
    farmerRegistrationReducer,
    holesellerListReducer,
    holesellerRegistrationReducer,
    adminRegistrationReducer,
    userUpdateReducer,
    userUpdatePasswordReducer,
    userProfileDetailsReducer,
    userSigninReducer,
    farmerListReducer
}
