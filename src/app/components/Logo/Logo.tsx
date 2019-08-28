import * as React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const styles = require('./Logo.scss');

type LogoProps = {
    className?: string;
};

export const Logo = ({ className }: LogoProps) => {
    return (
        <div className={classNames(className, styles.logo)}>
            <NavLink to={'/'}>
                <Svg />
            </NavLink>
        </div>
    );
};

const Svg = () => {
    return (
        <svg
            className={styles.logoSvg}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0.9056455936326131 1.1167883211679452 222.2481751824818 222.2481751824818"
            width="100"
            height="100"
        >
            <path d="M1.91 2.12L220.15 2.12L220.15 220.36L1.91 220.36L1.91 2.12Z" />
            <path d="M66.98 172L52.55 172L52.55 65.27" />
            <path d="M128.43 92.2C126.73 87.27 125.67 84.2 125.24 82.96C121.59 72.37 111.62 65.27 100.42 65.27C94.03 65.27 78.08 65.27 52.55 65.27" />
            <path d="M111.03 172L111.03 144.18L111.03 118.63" />
            <path d="M186.91 65.27L141.34 105.35L111.03 132.01" />
            <path d="M186.91 172L160.61 141.34L134.79 111.24" />
        </svg>
    );
};
