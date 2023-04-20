const intialState = {
    user: null,
    pets: []
}

const usersReducer = (state=intialState, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload, 
                pets: action.payload.pets
            }
        case "ADD_USER":
            return {
                ...state
            }
        case "LOGOUT_USER":
            return {
                ...state,
                user: null
            }
            default:
                return state;
    }
}

export default usersReducer;