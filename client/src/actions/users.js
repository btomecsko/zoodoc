import { setErrors, clearErrors } from "./errors";
import { headers } from "../Global";

export const loadUser = (setLoading) => {
    return dispatch => {
        fetch("/me")
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                const action = {
                    type: "LOGIN_USER",
                    payload: data
                }
                dispatch(action);
            }else{
                setLoading(false)
            }
        })
    }
}

export const loginUser = (user) => {
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
            }
        })
    }
}