import axios from 'axios'
import {
    AREA_CODE_LIST_FAIL,
    AREA_CODE_LIST_REQUEST,
    AREA_CODE_LIST_SUCCESS,
    COUNTRY_LIST_FAIL,
    COUNTRY_LIST_REQUEST,
    COUNTRY_LIST_SUCCESS,

    DISTRICT_LIST_FAIL,
    DISTRICT_LIST_REQUEST,
    DISTRICT_LIST_SUCCESS,

    DIVISION_LIST_FAIL,
    DIVISION_LIST_REQUEST,
    DIVISION_LIST_SUCCESS,

    MARKET_LIST_FAIL,
    MARKET_LIST_REQUEST,
    MARKET_LIST_SUCCESS,

    UNION_LIST_FAIL,
    UNION_LIST_REQUEST,
    UNION_LIST_SUCCESS,

    UPOZILA_LIST_FAIL,
    UPOZILA_LIST_REQUEST,
    UPOZILA_LIST_SUCCESS
} from '../../constants/Area/addressConstants';
import base from '../../service/config';

const listCountries = () => async (dispatch) => {
    try {
        dispatch({ type: COUNTRY_LIST_REQUEST });
        const { data } = await axios.get("https://localhost:44381/api/countries");
        dispatch({ type: COUNTRY_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: COUNTRY_LIST_FAIL, payload: error.message });
    }
}

const listDivisions = (countryId) => async (dispatch) => {
    try {
        dispatch({ type: DIVISION_LIST_REQUEST });
        const { data } = await axios.get("https://localhost:44381/api/address/getdivisions/" + countryId);
        dispatch({ type: DIVISION_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: DIVISION_LIST_FAIL, payload: error.message });
    }
}

const listDistricts = (divisionId) => async (dispatch) => {
    try {
        dispatch({ type: DISTRICT_LIST_REQUEST });
        const { data } = await axios.get("https://localhost:44381/api/address/getdistricts/" + divisionId);
        dispatch({ type: DISTRICT_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: DISTRICT_LIST_FAIL, payload: error.message });
    }
}

const listUpozilas = (districtId) => async (dispatch) => {
    try {
        dispatch({ type: UPOZILA_LIST_REQUEST });
        const { data } = await axios.get("https://localhost:44381/api/address/getdistricts/" + districtId);
        dispatch({ type: UPOZILA_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: UPOZILA_LIST_FAIL, payload: error.message });
    }
}

const listUnions = (upozilaIDd) => async (dispatch) => {
    try {
        dispatch({ type: UNION_LIST_REQUEST });
        const { data } = await axios.get("https://localhost:44381/api/address/getunions/" + upozilaIDd);
        dispatch({ type: UNION_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: UNION_LIST_FAIL, payload: error.message });
    }
}

const listMarkets = (unionId) => async (dispatch) => {
    try {
        dispatch({ type: MARKET_LIST_REQUEST });
        const { data } = await axios.get("https://localhost:44381/api/address/getmarkets/" + unionId);
        dispatch({ type: MARKET_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: MARKET_LIST_FAIL, payload: error.message });
    }
}



const listAreaCode = () => async (dispatch) => {
    try {
        dispatch({ type: AREA_CODE_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/address/GetAreaCode");
        dispatch({ type: AREA_CODE_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: AREA_CODE_LIST_FAIL, payload: error.message });
    }
}


export {
    listCountries,
    listDivisions,
    listDistricts,
    listUpozilas,
    listUnions,
    listMarkets,
    listAreaCode
}