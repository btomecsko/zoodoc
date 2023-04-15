import { setErrors, clearErrors } from "./errors";
import { headers } from "../Global";

export const loadUser = (setLoad) => {
    return dispatch => {
        fetch("/me")
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                const action = {
                    type: "LOGIN_USER",
                    payload: data
                }
                dispatch(action)
            }else{
                setLoad(false);
            }
        })
    }
}

export const loginUser = (user, setLoad) => {
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
                setLoad(true)
            }
        })
    }
}

export const signUpUser = (user, setLoad) => {
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
                setLoad(true)
            }
        })
    }
}

export const logoutUser = () => {
    return {
        type: "LOGOUT_USER"
    }
}