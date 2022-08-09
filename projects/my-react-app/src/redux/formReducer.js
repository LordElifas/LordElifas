import { SET_LOADING_STATUS, SUBMIT_FORM } from "./types";

const initialState = {
    isLoading: false,
    submit: false

}

export const formReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LOADING_STATUS:
            return {
                ...state,
                isLoading: action.payload,
            };
        case SUBMIT_FORM :
            return {
                ...state,
                submit: action.payload
            };
        default:
            return state;
    }
};

