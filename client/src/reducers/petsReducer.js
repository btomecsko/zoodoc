const initialState = {
    pets: []
}

const petsReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOAD_PET":
            return {
                ...state,
                pets: action.payload,
            };
        case "ADD_PET":
            return {
                ...state,
                pets: [...state.pets, action.payload]
            };
        case "EDIT_PET":
            const updatedPets = state.pets.map(pet => pet.id === action.payload.id ? action.payload : pet);
            return {
                ...state,
                pets: updatedPets
            };
        case "DELETE_PET":
            const remainingPets = state.pets?.filter(pet => pet.id !== action.payload);
            return {
                ...state,
                pets: remainingPets
            }
        default:
            return state
    }
}

export default petsReducer;