import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./usersReducer";
import doctorsReducer from "./doctorsReducer";


export default combineReducers({
    errorsReducer,
    usersReducer,
    doctorsReducer
})