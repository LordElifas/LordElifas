import { useSelector } from 'hooks/store';
import { Text } from 'wikr-core-components';

// components
import { Tabs } from 'components/Tabs';
import ProfileTab from 'components/ProfileTab';
import SettingsTab from 'components/SettingsTab';
import SubscriptionsTab from 'components/SubscriptionsTab';

// store
import { selectCurrentUser } from 'store/user/selectors';

// styled
import * as S from './styled';

// constants
import { accountTabs, TABS } from './constants';

// assets
import avatarMan from 'assets/images/avatar.svg';
import avatarWoman from 'assets/images/avatar-woman.svg';

interface IAccountSettings {
    tabId?: string;
    onChangeTab: (tabId: string) => void;
}

const getCurrentTab = (currentTab: string) => {
    switch (currentTab) {
        case accountTabs.Subscription:
            return <SubscriptionsTab />;
        case accountTabs.Settings:
            return <SettingsTab />;
        default:
            return <ProfileTab />;
    }
};

const AccountSettings = ({ tabId, onChangeTab }: IAccountSettings) => {
    const currentUser = useSelector(selectCurrentUser);

    const currentTabId = tabId || accountTabs.Profile;

    return (
        <>
            <S.Container>
                <S.AvatarWrapper paddingTop={48} paddingBottom={16} paddingX={16}>
                    <S.Image
                        dataLocator="cabinetAvatar"
                        alt="avatar"
                        src={currentUser?.gender === 'male' ? avatarMan : avatarWoman}
                    />
                    <Text type="h5" text={`${currentUser?.name} ${currentUser?.surname}`} />
                </S.AvatarWrapper>
                <S.ContentWrapper>
                    <Tabs tabs={TABS} currentTab={currentTabId} onChange={onChangeTab} />
                </S.ContentWrapper>
            </S.Container>
            <S.ContentWrapper paddingX={16}>{getCurrentTab(currentTabId)}</S.ContentWrapper>
        </>
    );
};

export default AccountSettings;
