export const loadDoctors = () => {
    return dispatch => {
      fetch("/doctors")
      .then(resp => resp.json())
      .then(data => {
        const action = {
          type: "LOAD_DOCTORS",
          payload: data
        }
        dispatch(action);
      })
    }
  }