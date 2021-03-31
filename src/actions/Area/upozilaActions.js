import axios from "axios"
import base from '../../service/config';
import {
    UPOZILA_DELETE_FAIL,
    UPOZILA_DELETE_REQUEST,
    UPOZILA_DELETE_SUCCESS,
    UPOZILA_DETAILS_FAIL,
    UPOZILA_DETAILS_REQUEST,
    UPOZILA_DETAILS_SUCCESS,
    UPOZILA_LIST_FAIL,
    UPOZILA_LIST_REQUEST,
    UPOZILA_LIST_SUCCESS,
    UPOZILA_SAVE_FAIL,
    UPOZILA_SAVE_REQUEST,
    UPOZILA_SAVE_SUCCESS,
    UPOZILA_UPDATE_REQUEST,
    UPOZILA_UPDATE_SUCCESS
} from "../../constants/Area/upozilaConstants";


const listUpozilas = () => async (dispatch) => {
    try {
        dispatch({ type: UPOZILA_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/upozilas");
        dispatch({ type: UPOZILA_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: UPOZILA_LIST_FAIL, payload: error.message });
    }
}


const saveUpozila = (upozila) => async (dispatch) => {
    try {
        dispatch({ type: UPOZILA_SAVE_REQUEST, payload: upozila });
        const { data } = await axios.post(base + "/api/upozilas", upozila)
        dispatch({ type: UPOZILA_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: UPOZILA_SAVE_FAIL, payload: error.message });
    }
}

const updateUpozila = (upozila, upozilaId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: UPOZILA_UPDATE_REQUEST, payload: upozila });
        const { data } = await axios.put(base + "/api/upozilas/" + upozilaId, upozila)
        dispatch({ type: UPOZILA_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: UPOZILA_SAVE_FAIL, payload: error.message });
    }
}


const detailsUpozila = (upozilaId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: UPOZILA_DETAILS_REQUEST, payload: upozilaId });
        const { data } = await axios.get(base + "/api/upozilas/" + upozilaId)
        dispatch({ type: UPOZILA_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: UPOZILA_DETAILS_FAIL, payload: error.message })
    }
}


const deleteUpozila = (upozilaId) => async (dispatch, getState) => {
    try {
        dispatch({ type: UPOZILA_DELETE_REQUEST, payload: upozilaId });
        const { data } = await axios.delete(base + "/api/upozilas/" + upozilaId)
        dispatch({ type: UPOZILA_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: UPOZILA_DELETE_FAIL, payload: error.message });

    }
}


export { listUpozilas, detailsUpozila, saveUpozila, updateUpozila, deleteUpozila }