import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import loginReducer from './Reducers/LoginReducer'
import productsReducer from './Reducers/ProductsReducer';

const rootReducer=combineReducers({
    login:loginReducer,
    products:productsReducer
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store
