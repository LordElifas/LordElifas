import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

const CabinetLayout = ({ children, titleKey }: { children: ReactNode; titleKey: string }) => {
    return (
        <>
            <Helmet title={titleKey} />
                {children}
        </>
    );
};

export default CabinetLayout;
