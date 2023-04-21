import { addResource } from "../Global";

const initialState = {
    pets: []
}

const petsReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOAD_PET":
            return {
                ...state,
                pets: action.payload
            }
        case "ADD_PET":
            return addResource(state=[], action.payload)
        case "DELETE_PET":
            state=[]
            return state.filter(pet => pet.id !== action.payload);
        default:
            return state
    }
}

export default petsReducer;