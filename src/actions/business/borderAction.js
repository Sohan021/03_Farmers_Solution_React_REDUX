import axios from "axios";
import Cookie from "js-cookie";
import base from "../../service/config";
import {
    BORDER_CREATE_REQUEST,
    BORDER_CREATE_SUCCESS,
    BORDER_CREATE_FAIL,

    BORDER_DETAILS_REQUEST,
    BORDER_DETAILS_SUCCESS,
    BORDER_DETAILS_FAIL,

    BORDER_PAY_REQUEST,
    BORDER_PAY_SUCCESS,
    BORDER_PAY_FAIL,

    MY_BORDER_LIST_REQUEST,
    MY_BORDER_LIST_SUCCESS,
    MY_BORDER_LIST_FAIL,

    BORDER_DELETE_REQUEST,
    BORDER_DELETE_SUCCESS,
    BORDER_DELETE_FAIL,

    BORDER_LIST_REQUEST,
    BORDER_LIST_SUCCESS,
    BORDER_LIST_FAIL,
    FARMER_GET_BORDER_LIST_REQUEST,
    FARMER_GET_BORDER_LIST_SUCCESS,
    FARMER_GET_BORDER_LIST_FAIL
} from "../../constants/business/borderConstants";

const createOrder = (currentUserId, amount, products) => async (dispatch, getState) => {
    const { bcart: { bcartItems } } = getState();

    try {
        dispatch({ type: BORDER_CREATE_REQUEST, payload: { currentUserId, amount, products } });
        const { data } = await axios.post(base + "/api/Orders/checkout", { currentUserId, amount, products });
        Cookie.remove("bcartItems", JSON.stringify(bcartItems));
        dispatch({ type: BORDER_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: BORDER_CREATE_FAIL, payload: error.message });
    }
}

const listWoleSellerOrders = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: MY_BORDER_LIST_REQUEST, payload: id });
        const { data } = await axios.get(base + "/api/Orders/OrderListWholeSeller/" + id);
        dispatch({ type: MY_BORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: MY_BORDER_LIST_FAIL, payload: error.message });
    }
}

const listForFarmerOrders = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: FARMER_GET_BORDER_LIST_REQUEST, payload: id });
        const { data } = await axios.get(base + "/api/Orders/OrderListFarmer/" + id);
        dispatch({ type: FARMER_GET_BORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FARMER_GET_BORDER_LIST_FAIL, payload: error.message });
    }
}

const listOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: BORDER_LIST_REQUEST });
        // const { userSignin: { userInfo } } = getState();
        const { data } = await axios.get(base + "/api/Orders/OrderList");
        dispatch({ type: BORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: BORDER_LIST_FAIL, payload: error.message });
    }
}

const detailsOrder = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: BORDER_DETAILS_REQUEST, payload: id });
        const { data } = await axios.get(base + "/api/Orders/orderDetails/" + id);
        dispatch({ type: BORDER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: BORDER_DETAILS_FAIL, payload: error.message });
    }
}

const payOrder = (order, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({ type: BORDER_PAY_REQUEST, payload: paymentResult });
        const { userSignin: { userInfo } } = getState();
        const { data } = await axios.put(base + "/api/Orders/" + order._id + "/pay", paymentResult, {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: BORDER_PAY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: BORDER_PAY_FAIL, payload: error.message });
    }
}

const deleteOrder = (orderId) => async (dispatch, getState) => {
    try {
        dispatch({ type: BORDER_DELETE_REQUEST, payload: orderId });
        const { userSignin: { userInfo } } = getState();
        const { data } = await axios.delete(base + "/api/Orders/" + orderId, {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: BORDER_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: BORDER_DELETE_FAIL, payload: error.message });
    }
}

export {
    createOrder,
    detailsOrder,
    payOrder,
    listWoleSellerOrders,
    listForFarmerOrders,
    listOrders,
    deleteOrder
};