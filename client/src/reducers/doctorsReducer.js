const intialState ={
    doctors: []
}

const doctorsReducer = (state = intialState, action) => {
        switch(action.type) {
          case "LOAD_DOCTORS":
            return {
              ...state,
              doctors: action.payload
            }
            default:
                return state;
        }
}

export default doctorsReducer;