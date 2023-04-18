import { setErrors, clearErrors } from "./errors";
import { headers } from "../Global";

export const loadUser = () => {
    return dispatch => {
        fetch("/me")
        .then(res => {
            if(res.ok){
                res.json()
            }
        })
        .then(data => {
                const action = {
                    type: "LOGIN_USER",
                    payload: data
                }
                dispatch(action)
            })
        }
    }

export const loginUser = (user, navigate) => {
    return dispatch => {
        fetch("/login", {
            method: "POST",
            headers,
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.errors){
                dispatch(setErrors(data.errors));
            }else{
                const action = {
                    type: "LOGIN_USER",
                    payload: data
                }
                dispatch(action)
                dispatch(clearErrors())
                navigate("/my_pets")
            }
        })
    }
}

export const signUpUser = (user, navigate) => {
    return dispatch => {
        fetch("/signup", {
            method: "POST",
            headers,
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.errors){
                dispatch(setErrors(data.errors));
            }else{
                dispatch({
                    type: "LOGIN_USER",
                    payload: data
                })
                dispatch({
                    type: "ADD_USER",
                    payload: data
                })
                navigate("/add_pet")
            }
        })
    }
}

export const logoutUser = () => {
    return {
        type: "LOGOUT_USER"
    }
}