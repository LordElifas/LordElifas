import { combineReducers } from 'redux';
import UserReducer from './user/reducer';
import UiReducer from './uiEffects/reducer';
import LoadingReducer from './loading/reducer';
import ErrorsReducer from './errors/reducer';
import DeepLinkReducer from './deepLink/reducer';
import AuthReducer from './auth/reducer';
import SubscriptionsReducer from './subscriptions/reducer';
import GuidesReducer from './guides/reducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    subscriptions: SubscriptionsReducer,
    guides: GuidesReducer,
    ui: UiReducer,
    loading: LoadingReducer,
    errors: ErrorsReducer,
    deepLink: DeepLinkReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
