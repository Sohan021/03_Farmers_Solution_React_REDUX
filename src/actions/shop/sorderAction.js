import axios from "axios";
import Cookie from "js-cookie";
import base from "../../service/config";
import {
    SORDER_CREATE_REQUEST,
    SORDER_CREATE_SUCCESS,
    SORDER_CREATE_FAIL,

    SORDER_DETAILS_REQUEST,
    SORDER_DETAILS_SUCCESS,
    SORDER_DETAILS_FAIL,

    SORDER_PAY_REQUEST,
    SORDER_PAY_SUCCESS,
    SORDER_PAY_FAIL,

    MY_SORDER_LIST_REQUEST,
    MY_SORDER_LIST_SUCCESS,
    MY_SORDER_LIST_FAIL,

    SORDER_DELETE_REQUEST,
    SORDER_DELETE_SUCCESS,
    SORDER_DELETE_FAIL,

    SORDER_LIST_REQUEST,
    SORDER_LIST_SUCCESS,
    SORDER_LIST_FAIL
} from "../../constants/shop/sorderConstants";

const createOrder = (currentUserId, amount, products) => async (dispatch, getState) => {
    const { scart: { scartItems } } = getState();
    debugger
    try {
        dispatch({ type: SORDER_CREATE_REQUEST, payload: { currentUserId, amount, products } });
        const { data } = await axios.post(base + "/api/shoporder/checkout", { currentUserId, amount, products });
        Cookie.remove("scartItems", JSON.stringify(scartItems));
        dispatch({ type: SORDER_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SORDER_CREATE_FAIL, payload: error.message });
    }
}

const listMyOrders = (id) => async (dispatch, getState) => {

    try {
        dispatch({ type: MY_SORDER_LIST_REQUEST, payload: id });

        const { data } = await axios.get(base + "/api/shoporder/OrderListCustomer/" + id);
        dispatch({ type: MY_SORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: MY_SORDER_LIST_FAIL, payload: error.message });
    }
}

const listOrders = () => async (dispatch, getState) => {

    try {
        dispatch({ type: SORDER_LIST_REQUEST });
        // const { userSignin: { userInfo } } = getState();
        const { data } = await axios.get(base + "/api/shoporder/OrderList");
        dispatch({ type: SORDER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SORDER_LIST_FAIL, payload: error.message });
    }
}

const detailsOrder = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: SORDER_DETAILS_REQUEST, payload: id });
        const { data } = await axios.get(base + "/api/shoporder/orderDetails/" + id);
        dispatch({ type: SORDER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SORDER_DETAILS_FAIL, payload: error.message });
    }
}

const payOrder = (order, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({ type: SORDER_PAY_REQUEST, payload: paymentResult });
        const { userSignin: { userInfo } } = getState();
        const { data } = await axios.put(base + "/api/shoporder/" + order._id + "/pay", paymentResult, {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: SORDER_PAY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SORDER_PAY_FAIL, payload: error.message });
    }
}

const deleteOrder = (orderId) => async (dispatch, getState) => {
    try {
        dispatch({ type: SORDER_DELETE_REQUEST, payload: orderId });
        const { userSignin: { userInfo } } = getState();
        const { data } = await axios.delete(base + "/api/shoporder/" + orderId, {
            headers:
                { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: SORDER_DELETE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SORDER_DELETE_FAIL, payload: error.message });
    }
}

export {
    createOrder,
    detailsOrder,
    payOrder,
    listMyOrders,
    listOrders,
    deleteOrder
};