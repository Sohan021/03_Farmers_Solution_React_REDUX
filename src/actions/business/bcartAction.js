import Axios from "axios";
import Cookie from "js-cookie";
import base from "../../service/config";
import {
    BCART_ADD_ITEM,
    BCART_REMOVE_ITEM,
    BCART_SAVE_PAYMENT,
    BCART_SAVE_SHIPPING
} from "../../constants/business/bcartConstants";

const baddToCart = (productId, qty) => async (dispatch, getState) => {
    try {

        const { data } = await Axios.get(base + "/api/products/GetOne/" + productId);
        dispatch({
            type: BCART_ADD_ITEM, payload: {
                id: data.id,
                name: data.name,
                imageUrl1: data.imageUrl1,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });
        const { bcart: { bcartItems } } = getState();
        Cookie.set("bcartItems", JSON.stringify(bcartItems));
    } catch (error) {

    }
}
const bremoveFromCart = (productId) => (dispatch, getState) => {

    dispatch({ type: BCART_REMOVE_ITEM, payload: productId });
    const { bcart: { bcartItems } } = getState();
    debugger
    Cookie.set("bcartItems", JSON.stringify(bcartItems));

}
const bsaveShipping = (data) => (dispatch) => {
    dispatch({ type: BCART_SAVE_SHIPPING, payload: data });
}

const bsavePayment = (data) => (dispatch) => {
    dispatch({ type: BCART_SAVE_PAYMENT, payload: data });
}
export { baddToCart, bremoveFromCart, bsaveShipping, bsavePayment }