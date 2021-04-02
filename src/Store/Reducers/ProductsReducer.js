import { CREATE_PRODUCTS, DELETE_PRODUCT, PAGINATION_PRODUCTS, PRODUCTS, QUICK_VIEW } from "../Actions/ProductsAction"
import { productsInitialState } from "./initialState"




const productsReducer = (state = productsInitialState, action) => {
    switch (action.type) {
        case PRODUCTS:
            return { ...state, products: action.payload }
        case PAGINATION_PRODUCTS:
             return { ...state, paginationProducts: action.payload }
        case CREATE_PRODUCTS:
            alert(action.payload.message)
            return state
        case DELETE_PRODUCT:
            alert(action.payload.message)
            return { ...state, products: [...action.payload.products] }
        case QUICK_VIEW:
            return { ...state, selectedProduct: action.payload[0] }
        default:
            return state
    }
}
export default productsReducer