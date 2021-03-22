import axios from "axios"
import { LOGIN_USER } from "../Actions/LoginAction"

const initialState = {
    isLogIN: false,
    user: {},
    message: 'dgdfgdgfd'
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state,...action.payload,isLogIN:true }
        default:
            return state
    }
}

export default loginReducer