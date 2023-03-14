import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// components
import HeaderPublic from 'components/Header/HeaderPublic';

const AuthLayout = ({ children, titleKey }: { children: ReactNode; titleKey: string }) => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet title={t(titleKey)} />
            <HeaderPublic />
            {children}
        </>
    );
};

export default AuthLayout;
