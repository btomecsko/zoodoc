import { setErrors, clearErrors } from "./errors";
import { headers } from "../Global";

export const loadUser = (setLoading) => {
  return (dispatch) => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.errors) {
          // dispatch an action that updates the store with the currentUser and logs us in
          // loginUser(data)
          const action = {
            type: "LOGIN_USER",
            payload: data,
          };
          dispatch(action);
        } else {
          setLoading(false);
        }
      });
  };
};

export const loginUser = (user, navigate) => {
  return (dispatch) => {
    fetch("/login", {
      method: "POST",
      headers,
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          dispatch(setErrors(data.errors));
        } else {
          const action = {
            type: "LOGIN_USER",
            payload: data,
          };
          dispatch(action);
          dispatch(clearErrors());
          navigate("/my_pets");
        }
      });
  };
};

export const signUpUser = (user, navigate) => {
  return (dispatch) => {
    fetch("/signup", {
      method: "POST",
      headers,
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          dispatch(setErrors(data.errors));
        } else {
          dispatch({
            type: "LOGIN_USER",
            payload: data,
          });
          dispatch({
            type: "ADD_USER",
            payload: data,
          });
          navigate("/add_pet");
        }
      });
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
