import { setErrors } from "./errors";

export const addPet = (formData, navigate) => {
    return dispatch => {
      fetch('/pets', {
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
              type: "ADD_PET",
              payload: data
            }
            
            dispatch(action);
            navigate('/my_pets');
          }
        });
    }
  }

  export const deletePet = (id) => {
    return dispatch => {
      fetch(`/pets/${ id }`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json"
        }
      })
        .then(res => {
          if (res.ok) {
            dispatch({
              type: "DELETE_PET",
              payload: id
            })
          }
        })
    }
  }