import Axios from "axios";
import Cookie from "js-cookie";
import base from "../../service/config";
import {
    SCART_ADD_ITEM,
    SCART_REMOVE_ITEM,
    SCART_SAVE_SHIPPING,
    SCART_SAVE_PAYMENT
} from "../../constants/shop/scartContsnts";

const saddToCart = (productId, qty) => async (dispatch, getState) => {
    try {

        const { data } = await Axios.get(base + "/api/instruments/GetOneAsync/" + productId);
        dispatch({
            type: SCART_ADD_ITEM, payload: {
                id: data.id,
                name: data.name,
                imageUrl1: data.imageUrl1,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });
        const { scart: { scartItems } } = getState();
        Cookie.set("scartItems", JSON.stringify(scartItems));
    } catch (error) {

    }
}
const sremoveFromCart = (productId) => (dispatch, getState) => {
debugger
    dispatch({ type: SCART_REMOVE_ITEM, payload: productId });
    const { scart: { scartItems } } = getState();
    Cookie.set("scartItems", JSON.stringify(scartItems));

}
const ssaveShipping = (data) => (dispatch) => {
    dispatch({ type: SCART_SAVE_SHIPPING, payload: data });
}

const ssavePayment = (data) => (dispatch) => {
    dispatch({ type: SCART_SAVE_PAYMENT, payload: data });
}
export { saddToCart, sremoveFromCart, ssaveShipping, ssavePayment }