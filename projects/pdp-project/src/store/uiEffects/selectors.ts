import { createSelector } from 'reselect';

import { RootReducer } from '../rootReducer';

// types
import { iUiStore } from 'types/ui';

const selectUi = (state: RootReducer) => state.ui;

const selectIsOpenSidebar = createSelector(selectUi, (ui: iUiStore) => ui.isOpenSidebar);

export { selectIsOpenSidebar };
