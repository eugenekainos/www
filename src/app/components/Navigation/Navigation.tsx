import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classNames = require('classnames');

const styles = require('./Navigation.scss');

type NavMenuProps = {
    className?: string;
    children?: React.ReactNode;
};
type NavMenuItemProps = {
    to: string;
    exact?: boolean;
    className?: string;
    activeStyle?: string;
    children?: React.ReactNode;
};

export const Navigation = () => {
    return (
        <section className={styles.navContainer}>
            <NavMenu>
                <NavMenuItem
                    activeStyle={styles.navMenuItemActive}
                    exact={true}
                    to={'/'}
                >
                    projekty
                </NavMenuItem>
                <NavMenuItem
                    activeStyle={styles.navMenuItemActive}
                    exact={true}
                    to={'/apartments'}
                >
                    mieszkania
                </NavMenuItem>
                <NavMenuItem
                    activeStyle={styles.navMenuItemActive}
                    exact={true}
                    to={'/bathrooms'}
                >
                    łazienki
                </NavMenuItem>
                <NavMenuItem
                    activeStyle={styles.navMenuItemActive}
                    exact={true}
                    to={'/contact'}
                >
                    kontakt
                </NavMenuItem>
            </NavMenu>
        </section>
    );
};

export const NavMenuItem = ({
    exact,
    to,
    children,
    className,
    activeStyle
}: NavMenuItemProps) => {
    return (
        <li className={classNames(className, styles.navMenuItem)}>
            <NavLink
                activeClassName={classNames(activeStyle)}
                exact={exact}
                to={to}
            >
                {children}
            </NavLink>
        </li>
    );
};

export const NavMenu = ({ className, children }: NavMenuProps) => {
    return (
        <ul className={classNames(className, styles.navMenu)}>{children}</ul>
    );
};
