import { combineReducers } from "redux";
import filteredItems from "./filteredReducer";

const masterReducer = combineReducers({
    filteredItems
})

export default masterReducer