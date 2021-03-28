import { CREATE_PRODUCTS, DELETE_PRODUCT, PAGINATION_PRODUCTS, PRODUCTS, SELECTED_PRODUCT } from "../Actions/ProductsAction"


const initialState = {
    paginationProducts:[],
    products: [],
    selectedProduct:{}
}

const productsReducer = (state = initialState, action) => {
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
        case SELECTED_PRODUCT:
            return { ...state, selectedProduct: action.payload[0] }
        default:
            return state
    }
}
export default productsReducer