import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, MAKE_ORDER, REMOVE_FROM_CART } from "../Actions/CartAction"


const initialState = {
    authorized: false,
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {

            let product = action.payload
            const isAlreadyAdded = state.cart.find(pd => pd._id === product._id)
            if (typeof isAlreadyAdded === "undefined") {
                product.quantity = 1
                return { ...state, cart: [...state.cart, product] }
            } else {
                isAlreadyAdded.quantity = isAlreadyAdded.quantity + 1
                return { ...state, cart: [...state.cart] }
            }

        }
        case INCREASE_QUANTITY: {
            const id = action.payload
            const exactProduct = state.cart.find(pd => pd._id === id)
            exactProduct.quantity = exactProduct.quantity + 1
            return { ...state, cart: [...state.cart] }
        }
        case DECREASE_QUANTITY: {
            const id = action.payload
            const exactProduct = state.cart.find(pd => pd._id === id)
            if (exactProduct.quantity > 0) {
                exactProduct.quantity = exactProduct.quantity - 1
            }
            return { ...state, cart: [...state.cart] }
        }
        case REMOVE_FROM_CART: {
            const id = action.payload
            const finalCart = state.cart.filter(pd => pd._id !== id)
            return { ...state, cart: finalCart }
        }
        case MAKE_ORDER:
            if (action.payload.authorized) {
                alert(action.payload.message)

                return { cart: [] }
            } else {
                alert(action.payload.message)
                return state
            }


        default:
            return state
    }
}

export default cartReducer