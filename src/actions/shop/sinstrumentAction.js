import axios from 'axios'
import base from '../../service/config';
import {
    SINSTRUMENT_DELETE_FAIL,
    SINSTRUMENT_DELETE_REQUEST,
    SINSTRUMENT_DELETE_SUCCESS,

    SINSTRUMENT_DETAILS_FAIL,
    SINSTRUMENT_DETAILS_REQUEST,
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

    SINSTRUMENT_UPDATE_REQUEST,
    SINSTRUMENT_UPDATE_SUCCESS,
    SINSTRUMENT_UPDATE_FAIL
} from '../../constants/shop/sinstrumentConstants';

const listinstruments = () => async (dispatch) => {
    try {
        dispatch({ type: SINSTRUMENT_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/instruments/GetAllAsync");
        dispatch({ type: SINSTRUMENT_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: SINSTRUMENT_LIST_FAIL, payload: error.message });
    }
}


const listinstrumentsByCategory = (categoryId) => async (dispatch) => {
    try {
        dispatch({ type: SINSTRUMENT_LIST_CATEGORY_REQUEST });
        const { data } = await axios.get(base + "/api/instruments/GetinstrumentsByCategory/" + categoryId);
        dispatch({ type: SINSTRUMENT_LIST_CATEGORY_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SINSTRUMENT_LIST_CATEGORY_FAIL, payload: error.message });
    }
}

const saveinstrument = (instrument) => async (dispatch) => {
    try {
        dispatch({ type: SINSTRUMENT_SAVE_REQUEST, payload: instrument });
        const { data } = await axios.post(base + '/api/instruments/postasync', instrument)
        dispatch({ type: SINSTRUMENT_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: SINSTRUMENT_SAVE_FAIL, payload: error.message });
    }
}

const updateinstrument = (instrument, instrumentId) => async (dispatch) => {

    try {
        dispatch({ type: SINSTRUMENT_UPDATE_REQUEST, payload: instrument });
        const { data } = await axios.put(base + '/api/instruments/putasync/' + instrumentId, instrument)
        dispatch({ type: SINSTRUMENT_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: SINSTRUMENT_UPDATE_FAIL, payload: error.message });
    }
}

const detailsinstrument = (instrumentId) => async (dispatch) => {

    try {
        dispatch({ type: SINSTRUMENT_DETAILS_REQUEST, payload: instrumentId });
        const { data } = await axios.get(base + "/api/instruments/getoneasync/" + instrumentId)
        dispatch({ type: SINSTRUMENT_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SINSTRUMENT_DETAILS_FAIL, payload: error.message })
    }
}

const deleteinstrument = (id) => async (dispatch, getState) => {

    try {
        dispatch({ type: SINSTRUMENT_DELETE_REQUEST, payload: id });
        const { data } = await axios.delete(base + "/api/instruments/deleteasync/" + id)
        dispatch({ type: SINSTRUMENT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: SINSTRUMENT_DELETE_FAIL, payload: error.message });

    }
}


export {
    listinstruments,
    listinstrumentsByCategory,
    detailsinstrument,
    saveinstrument,
    updateinstrument,
    deleteinstrument,
}


