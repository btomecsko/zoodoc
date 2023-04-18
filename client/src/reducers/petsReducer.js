import { addResource } from "../Global";

const petsReducer = (state=[], action) => {
    switch(action.type){
        case "ADD_PET":
            return addResource(state, action.payload)
            default:
                return state
    }
}

export default petsReducer;