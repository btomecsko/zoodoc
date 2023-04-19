import { addResource } from "../Global";

const apptReducer = (state=[], action) => {
    switch(action.type){
        case "ADD_APPT":
            return addResource(state, action.payload)
        default:
            return state
    }
}

export default apptReducer;