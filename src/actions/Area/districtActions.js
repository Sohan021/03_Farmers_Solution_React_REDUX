import axios from 'axios'
import {
    DISTRICT_DELETE_FAIL,
    DISTRICT_DELETE_REQUEST,
    DISTRICT_DELETE_SUCCESS,
    DISTRICT_DETAILS_FAIL,
    DISTRICT_DETAILS_REQUEST,
    DISTRICT_DETAILS_SUCCESS,
    DISTRICT_LIST_FAIL,
    DISTRICT_LIST_REQUEST,
    DISTRICT_LIST_SUCCESS,
    DISTRICT_SAVE_FAIL,
    DISTRICT_SAVE_REQUEST,
    DISTRICT_SAVE_SUCCESS,
    DISTRICT_UPDATE_REQUEST,
    DISTRICT_UPDATE_SUCCESS
} from '../../constants/Area/districtConstants';

import base from '../../service/config';

const listDistricts = () => async (dispatch) => {
    try {
        dispatch({ type: DISTRICT_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/districts");
        dispatch({ type: DISTRICT_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: DISTRICT_LIST_FAIL, payload: error.message });
    }
}


const saveDistrict = (district) => async (dispatch) => {
    try {
        dispatch({ type: DISTRICT_SAVE_REQUEST, payload: district });
        const { data } = await axios.post(base + '/api/districts', district)
        dispatch({ type: DISTRICT_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: DISTRICT_SAVE_FAIL, payload: error.message });
    }
}

const updateDistrict = (district, districtId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: DISTRICT_UPDATE_REQUEST, payload: district });
        const { data } = await axios.put(base + '/api/districts/' + districtId, district)
        dispatch({ type: DISTRICT_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: DISTRICT_SAVE_FAIL, payload: error.message });
    }
}


const detailsDistrict = (districtId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: DISTRICT_DETAILS_REQUEST, payload: districtId });
        const { data } = await axios.get(base + "/api/districts/" + districtId)
        dispatch({ type: DISTRICT_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: DISTRICT_DETAILS_FAIL, payload: error.message })
    }
}


const deleteDistrict = (districtId) => async (dispatch, getState) => {
    try {
        dispatch({ type: DISTRICT_DELETE_REQUEST, payload: districtId });
        const { data } = await axios.delete(base + "/api/districts/" + districtId)
        dispatch({ type: DISTRICT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: DISTRICT_DELETE_FAIL, payload: error.message });

    }
}

export { listDistricts, detailsDistrict, saveDistrict, updateDistrict, deleteDistrict }
