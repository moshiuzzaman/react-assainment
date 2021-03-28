
import { ALL_USERS, DELETE_USER, LOGIN_USER, LOGOUT_USER, SING_UP_USER, UPDATE_USER } from "../Actions/UsersAction"

const initialState = {
    isLogIn: false,
    user: {},
    message: '',
    users:[]
}
const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            if(action.payload.code===202){
                sessionStorage.setItem("token", action.payload.token)
            }
            alert(action.payload.message)
            return {...state,...action.payload }
        case SING_UP_USER :
        alert(action.payload)
        return state
        case UPDATE_USER:
             alert(action.payload.message)
             return state
        case DELETE_USER:
             alert(action.payload.message)
             return {...state, users: [...action.payload.users] }
        case ALL_USERS:{
            return {...state, users: [...action.payload] }
        }
        case LOGOUT_USER:{
            return{...state, isLogIn: false}
        }
        default:
            return state
    }
}

export default AuthenticationReducer