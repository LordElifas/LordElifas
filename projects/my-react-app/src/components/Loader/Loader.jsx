import React, { memo } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Loader.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Loader = ({ isLoading, additionalClass, isShadow = false }) => {
    const loaderStyles = cx({
        loader: true,
        [additionalClass]: additionalClass,
    });

    // eslint-disable-next-line no-nested-ternary
    return isLoading && isShadow ? (
        <div className={styles.background}>
            <div className={loaderStyles} />
        </div>
    ) : isLoading ? (
        <div className={loaderStyles} />
    ) : null;
};

Loader.propTypes = {
    isLoading: PropTypes.bool,
    additionalClass: PropTypes.string,
    isShadow: PropTypes.bool,
};

export default memo(Loader);
