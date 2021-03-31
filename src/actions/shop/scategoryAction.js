import axios from 'axios'
import base from '../../service/config';
import {
    SCATEGORY_DELETE_FAIL,
    SCATEGORY_DELETE_REQUEST,
    SCATEGORY_DELETE_SUCCESS,

    SCATEGORY_DETAILS_FAIL,
    SCATEGORY_DETAILS_REQUEST,
    SCATEGORY_DETAILS_SUCCESS,

    SCATEGORY_LIST_FAIL,
    SCATEGORY_LIST_REQUEST,
    SCATEGORY_LIST_SUCCESS,

    SCATEGORY_SAVE_FAIL,
    SCATEGORY_SAVE_REQUEST,
    SCATEGORY_SAVE_SUCCESS,

    SCATEGORY_UPDATE_REQUEST,
    SCATEGORY_UPDATE_SUCCESS
} from '../../constants/shop/scategoryConstants';

const listCategories = () => async (dispatch) => {
    try {
        dispatch({ type: SCATEGORY_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/InstrumentCateories");
        dispatch({ type: SCATEGORY_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SCATEGORY_LIST_FAIL, payload: error.message });
    }
}

const saveCategory = (category) => async (dispatch) => {
    try {
        dispatch({ type: SCATEGORY_SAVE_REQUEST, payload: category });
        const { data } = await axios.post(base + '/api/InstrumentCateories', category)
        dispatch({ type: SCATEGORY_SAVE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SCATEGORY_SAVE_FAIL, payload: error.message });
    }
}

const updateCategory = (category, categoryId) => async (dispatch) => {

    try {
        dispatch({ type: SCATEGORY_UPDATE_REQUEST, payload: category });
        const { data } = await axios.put(base + '/api/InstrumentCateories/' + categoryId, category)
        dispatch({ type: SCATEGORY_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: SCATEGORY_SAVE_FAIL, payload: error.message });
    }
}

const detailsCategory = (categoryId) => async (dispatch) => {

    try {
        dispatch({ type: SCATEGORY_DETAILS_REQUEST, payload: categoryId });
        const { data } = await axios.get(base + "/api/InstrumentCateories/" + categoryId)
        dispatch({ type: SCATEGORY_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: SCATEGORY_DETAILS_FAIL, payload: error.message })
    }
}

const deleteCategory = (categoryId) => async (dispatch, getState) => {

    try {
        dispatch({ type: SCATEGORY_DELETE_REQUEST, payload: categoryId });
        const { data } = await axios.delete(base + "/api/InstrumentCateories/" + categoryId)
        dispatch({ type: SCATEGORY_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: SCATEGORY_DELETE_FAIL, payload: error.message });

    }
}

export { listCategories, detailsCategory, saveCategory, updateCategory, deleteCategory }


