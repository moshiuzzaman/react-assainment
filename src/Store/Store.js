import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cartReducer from './Reducers/CartReducer';
import AuthenticationReducer from './Reducers/UsersReducer'
import productsReducer from './Reducers/ProductsReducer';
import OrdersReducer from './Reducers/OrdersReducer';
import shopReducer from './Reducers/ShopReducer';

const rootReducer=combineReducers({
    login:AuthenticationReducer,
    products:productsReducer,
    cart: cartReducer,
    orders:OrdersReducer,
    shop:shopReducer
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store
