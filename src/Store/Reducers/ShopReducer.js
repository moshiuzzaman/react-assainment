import { SEARCH_BY_NAME } from "../Actions/ShopAction"
import { productsInitialState } from "./initialState"

const shopReducer = (state = productsInitialState, action) => {
    switch (action.type) {
        case SEARCH_BY_NAME:
            return { ...state ,products: action.payload}
       
        default:
            return state
    }
}
export default shopReducer