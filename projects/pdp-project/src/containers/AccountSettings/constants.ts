export enum accountTabs {
    Profile = 'profile',
    Subscription = 'subscription',
    Settings = 'settings',
}

export const TABS = [
    { id: accountTabs.Profile, title: 'account.tabsTitles.profile', dataLocator: 'profileTab' },
    { id: accountTabs.Subscription, title: 'account.tabsTitles.subscription', dataLocator: 'subscriptionTab' },
    { id: accountTabs.Settings, title: 'account.tabsTitles.settings', dataLocator: 'settingsTab' },
];
