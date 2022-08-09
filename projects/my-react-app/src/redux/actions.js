import { SUBMIT_FORM, SET_LOADING_STATUS } from "./types";

export function submitForm(payload) {
    return {
        type: SUBMIT_FORM,
        payload
    }
}

export const setLoadingStatus = (payload) => {
    return {
        type: SET_LOADING_STATUS,
        payload
    }
};