import * as React from 'react';
import { NavMenu, NavMenuItem } from '../Navigation/Navigation';

const styles = require('./Footer.scss');

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <NavMenu className={styles.footerNav}>
                <NavMenuItem exact={true} to={'/'}>
                    projekty
                </NavMenuItem>
                <NavMenuItem exact={true} to={'/apartments'}>
                    mieszkania
                </NavMenuItem>
                <NavMenuItem exact={true} to={'/bathrooms'}>
                    lazienki
                </NavMenuItem>
                <NavMenuItem exact={true} to={'/contact'}>
                    kontakt
                </NavMenuItem>
            </NavMenu>
            <p>&copy; All rights reserved. Dorota Koszacka 2019.</p>
        </footer>
    );
};

export default Footer;
