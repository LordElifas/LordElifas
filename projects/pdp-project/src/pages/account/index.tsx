import { useLocation, useNavigate, useParams } from 'react-router-dom';

// containers
import AccountSettings from 'containers/AccountSettings';

// analytics
import { trackChangeTab } from 'analytics/trackers/accountSettings';

export const AccountSettingsPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const params: { tabId?: string } = useParams();

    const handleChangeTab = (tabId: string) => {
        trackChangeTab(tabId);

        const path = params.tabId ? location.pathname.replace(params.tabId, tabId) : `${location.pathname}/${tabId}`;
        navigate(path);
    };

    return <AccountSettings tabId={params.tabId} onChangeTab={handleChangeTab} />;
};
