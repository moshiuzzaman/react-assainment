import {
    ADD_TO_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    MAKE_ORDER,
    REMOVE_FROM_CART
} from "../Actions/CartAction"


const initialState = {
    authorized: false,
    cart: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {

            let product = action.payload
            const cart = state.cart.slice();
            let alreadyAdded = false;
            cart.map(pd => {
                if (pd._id === product._id) {
                    pd.quantity++;
                    alreadyAdded = true;
                }

                localStorage.setItem("cart", JSON.stringify(cart))
                return {
                    ...state, cart
                }
            })
            if (!alreadyAdded) {

                cart.push({ ...product, quantity: 1 })
                localStorage.setItem("cart", JSON.stringify(cart))
            }
            return {
                ...state, cart
            }
        }

        case INCREASE_QUANTITY: {
            const id = action.payload
            const cart = state.cart.slice();
            const exactProduct = state.cart.find(pd => pd._id === id)
            exactProduct.quantity = exactProduct.quantity + 1
            localStorage.setItem("cart", JSON.stringify(cart))
            return { ...state, cart: [...state.cart] }
        }
        case DECREASE_QUANTITY: {
            const id = action.payload
            const cart = state.cart.slice();
            const exactProduct = state.cart.find(pd => pd._id === id)
            if (exactProduct.quantity > 0) {
                exactProduct.quantity = exactProduct.quantity - 1
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            return { ...state, cart: [...state.cart] }
        }
        case REMOVE_FROM_CART: {
            const id = action.payload
            const finalCart = state.cart.filter(pd => pd._id !== id)
            localStorage.setItem("cart", JSON.stringify(finalCart))
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