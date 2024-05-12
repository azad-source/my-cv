import * as React from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './BackToTopButton.module.scss';

export const BackToTopButton = () => {
    const backToTop = () => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 5);
        }
    };

    return (
        <button className={styles.root} title="Наверх" onClick={backToTop} type="button">
            <FontAwesomeIcon icon={faArrowUp} className={styles.icon} />
        </button>
    );
};
