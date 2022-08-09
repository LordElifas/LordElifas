import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import classNames from 'classnames/bind';

// styles
import base from 'assets/styles/Common.module.css';
import styles from './Button.module.css';

// img
import payPallImg from './img/paypal.png';

// components
import Loader from 'components/Loader';
import LazyImage from 'components/LazyImage';

const globalStyles = { ...styles, ...base };
let cx = classNames.bind(globalStyles);

function Button(props) {
    const {
        globalClassNames,
        title,
        onClick,
        animated,
        disabled,
        isLoading,
        type,
        small,
        dataLocator,
        popupBtnAgree,
        popupBtnDisagree,
        lightBorder,
        i18nKey,
        rounded,
        isPayPal,
        cardHoverColor,
        contactUsBtn,
        optionLayout,
    } = props;

    const classes = globalClassNames.map((item) => ({ [item]: globalStyles[item] }));
    let btnClass = cx(
        {
            default: true,
            PayPal: isPayPal,
            animated,
            popupBtnAgree,
            popupBtnDisagree,
            lightBorder,
            rounded,
            small,
            cardHoverColor,
            contactUsBtn,
            optionLayout,
        },
        classes
    );

    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <button data-locator={dataLocator} type={type} disabled={disabled} className={btnClass} onClick={handleClick}>
            {isLoading && <Loader isLoading={isLoading} />}
            {isPayPal && (
                <LazyImage
                    src={payPallImg}
                    srcset={payPallImg}
                    webp={payPallImg}
                    alt="paypal"
                    className={styles.paypalImg}
                />
            )}
            {!isLoading && !isPayPal && (
                // span here prevents Google Translate replacing text nodes with <font>
                <span>
                    <Trans i18nKey={i18nKey}>{title}</Trans>
                </span>
            )}
        </button>
    );
}

Button.propTypes = {
    globalClassNames: PropTypes.array,
    title: PropTypes.string,
    onClick: PropTypes.func,
    animated: PropTypes.bool,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    type: PropTypes.string,
    dataLocator: PropTypes.string,
    popupBtnAgree: PropTypes.bool,
    popupBtnDisagree: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    isPayPal: PropTypes.bool,
};

Button.defaultProps = {
    className: '',
    iconType: '',
    globalClassNames: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: () => {},
    disabled: false,
    isLoading: false,
    type: 'button',
    isPayPal: false,
};

export default memo(Button);
