import styles from './Footer.css'
import React from 'react';

const Footer = props => {
    return (
        <div className={styles.Footer}>
            <p>&copy; 2019 - {new Date().getFullYear()}  Copyright: <a href='https://geek-haiku.com'>Geek-Haiku.com</a></p>
        </div>
    )
};

export default Footer;