import {
    SCART_ADD_ITEM,
    SCART_REMOVE_ITEM,
    SCART_SAVE_SHIPPING,
    SCART_SAVE_PAYMENT
} from "../../constants/shop/scartContsnts";


function scartReducer(state = { scartItems: [], shipping: {}, payment: {} }, action) {
    switch (action.type) {
        case SCART_ADD_ITEM:
            const item = action.payload;
            const id = state.scartItems.find(x => x.id === item.id);
            if (id) {
                return {
                    scartItems:
                        state.scartItems.map(x => x.id === id.id ? item : x)
                };
            }
            return { scartItems: [...state.scartItems, item] };
        case SCART_REMOVE_ITEM:
            return { scartItems: state.scartItems.filter(x => x.id !== action.payload) };
        case SCART_SAVE_SHIPPING:
            return { ...state, shipping: action.payload };
        case SCART_SAVE_PAYMENT:
            return { ...state, payment: action.payload };
        default:
            return state
    }
}
export { scartReducer }