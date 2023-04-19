import { addResource } from "../Global";

const petsReducer = (state=[], action) => {
    switch(action.type){
        case "ADD_PET":
            return addResource(state, action.payload)
        case "DELETE_PET":
            return state.filter(pet => pet.id !== action.payload);
        default:
            return state
    }
}

export default petsReducer;