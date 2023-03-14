import { InstallApp } from 'pages/install-app';
import { Guides } from 'pages/guides';
import { AccountSettingsPage } from 'pages/account';
import { ChangeEmail } from 'pages/change-email';
import { ChangePassword } from 'pages/change-password';
import { AuthorisedForgotPassword } from 'pages/forgot-password-a';

export const PRIVATE = {
    ACCOUNT: {
        path: '/account/:tabId',
        component: AccountSettingsPage,
        titleKey: 'pagesTitles.account',
    },
    ACCOUNT_DEFAULT: {
        path: '/account',
        component: AccountSettingsPage,
        titleKey: 'pagesTitles.account',
    },
    CHANGE_EMAIL: {
        path: '/change-email',
        component: ChangeEmail,
        titleKey: 'pagesTitles.changeEmail',
    },
    CHANGE_PASSWORD: {
        path: '/change-password',
        component: ChangePassword,
        titleKey: 'pagesTitles.changePassword',
    },
    AUTHORISED_FORGOT_PASSWORD: {
        path: '/forgot-password-a',
        component: AuthorisedForgotPassword,
        titleKey: 'pagesTitles.forgotPassword',
    },
    MAIN: {
        path: '/main',
        component: InstallApp,
        titleKey: 'pagesTitles.installApp',
    },
    FITNESS_GUIDES: {
        path: '/guides',
        component: Guides,
        titleKey: 'pagesTitles.guides',
    },
};

export default {
    PRIVATE,
};
