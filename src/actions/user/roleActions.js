import axios from 'axios'
import base from '../../service/config';
import {
    APPLICATIONROLE_DELETE_FAIL,
    APPLICATIONROLE_DELETE_REQUEST,
    APPLICATIONROLE_DELETE_SUCCESS,
    APPLICATIONROLE_DETAILS_FAIL,
    APPLICATIONROLE_DETAILS_REQUEST,
    APPLICATIONROLE_DETAILS_SUCCESS,
    APPLICATIONROLE_LIST_FAIL,
    APPLICATIONROLE_LIST_REQUEST,
    APPLICATIONROLE_LIST_SUCCESS,
    APPLICATIONROLE_SAVE_FAIL,
    APPLICATIONROLE_SAVE_REQUEST,
    APPLICATIONROLE_SAVE_SUCCESS,
    APPLICATIONROLE_UPDATE_REQUEST,
    APPLICATIONROLE_UPDATE_SUCCESS
} from '../../constants/Account/Roleonstants';

const listRoles = () => async (dispatch) => {
    try {
        dispatch({ type: APPLICATIONROLE_LIST_REQUEST });
        const { data } = await axios.get(base + "/api/role/GetAllAsync");
        dispatch({ type: APPLICATIONROLE_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: APPLICATIONROLE_LIST_FAIL, payload: error.message });
    }
}


const saveRole = (role) => async (dispatch) => {
    try {
        dispatch({ type: APPLICATIONROLE_SAVE_REQUEST, payload: role });
        const { data } = await axios.post(base + '/api/role/PostAsync', role)
        dispatch({ type: APPLICATIONROLE_SAVE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: APPLICATIONROLE_SAVE_FAIL, payload: error.message });
    }
}

const updateRole = (role, roleId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: APPLICATIONROLE_UPDATE_REQUEST, payload: role });
        const { data } = await axios.put(base + '/api/role/PutAsync/' + roleId, role)
        dispatch({ type: APPLICATIONROLE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: APPLICATIONROLE_SAVE_FAIL, payload: error.message });
    }
}

const detailsRole = (roleId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: APPLICATIONROLE_DETAILS_REQUEST, payload: roleId });
        const { data } = await axios.get(base + "/api/role/GetOneAsync/" + roleId)
        dispatch({ type: APPLICATIONROLE_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: APPLICATIONROLE_DETAILS_FAIL, payload: error.message })
    }
}

const deleteRole = (roleId) => async (dispatch, getState) => {
    try {

        dispatch({ type: APPLICATIONROLE_DELETE_REQUEST, payload: roleId });
        const { data } = await axios.delete(base + "/api/role/DeleteAsync/" + roleId)
        dispatch({ type: APPLICATIONROLE_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: APPLICATIONROLE_DELETE_FAIL, payload: error.message });
    }
}

export { listRoles, detailsRole, saveRole, updateRole, deleteRole }


