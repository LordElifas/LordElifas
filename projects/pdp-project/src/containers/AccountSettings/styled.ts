import styled from 'styled-components';
import { Box, Image as WikrImage } from 'wikr-core-components';

import mediaQueries from 'theme/mediaQueries';

// theme
import { color } from 'theme/selectors';

export const Container = styled(Box)`
    border-bottom: 1px solid ${color('surface-hovered')};
`;

export const FlexWrapper = styled(Box)`
    display: flex;
    align-items: center;
    max-width: 552px;
    margin: 0 auto;

    ${mediaQueries.tabletLandscape} {
        margin: 0 96px;
    }

    ${mediaQueries.desktop} {
        max-width: 456px;
    }
`;

export const ContentWrapper = styled(FlexWrapper)`
    > * {
        width: 100%;
    }
`;

export const AvatarWrapper = styled(FlexWrapper)`
    gap: 16px;
`;

export const Image = styled(WikrImage)`
    width: 56px;
`;
