import axios from "axios"

export const LOGIN_USER = "LOGIN_USER"
export const SING_UP_USER = 'SING_UP_USER'
export const UPDATE_USER = "UPDATE_USER"
export const ALL_USERS = "ALL_USERS"
export const DELETE_USER = "DELETE_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const UPDATE_USER_ROLE = "UPDATE_USER_ROLE"
export const ADD_USER="ADD_USER"

export const loginUser = (userObj) => {
    return (dispatch) => {
        axios.post('http://localhost:7000/login', { userObj })
            .then(res => {
                dispatch({
                    type: LOGIN_USER,
                    payload: res.data
                })
            })
            .catch(err => {
                alert('user Email Or Password is not valid')
                console.log(err)
            })
    }
}

export const singUpUser = (userData) => {
    return (dispatch) => {
        axios.post('http://localhost:7000/users/create-user', { userData })
            .then(res => {
                dispatch({
                    type: SING_UP_USER,
                    payload: res.data
                })
            })
            .catch(err => {
                alert('user Email Or Password is not valid')
                console.log(err)
            })
    }
}
export const addUser = (userData) => {
    return (dispatch) => {
        axios.post('http://localhost:7000/users/add-user', { userData })
            .then(res => {
                dispatch({
                    type: ADD_USER,
                    payload: res.data
                })
            })
            .catch(err => {
                alert('user Email Or Password is not valid')
                console.log(err)
            })
    }
}

export const updateUser = (userData) => {
    return (dispatch) => {
        axios.patch('http://localhost:7000/users/update-user', { ...userData }, { headers: { token: sessionStorage.getItem("token") } })
            .then(res => {
                dispatch({
                    type: UPDATE_USER,
                    payload: { ...res.data, ...userData }
                })
            }).catch(err => {
                console.log(err)
            })
    }
}
export const allUsers = () => {
    return (dispatch) => {
        axios.get('http://localhost:7000/users', { headers: { token: sessionStorage.getItem("token") } })
            .then(res => {
                dispatch({
                    type: ALL_USERS,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}
export const deleteUser = (userId) => {
    return (dispatch) => {
        axios.post('http://localhost:7000/users/delete-user', { userId }, { headers: { token: sessionStorage.getItem("token") } })

            .then(res => {
                dispatch({
                    type: DELETE_USER,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}
export const updateUserRole = ( userId,userRole) => {
    return (dispatch) => {
        axios.patch('http://localhost:7000/users/update-role', { userId, userRole }, { headers: { token: sessionStorage.getItem("token") } })
            .then(res => {
                dispatch({
                    type: UPDATE_USER_ROLE,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}
export const logOutUser = () => {
    return {
        type: LOGOUT_USER
    }
}