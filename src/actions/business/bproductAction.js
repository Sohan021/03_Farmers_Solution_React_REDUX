import axios from 'axios'
import base from '../../service/config';
import {
    BPRODUCT_DELETE_FAIL,
    BPRODUCT_DELETE_REQUEST,
    BPRODUCT_DELETE_SUCCESS,

    BPRODUCT_DETAILS_FAIL,
    BPRODUCT_DETAILS_REQUEST,
    BPRODUCT_DETAILS_SUCCESS,

    BPRODUCT_LIST_CATEGORY_FAIL,
    BPRODUCT_LIST_CATEGORY_REQUEST,
    BPRODUCT_LIST_CATEGORY_SUCCESS,

    BPRODUCT_LIST_REQUEST,
    BPRODUCT_LIST_SUCCESS,
    BPRODUCT_LIST_FAIL,

    BPRODUCT_SAVE_REQUEST,
    BPRODUCT_SAVE_SUCCESS,
    BPRODUCT_SAVE_FAIL,

    BPRODUCT_UPDATE_REQUEST,
    BPRODUCT_UPDATE_SUCCESS,
    BPRODUCT_UPDATE_FAIL
} from '../../constants/business/bproductConstants';

const listproducts = (cid) => async (dispatch) => {
    try {
        dispatch({ type: BPRODUCT_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/products/MyProductGallery/" + cid);
        dispatch({ type: BPRODUCT_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: BPRODUCT_LIST_FAIL, payload: error.message });
    }
}


const listproductsByMarket = (mcode) => async (dispatch) => {
    try {
        dispatch({ type: BPRODUCT_LIST_CATEGORY_REQUEST });
        const { data } = await axios.get(base + "/api/products/FindProductByMarket/" + mcode);
        dispatch({ type: BPRODUCT_LIST_CATEGORY_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: BPRODUCT_LIST_CATEGORY_FAIL, payload: error.message });
    }
}

const saveproduct = (product) => async (dispatch) => {

    try {
        dispatch({ type: BPRODUCT_SAVE_REQUEST, payload: product });
        const { data } = await axios.post(base + '/api/products/postasync', product)
        dispatch({ type: BPRODUCT_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: BPRODUCT_SAVE_FAIL, payload: error.message });
    }
}

const updateproduct = (product, productId) => async (dispatch) => {

    try {
        dispatch({ type: BPRODUCT_UPDATE_REQUEST, payload: product });
        const { data } = await axios.put(base + '/api/products/putasync/' + productId, product)
        dispatch({ type: BPRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: BPRODUCT_UPDATE_FAIL, payload: error.message });
    }
}

const detailsproduct = (productId) => async (dispatch) => {

    try {
        dispatch({ type: BPRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get(base + "/api/products/getone/" + productId)
        dispatch({ type: BPRODUCT_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: BPRODUCT_DETAILS_FAIL, payload: error.message })
    }
}

const deleteproduct = (id) => async (dispatch, getState) => {

    try {
        dispatch({ type: BPRODUCT_DELETE_REQUEST, payload: id });
        const { data } = await axios.delete(base + "/api/products/deleteasync/" + id)
        dispatch({ type: BPRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: BPRODUCT_DELETE_FAIL, payload: error.message });

    }
}


export {
    listproducts,
    listproductsByMarket,
    detailsproduct,
    saveproduct,
    updateproduct,
    deleteproduct,
}


