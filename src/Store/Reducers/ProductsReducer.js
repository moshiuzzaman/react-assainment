import { PRODUCTS } from "../Actions/ProductsAction"

const initialState = {
    products:[]
}

const productsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case PRODUCTS:
            return {...state,products:action.payload}
        default:
            return state
    }
}
export default productsReducer