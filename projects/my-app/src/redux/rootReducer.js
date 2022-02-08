import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentReducer";

export const rootReducer = combineReducers( {
    inputReducer, commentsReducer
})