import React, { memo } from 'react';
import classNames from 'classnames/bind';

// styles
import styles from './RadioIcon.module.css';
let cx = classNames.bind(styles);

function RadioIcon({ isActive }) {
    let radioClasses = cx({
        default: true,
        isActive: isActive,
    });

    return <div className={radioClasses} />;
}

export default memo(RadioIcon);
