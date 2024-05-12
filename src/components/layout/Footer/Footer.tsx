import * as React from 'react';
import styles from './Footer.module.scss';
import { BackToTopButton } from '../BackToTopButton/BackToTopButton';

export const Footer = () => {
    const [show, setShow] = React.useState<boolean>(false);
    const trackScroll = () => {
        const scroll = window.pageYOffset;
        const height = document.documentElement.clientHeight;
        setShow(scroll > height);
    };
    window.addEventListener('scroll', trackScroll);

    return (
        <footer className={styles.root}>
            {show && <BackToTopButton />}
            <div className={styles.copyright}>© Azad MAMEDOV | CV | {new Date().getFullYear()}</div>
        </footer>
    );
};
