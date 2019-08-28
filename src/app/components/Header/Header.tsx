import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FacebookSvg, InstagramSvg, PinterestSvg } from '../../../svg/Social';
import { Logo } from '../Logo/Logo';

const styles = require('./Header.scss');

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo className={styles.logoImg} />
            <HeaderLogoText>
                <h1 className={styles.headerPrimary}>Dorota Koszacka</h1>
                <h1 className={styles.headerSecondary}>architekt wnętrz</h1>
            </HeaderLogoText>
            <div className={styles.headerSocial}>
                <InstagramSvg />
                <FacebookSvg />
            </div>
        </header>
    );
};

interface HeaderProps {
    to?: string;
    children?: React.ReactNode;
}

const HeaderLogoText = (props: HeaderProps) => {
    return (
        <div className={styles.headerLogo}>
            <NavLink to={'/'}>{props.children}</NavLink>
        </div>
    );
};

export default Header;
