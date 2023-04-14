const intialState = {
    user: null
}

const usersReducer = (state=intialState, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload
            }
            default:
                return state;
    }
}

export default usersReducer;