const intialState = {
    user: null,
    pets: [],
    loggedIn: false
}

const usersReducer = (state=intialState, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload, 
                pets: action.payload.pets,
                loggedIn: true
            }
        case "ADD_USER":
            return {
                ...state
            }
        case "LOGOUT_USER":
            return {
                ...state,
                user: null,
                loggedIn: false
            }
        case "DELETE_PET":
            return {
                ...state,
                pets: state.pets.filter(pet => pet.id !== action.payload),
            };
            default:
                return state;
    }
}

export default usersReducer;