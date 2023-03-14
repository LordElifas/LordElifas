// types
import { iUiStore } from 'types/ui';
import { InferValueTypes } from 'types/commonTypes';

// store
import * as action from './actions';
import * as actionTypes from './actionTypes';

const initialState: iUiStore = {
    isOpenSidebar: false,
};

type ActionType = ReturnType<InferValueTypes<typeof action>>;

const uiReducer = (state = initialState, action: ActionType): iUiStore => {
    switch (action.type) {
        case actionTypes.SET_OPEN_SIDEBAR:
            return { ...state, isOpenSidebar: action.payload };

        default:
            return state;
    }
};

export default uiReducer;
