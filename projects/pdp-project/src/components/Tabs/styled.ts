import styled, { css } from 'styled-components';


// theme
import mediaQueries from 'constants/mediaQueries';


export const TabsWrapper = styled.div`
    display: flex;
    justify-content: center;

    ${mediaQueries.tablet} {
        justify-content: flex-start;
    }
`;

export const TabButton = styled.button<{ isActive: boolean }>`
    padding: 12px 18px;
    position: relative;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
        > * {
            color: ${color('text-main')};
        }

        &:after {
            width: ${({ theme }) => getLineWidth(theme)};
        }
    }


    &:after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: -1px;
        height: 2px;
        transition: 0.3s;
        width: ${({ isActive, theme }) => (isActive ? getLineWidth(theme) : 0)};
        background: ${color('primary-default')};
    }
}
`;
