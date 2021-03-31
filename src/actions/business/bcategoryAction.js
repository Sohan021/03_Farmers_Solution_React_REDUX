import axios from 'axios'
import base from '../../service/config';
import { BCATEGORY_LIST_FAIL, BCATEGORY_LIST_REQUEST, BCATEGORY_LIST_SUCCESS, BCATEGORY_SAVE_FAIL, BCATEGORY_SAVE_REQUEST, BCATEGORY_SAVE_SUCCESS, BCATEGORY_UPDATE_REQUEST, BCATEGORY_UPDATE_SUCCESS } from '../../constants/business/bcategoryConstants';
import { SCATEGORY_DELETE_FAIL, SCATEGORY_DELETE_REQUEST, SCATEGORY_DELETE_SUCCESS, SCATEGORY_DETAILS_FAIL, SCATEGORY_DETAILS_REQUEST, SCATEGORY_DETAILS_SUCCESS } from '../../constants/shop/scategoryConstants';

const blistCategories = () => async (dispatch) => {
    try {
        dispatch({ type: BCATEGORY_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/categories");
        dispatch({ type: BCATEGORY_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: BCATEGORY_LIST_FAIL, payload: error.message });
    }
}

const bsaveCategory = (category) => async (dispatch) => {
    try {
        dispatch({ type: BCATEGORY_SAVE_REQUEST, payload: category });
        const { data } = await axios.post(base + '/api/categories', category)
        dispatch({ type: BCATEGORY_SAVE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: BCATEGORY_SAVE_FAIL, payload: error.message });
    }
}

const bupdateCategory = (category, categoryId) => async (dispatch) => {

    try {
        dispatch({ type: BCATEGORY_UPDATE_REQUEST, payload: category });
        const { data } = await axios.put(base + '/api/categories/' + categoryId, category)
        dispatch({ type: BCATEGORY_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: BCATEGORY_SAVE_FAIL, payload: error.message });
    }
}

const bdetailsCategory = (categoryId) => async (dispatch) => {

    try {
        dispatch({ type: SCATEGORY_DETAILS_REQUEST, payload: categoryId });
        const { data } = await axios.get(base + "/api/categories/" + categoryId)
        dispatch({ type: SCATEGORY_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SCATEGORY_DETAILS_FAIL, payload: error.message })
    }
}

const bdeleteCategory = (categoryId) => async (dispatch, getState) => {

    try {
        dispatch({ type: SCATEGORY_DELETE_REQUEST, payload: categoryId });
        const { data } = await axios.delete(base + "/api/categories/" + categoryId)
        dispatch({ type: SCATEGORY_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: SCATEGORY_DELETE_FAIL, payload: error.message });

    }
}

export {
    blistCategories,
    bdetailsCategory,
    bsaveCategory,
    bupdateCategory,
    bdeleteCategory
}


