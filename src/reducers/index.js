import {combineReducers} from "redux"
import SearchReducer from "./SearchReducer"
import ListReducer from "./ListReducer"
import ApplyReducer from "./ApplyReducer"

export default combineReducers({
    SearchReducer,
    ListReducer,
    ApplyReducer
})
