import * as actionTypes from './actionTypes';

export const setIsOpenSideBar = (payload: boolean) => {
    return {
        type: actionTypes.SET_OPEN_SIDEBAR,
        payload,
    };
};
