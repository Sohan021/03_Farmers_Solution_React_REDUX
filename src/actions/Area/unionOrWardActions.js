import axios from 'axios'
import base from '../../service/config';

import {
    UNION_DELETE_FAIL,
    UNION_DELETE_REQUEST,
    UNION_DELETE_SUCCESS,
    UNION_DETAILS_FAIL,
    UNION_DETAILS_REQUEST,
    UNION_DETAILS_SUCCESS,
    UNION_LIST_FAIL,
    UNION_LIST_REQUEST,
    UNION_LIST_SUCCESS,
    UNION_SAVE_FAIL,
    UNION_SAVE_REQUEST,
    UNION_SAVE_SUCCESS,
    UNION_UPDATE_REQUEST,
    UNION_UPDATE_SUCCESS
} from '../../constants/Area/unionConstants';


const listUnions = () => async (dispatch) => {
    try {
        dispatch({ type: UNION_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/unionorwards");
        dispatch({ type: UNION_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: UNION_LIST_FAIL, payload: error.message });
    }
}


const saveUnion = (union) => async (dispatch) => {
    try {
        dispatch({ type: UNION_SAVE_REQUEST, payload: union });
        const { data } = await axios.post(base + '/api/unionorwards', union)
        dispatch({ type: UNION_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: UNION_SAVE_FAIL, payload: error.message });
    }
}

const updateUnion = (union, unionId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: UNION_UPDATE_REQUEST, payload: union });
        const { data } = await axios.put(base + '/api/unionorwards/' + unionId, union)
        dispatch({ type: UNION_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: UNION_SAVE_FAIL, payload: error.message });
    }
}


const detailsUnion = (unionId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: UNION_DETAILS_REQUEST, payload: unionId });
        const { data } = await axios.get(base + "/api/unionorwards/" + unionId)
        dispatch({ type: UNION_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: UNION_DETAILS_FAIL, payload: error.message })
    }
}


const deleteUnion = (unionId) => async (dispatch, getState) => {
    try {
        dispatch({ type: UNION_DELETE_REQUEST, payload: unionId });
        const { data } = await axios.delete(base + "/api/unionorwards/" + unionId)
        dispatch({ type: UNION_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: UNION_DELETE_FAIL, payload: error.message });

    }
}

export { listUnions, detailsUnion, saveUnion, updateUnion, deleteUnion }