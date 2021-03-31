import axios from 'axios'
import base from '../../service/config';

import {
    MARKET_DELETE_FAIL,
    MARKET_DELETE_REQUEST,
    MARKET_DELETE_SUCCESS,
    MARKET_DETAILS_FAIL,
    MARKET_DETAILS_REQUEST,
    MARKET_DETAILS_SUCCESS,
    MARKET_LIST_FAIL,
    MARKET_LIST_REQUEST,
    MARKET_LIST_SUCCESS,
    MARKET_SAVE_FAIL,
    MARKET_SAVE_REQUEST,
    MARKET_SAVE_SUCCESS,
    MARKET_UPDATE_REQUEST,
    MARKET_UPDATE_SUCCESS
} from '../../constants/Area/marketConstants';


const listMarkets = () => async (dispatch) => {
    try {
        dispatch({ type: MARKET_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/markets");
        dispatch({ type: MARKET_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: MARKET_LIST_FAIL, payload: error.message });
    }
}


const saveMarket = (market) => async (dispatch) => {
    try {
        dispatch({ type: MARKET_SAVE_REQUEST, payload: market });
        const { data } = await axios.post(base + '/api/markets', market)
        dispatch({ type: MARKET_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: MARKET_SAVE_FAIL, payload: error.message });
    }
}

const updateMarket = (market, marketId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: MARKET_UPDATE_REQUEST, payload: market });
        const { data } = await axios.put(base + '/api/markets/' + marketId, market)
        dispatch({ type: MARKET_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: MARKET_SAVE_FAIL, payload: error.message });
    }
}


const detailsMarket = (marketId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: MARKET_DETAILS_REQUEST, payload: marketId });
        const { data } = await axios.get(base + "/api/markets/" + marketId)
        dispatch({ type: MARKET_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: MARKET_DETAILS_FAIL, payload: error.message })
    }
}


const deleteMarket = (marketId) => async (dispatch, getState) => {
    try {
        dispatch({ type: MARKET_DELETE_REQUEST, payload: marketId });
        const { data } = await axios.delete(base + "/api/markets/" + marketId)
        dispatch({ type: MARKET_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: MARKET_DELETE_FAIL, payload: error.message });

    }
}

export { listMarkets, detailsMarket, saveMarket, updateMarket, deleteMarket }