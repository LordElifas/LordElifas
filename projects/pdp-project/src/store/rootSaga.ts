import { all, call } from 'redux-saga/effects';

import watchAuth from './auth/sagas';
import watchUser from './user/sagas';
import watchNotifications from './notifications/sagas';
import watchDeepLink from './deepLink/sagas';
import watchSubscriptions from './subscriptions/sagas';
import watchGuides from './guides/sagas';

export default function* rootSaga() {
    yield all([
        call(watchUser),
        call(watchDeepLink),
        call(watchAuth),
        call(watchNotifications),
        call(watchSubscriptions),
        call(watchGuides),
    ]);
}
