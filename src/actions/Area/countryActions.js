import axios from 'axios'
import base from '../../service/config';
import {
    COUNTRY_DELETE_FAIL,
    COUNTRY_DELETE_REQUEST,
    COUNTRY_DELETE_SUCCESS,
    COUNTRY_DETAILS_FAIL,
    COUNTRY_DETAILS_REQUEST,
    COUNTRY_DETAILS_SUCCESS,
    COUNTRY_LIST_FAIL,
    COUNTRY_LIST_REQUEST,
    COUNTRY_LIST_SUCCESS,
    COUNTRY_SAVE_FAIL,
    COUNTRY_SAVE_REQUEST,
    COUNTRY_SAVE_SUCCESS,
    COUNTRY_UPDATE_REQUEST,
    COUNTRY_UPDATE_SUCCESS
} from '../../constants/Area/countryConstants';

const listCountries = () => async (dispatch) => {
    try {
        dispatch({ type: COUNTRY_LIST_REQUEST });
        const { data } = await axios.get(`${base}/api/countries`);
        dispatch({ type: COUNTRY_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: COUNTRY_LIST_FAIL, payload: error.message });
    }
}


const saveCountry = (country) => async (dispatch) => {
    try {
        dispatch({ type: COUNTRY_SAVE_REQUEST, payload: country });
        const { data } = await axios.post(`${base}/api/countries`, country)
        dispatch({ type: COUNTRY_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: COUNTRY_SAVE_FAIL, payload: error.message });
    }
}

const updateCountry = (country, countryId) => async (dispatch) => {

    try {
        dispatch({ type: COUNTRY_UPDATE_REQUEST, payload: country });
        const { data } = await axios.put(`${base}/api/countries/${countryId}`, country)
        dispatch({ type: COUNTRY_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: COUNTRY_SAVE_FAIL, payload: error.message });
    }
}


const detailsCountry = (countryId) => async (dispatch) => {

    try {
        dispatch({ type: COUNTRY_DETAILS_REQUEST, payload: countryId });
        const { data } = await axios.get(`${base}/api/countries/` + countryId)
        dispatch({ type: COUNTRY_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: COUNTRY_DETAILS_FAIL, payload: error.message })
    }
}


const deleteCountry = (countryId) => async (dispatch, getState) => {
    debugger
    try {
        dispatch({ type: COUNTRY_DELETE_REQUEST, payload: countryId });
        const { data } = await axios.delete(`${base}/api/countries/${countryId}`)
        dispatch({ type: COUNTRY_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: COUNTRY_DELETE_FAIL, payload: error.message });

    }
}

export { listCountries, detailsCountry, saveCountry, updateCountry, deleteCountry }


