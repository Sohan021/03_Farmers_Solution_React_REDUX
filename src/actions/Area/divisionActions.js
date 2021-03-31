import axios from 'axios'
import base from '../../service/config';
import {
    DIVISION_DELETE_FAIL,
    DIVISION_DELETE_REQUEST,
    DIVISION_DELETE_SUCCESS,
    DIVISION_DETAILS_FAIL,
    DIVISION_DETAILS_REQUEST,
    DIVISION_DETAILS_SUCCESS,
    DIVISION_LIST_FAIL,
    DIVISION_LIST_REQUEST,
    DIVISION_LIST_SUCCESS,
    DIVISION_SAVE_FAIL,
    DIVISION_SAVE_REQUEST,
    DIVISION_SAVE_SUCCESS,
    DIVISION_UPDATE_REQUEST,
    DIVISION_UPDATE_SUCCESS
} from '../../constants/Area/divisionConstants';


const listDivisions = () => async (dispatch) => {
    try {
        dispatch({ type: DIVISION_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/division");
        dispatch({ type: DIVISION_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: DIVISION_LIST_FAIL, payload: error.message });
    }
}


const saveDivision = (division) => async (dispatch) => {
    try {
        dispatch({ type: DIVISION_SAVE_REQUEST, payload: division });
        const { data } = await axios.post(base + '/api/division', division)
        dispatch({ type: DIVISION_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: DIVISION_SAVE_FAIL, payload: error.message });
    }
}

const updateDivision = (division, divisionId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: DIVISION_UPDATE_REQUEST, payload: division });
        const { data } = await axios.put(base + '/api/division/' + divisionId, division)
        dispatch({ type: DIVISION_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: DIVISION_SAVE_FAIL, payload: error.message });
    }
}


const detailsDivision = (divisionId) => async (dispatch) => {
    // debugger
    try {
        dispatch({ type: DIVISION_DETAILS_REQUEST, payload: divisionId });
        const { data } = await axios.get(base + "/api/division/" + divisionId)
        dispatch({ type: DIVISION_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: DIVISION_DETAILS_FAIL, payload: error.message })
    }
}


const deleteDivision = (divisionId) => async (dispatch, getState) => {
    try {
        dispatch({ type: DIVISION_DELETE_REQUEST, payload: divisionId });
        const { data } = await axios.delete(base + "/api/division/" + divisionId)
        dispatch({ type: DIVISION_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: DIVISION_DELETE_FAIL, payload: error.message });

    }
}

export { listDivisions, detailsDivision, saveDivision, updateDivision, deleteDivision }