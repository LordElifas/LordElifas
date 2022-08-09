import { combineReducers } from "redux";
import { formReducer }  from "./formReducer";

export const rootReducer = combineReducers({formReducer});

// export const rootReducer = (state: any, action: any) => {
//     return appReducer(state, action);
// };


