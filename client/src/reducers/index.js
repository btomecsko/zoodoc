import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import petsReducer from "./petsReducer";
import usersReducer from "./usersReducer";
import doctorsReducer from "./doctorsReducer";


export default combineReducers({
    errorsReducer,
    petsReducer,
    usersReducer,
    doctorsReducer
})