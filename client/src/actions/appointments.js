import { setErrors } from "./errors";

export const addAppt = (formData, navigate) => {
    return dispatch => {
      fetch('/appointments', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(data => {
          if(data.errors) {
            dispatch(setErrors(data.errors));
          } else {
            // addBlog(data)
            // dispatch to BlogsReducer for adding a blog
            const action = {
              type: "ADD_APPT",
              payload: data
            }
            
            dispatch(action);
            navigate('/my_pets');
          }
        });
    }
  }