import Axios from "axios";
import Cookie from 'js-cookie';
import base from "../../service/config";
import {
    USER_PASSWORD_UPDATE_FAIL,
    USER_PASSWORD_UPDATE_REQUEST,
    USER_PASSWORD_UPDATE_SUCCESS,

    SIGNIN_FAIL,
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,

    FARMER_LIST_FAIL,
    FARMER_LIST_REQUEST,
    FARMER_LIST_SUCCESS,

    HOLESELLER_LIST_FAIL,
    HOLESELLER_LIST_REQUEST,
    HOLESELLER_LIST_SUCCESS,

    USER_PROFILE_UPDATE_FAIL,
    USER_PROFILE_UPDATE_REQUEST,
    USER_PROFILE_UPDATE_SUCCESS,

    USER_PROFILE_DETAILS_REQUEST,
    USER_PROFILE_DETAILS_SUCCESS,
    USER_PROFILE_DETAILS_FAIL,

    LOGOUT,

    HOLESELLER_REGISTER_FAIL,
    FARMER_REGISTER_REQUEST,
    FARMER_REGISTER_FAIL,
    HOLESELLER_REGISTER_REQUEST,
    HOLESELLER_REGISTER_SUCCESS,
    FARMER_REGISTER_SUCCESS,

    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_FAIL,
    ADMIN_REGISTER_SUCCESS
} from "../../constants/Account/AccountConstsnts";

const userUpdate = (currentuser, firstname, lastname, profilephoto, email, mobilenumber) => async (dispatch, getState) => {
    const { userSignin: { userInfo } } = getState();
    dispatch({
        type: USER_PROFILE_UPDATE_REQUEST, payload: { currentuser, firstname, lastname, profilephoto, email, mobilenumber }
    });
    try {
        const { data } = await Axios.put(base + "/api/Authentication/profileUpdate",
            { currentuser, firstname, lastname, profilephoto, email, mobilenumber }, {
            headers: {
                Authorization: 'Bearer ' + userInfo.item2
            }
        });
        dispatch({ type: USER_PROFILE_UPDATE_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_PROFILE_UPDATE_FAIL, payload: error.message });
    }
}

const userPasswordUpdate = (currentuserId, currentPassword, newPassword, confirmPassword) => async (dispatch, getState) => {
    dispatch({
        type: USER_PASSWORD_UPDATE_REQUEST, payload: { currentuserId, currentPassword, newPassword, confirmPassword }
    });
    try {
        const { data } = await Axios.put(base + "/api/Authentication/changepassword",
            { currentuserId, currentPassword, newPassword, confirmPassword });
        dispatch({ type: USER_PASSWORD_UPDATE_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_PASSWORD_UPDATE_FAIL, payload: error.message });
    }
}
const userProfileDetail = (currentuserId) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_PROFILE_DETAILS_REQUEST, payload: currentuserId });
        const { data } = await Axios.get(base + "/api/Authentication/profile/" + currentuserId);
        dispatch({ type: USER_PROFILE_DETAILS_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_PROFILE_DETAILS_FAIL, payload: error.message });
    }
}
const farmerList = () => async (dispatch) => {
    try {
        dispatch({ type: FARMER_LIST_REQUEST });
        const { data } = await Axios.get(base + "/api/Authentication/GetAllFarmers");
        dispatch({ type: FARMER_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: FARMER_LIST_FAIL, payload: error.message });
    }
}

const holeSellerList = () => async (dispatch) => {
    try {
        dispatch({ type: HOLESELLER_LIST_REQUEST });
        const { data } = await Axios.get(base + "/api/Authentication/GetAllHoleseller");
        dispatch({ type: HOLESELLER_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: HOLESELLER_LIST_FAIL, payload: error.message });
    }
}

const farmerRegister = (
    firstname,
    lastname,
    profilePhoto,
    mobilenumber,
    divisionId,
    districtId,
    upozilaId,
    unionOrWardId,
    marketId,
    password,
    confirmPassword) => async (dispatch, getState) => {

        dispatch({
            type: FARMER_REGISTER_REQUEST, payload: {

                firstname,
                lastname,
                profilePhoto,
                mobilenumber,
                divisionId,
                districtId,
                upozilaId,
                unionOrWardId,
                marketId,
                password,
                confirmPassword
            }
        });
        try {
            const { data } = await Axios.post(base + "/api/Authentication/FarmerSignUp", {

                firstname,
                lastname,
                profilePhoto,
                mobilenumber,
                divisionId,
                districtId,
                upozilaId,
                unionOrWardId,
                marketId,
                password,
                confirmPassword
            });
            dispatch({ type: FARMER_REGISTER_SUCCESS, payload: data });
            Cookie.set('adminInfo', JSON.stringify(data));
        } catch (error) {
            dispatch({ type: FARMER_REGISTER_FAIL, payload: error.message });
        }
    }

const holesellerRegister = (
    firstname,
    lastname,
    profilePhoto,
    mobilenumber,
    divisionId,
    districtId,
    upozilaId,
    unionOrWardId,
    marketId,
    password,
    confirmPassword) => async (dispatch, getState) => {
        dispatch({
            type: HOLESELLER_REGISTER_REQUEST, payload: {
                firstname,
                lastname,
                profilePhoto,
                mobilenumber,
                divisionId,
                districtId,
                upozilaId,
                unionOrWardId,
                marketId,
                password,
                confirmPassword
            }
        });
        try {
            const { data } = await Axios.post(base + "/api/Authentication/HoleSellerSignUp", {
                firstname,
                lastname,
                profilePhoto,
                mobilenumber,
                divisionId,
                districtId,
                upozilaId,
                unionOrWardId,
                marketId,
                password,
                confirmPassword
            });
            dispatch({ type: HOLESELLER_REGISTER_SUCCESS, payload: data });
            Cookie.set('adminInfo', JSON.stringify(data));
        } catch (error) {
            dispatch({ type: HOLESELLER_REGISTER_FAIL, payload: error.message });
        }
    }

const adminRegister = (firstname, mobilenumber, email, password, confirmPassword) => async (dispatch, getState) => {
    dispatch({
        type: ADMIN_REGISTER_REQUEST, payload: { firstname, mobilenumber, email, password, confirmPassword }
    });
    try {
        const { data } = await Axios.post(base + "/api/Authentication/AdminSignUp", { firstname, mobilenumber, email, password, confirmPassword });
        dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_REGISTER_FAIL, payload: error.message });
    }
}

const signIn = (mobilenumber, password) => async (dispatch, getState) => {
    // const { userSignIn: { userInfo } } = getState();
    dispatch({ type: SIGNIN_REQUEST, payload: { mobilenumber, password } });
    try {
        const { data } = await Axios.post(base + "/api/Authentication/signin", { mobilenumber, password });
        Cookie.set('userInfo', JSON.stringify(data));
        dispatch({ type: SIGNIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SIGNIN_FAIL, payload: error.message });
    }
}
const userSignOut = () => (dispatch, getState) => {
    const { bcart: { bcartItems } } = getState();
    const { scart: { scartItems } } = getState();

    Cookie.remove("userInfo");
    Cookie.remove("bcartItems", JSON.stringify(bcartItems));
    Cookie.remove("scartItems", JSON.stringify(scartItems));
    dispatch({ type: LOGOUT })
}

export {
    userUpdate,
    adminRegister,
    farmerRegister,
    holesellerRegister,
    userPasswordUpdate,
    userProfileDetail,
    userSignOut,
    signIn,
    farmerList,
    holeSellerList
};