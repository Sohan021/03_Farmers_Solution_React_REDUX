import { BCART_ADD_ITEM, BCART_REMOVE_ITEM, BCART_SAVE_PAYMENT, BCART_SAVE_SHIPPING } from "../../constants/business/bcartConstants";
import {

} from "../../constants/shop/scartContsnts";


function bcartReducer(state = { bcartItems: [], shipping: {}, payment: {} }, action) {
    switch (action.type) {
        case BCART_ADD_ITEM:
            const item = action.payload;
            const id = state.bcartItems.find(x => x.id === item.id);
            if (id) {
                return {
                    bcartItems:
                        state.bcartItems.map(x => x.id === id.id ? item : x)
                };
            }
            return { bcartItems: [...state.bcartItems, item] };
        case BCART_REMOVE_ITEM:
            return { bcartItems: state.bcartItems.filter(x => x.id !== action.payload) };
        case BCART_SAVE_SHIPPING:
            return { ...state, shipping: action.payload };
        case BCART_SAVE_PAYMENT:
            return { ...state, payment: action.payload };
        default:
            return state
    }
}
export { bcartReducer }