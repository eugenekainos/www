import * as React from 'react';
import classNames from 'classnames';

export type SvgProps = {
    className?: string;
};

export const ChaosVRaySvg = (props: SvgProps) => (
    <svg
        className={classNames(props.className)}
        viewBox="0 -.001 487.077 172.748"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="#211c1d">
            <path d="m165.89 30.415-.829-2.562c-.344-.834-.885-3.218 2.351-3.218h11.328c1.828 0 2.196 1.676 2.541 2.512l18.907 54.374s1.468 4.808 2.65 4.808c1.29 0 2.773-4.808 2.773-4.808l18.513-54.374c.353-.836.719-2.512 3.233-2.512h10.63c2.96 0 2.854 1.676 2.528 2.512l-1.022 2.781-32.345 93.586c-.627 3.037-8.477 2.887-8.956 0zm265.495 95.886-33.401-99.264c-.344-.838-.465-2.474 2.536-2.514h12.364c.847 0 1.976.432 2.54 2.514 0 0 21.419 64.766 22.192 66.897.825 2.293 1.565 4.74 2.573 4.883.847.116 1.73-1.8 2.487-3.78.999-2.665 26.136-67.657 26.136-67.657.317-.83.617-1.457.852-1.9.273-.415.82-.607 1.644-.607h12.643c3.126 0 2.861 1.676 2.517 2.507l-44.948 115.747-11.24 27.088c-.339.837-.677 1.426-1.003 1.768-.184.499-.686.764-1.509.764h-11.343c-.83 0-1.618-.265-2.272-.764-.514-.342-.588-.931-.246-1.768zm-196.3-43.151c0-2.358.798-4.392 2.419-6.16 1.772-1.756 3.875-2.65 6.384-2.65 2.353 0 4.421.894 6.17 2.65 1.763 1.768 2.64 3.802 2.64 6.16 0 2.506-.877 4.634-2.64 6.412-1.749 1.62-3.817 2.401-6.17 2.401-2.51 0-4.59-.83-6.273-2.532-1.691-1.666-2.53-3.775-2.53-6.28m59.698-41.711c-2.075.856-3.879 2.208-5.538 3.543-.508.329-1.006.752-1.512 1.263l-1.262 1.252a21.598 21.598 0 0 0 -3.527 6.059c-1.159 2.67-1.775 5.61-1.775 8.813v60.488c0 1.685-.834 2.531-2.505 2.531h-10.088c-1.676 0-2.523-.846-2.523-2.531v-60.488a49 49 0 0 1 .514-7.045 28.313 28.313 0 0 1 2.524-7.56c1.99-4.707 4.682-8.768 8.049-12.11 3.367-3.37 7.321-6.059 11.856-8.066a41.499 41.499 0 0 1 7.563-2.273c1.512-.35 3.025-.579 4.532-.755h2.766c20.37-.465 29.95 12.282 32.639 14.639 1.177 1.18 1.364 3.27-.608 4.172l-9.025 2.392c-2.467.96-4.199.6-5.943-1.14-.704-.7-12.219-8.923-26.137-3.184" />
            <path d="m392.117 47.625c-2.014-4.631-4.704-8.626-8.068-11.972-3.365-3.366-15.582-13.321-40.789-9.286-2.479.984-2.08 2.49.317 4.868 1.014.984 5.168 5.609 6.603 6.76 2.839 2.246 4.425 1.99 5.499 1.932 22.416-1.243 24.345 19.24 24.345 22.442v.754c-.336 1.168-1.185 1.778-2.515 1.778h-24.19c-4.042 0-7.908.781-11.611 2.385-3.699 1.603-6.925 3.727-9.681 6.428-2.795 2.687-4.978 5.872-6.57 9.577-1.601 3.682-2.386 7.641-2.386 11.842 0 4.034.785 7.906 2.386 11.59 1.592 3.707 3.775 6.955 6.57 9.715 2.756 2.781 5.982 4.953 9.681 6.55 3.703 1.61 7.57 2.4 11.61 2.4h39.297c1.69 0 2.52-.843 2.52-2.531v-60.488c0-5.203-1-10.13-3.018-14.744m-12.093 62.628h-26.705c-4.226-.15-15.131-2.609-15.131-15.12 0-4.375 1.812-8.724 4.412-10.97 5.088-4.4 10.719-4.16 10.719-4.16h24.19c1.33 0 2.179.688 2.515 2.026zm-305.064-110.254c-41.4 0-74.96 33.557-74.96 74.958 0 41.398 33.56 74.955 74.96 74.955 41.396 0 74.956-33.557 74.956-74.955 0-41.401-33.56-74.958-74.956-74.958m-30.85 16.356c5.066-5.703 13.655-10.158 25.18-11.27 1.87-.156 3.75-.286 5.665-.286 18.867 0 35.875 7.853 48.015 20.445-1.697-.564-4.07-1.336-8.622-1.336-36.967 0-49.512 73.011-60.591 72.76-7.338.251-32.442-54.66-9.648-80.313m30.846 121.962c-36.875 0-66.759-29.89-66.759-66.759 0-21.544 10.258-40.665 26.106-52.874-26.696 30.157 3.144 95.104 20.36 96.855 21.445 1.323 29.561-66.442 54.75-75.124 18.901-7.091 33.204 21.208 24.572 53.106-8.764 27.127-31.145 44.318-59.029 44.796m1.57-115.209c10.542 0 19.167-2.653 19.242-5.895.087-3.252-8.426-5.893-18.983-5.893-10.557-.02-19.157 2.615-19.257 5.872-.072 3.241 8.446 5.916 18.998 5.916" />
        </g>
    </svg>
);

export const AutocadSvg = (props: SvgProps) => {
    return (
        <svg
            className={classNames(props.className)}
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M23.813 3.008L6.898 34.387l12.395-5.313zm2.375 0l3.742 21.508 6.363-2.73zM25 7.844l-3.516 20.289 6.559-2.809zM37.246 23.55l-6.965 2.984L32.45 39h13.145zm-8.855 3.797l-7.313 3.136L19.598 39h10.824zm-9.508 4.074l-8.781 3.765.32 3.813h7.144zM8.164 36.016l-2.797 1.199L4.407 39h4.007zM4.531 41l4.5 5.398L8.578 41zm6.059 0l.512 6.168 4.93.703L17.221 41zm22.207 0l1.191 6.871 5.184-.742L38.152 41zm7.383 0l.883 5.285L45.468 41z" />
        </svg>
    );
};

export const Vray3DSMax = (props: SvgProps) => {
    return (
        <svg
            className={classNames(props.className)}
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="394px"
            height="120px"
            viewBox="0 0 394 120"
            xmlSpace="preserve"
        >
            <g>
                <rect x="200.2" fill="#FFFFFF" width="2" height="120" />
                <g>
                    <path
                        fill="#FFFFFF"
                        d="M57,44.8L56.7,44c-0.1-0.3-0.3-1.1,0.8-1.1h1.4h2.4c0.6,0,0.7,0.6,0.8,0.8l6.4,18.5c0,0,0.5,1.6,0.9,1.6
			s1-1.6,1-1.6l6.3-18.5c0.1-0.3,0.2-0.8,1.1-0.8h3.6c1,0,1,0.6,0.8,0.8l-0.4,1l-11,31.9c-0.2,1-2.9,1-3.1,0L57,44.8z"
                    />
                    <path
                        fill="#FFFFFF"
                        d="M147.7,77.5l-11.4-33.9c-0.1-0.3-0.2-0.8,0.8-0.8h4.2c0.3,0,0.7,0.2,0.8,0.8c0,0,7.3,22.1,7.6,22.9
			c0.3,0.8,0.5,1.6,0.9,1.7c0.3,0.1,0.6-0.6,0.8-1.3c0.4-0.9,8.9-23.1,8.9-23.1c0.1-0.3,0.2-0.5,0.3-0.7c0.1-0.1,0.3-0.2,0.5-0.2
			h2.7h1.6c1.1,0,1,0.6,0.8,0.8L151,83.3l-3.8,9.2c-0.1,0.3-0.2,0.5-0.4,0.6c-0.1,0.2-0.2,0.2-0.5,0.2h-3.8c-0.3,0-0.5-0.1-0.8-0.2
			c-0.2-0.1-0.2-0.3-0.1-0.6L147.7,77.5"
                    />
                    <path
                        fill="#FFFFFF"
                        d="M80.7,62.8c0-0.8,0.3-1.5,0.8-2.1c0.6-0.6,1.3-0.9,2.2-0.9c0.8,0,1.5,0.3,2.1,0.9c0.6,0.6,0.9,1.3,0.9,2.1
			c0,0.8-0.3,1.6-0.9,2.2c-0.6,0.5-1.3,0.8-2.1,0.8c-0.8,0-1.6-0.3-2.2-0.8C81,64.4,80.7,63.7,80.7,62.8z"
                    />
                    <path
                        fill="#FFFFFF"
                        d="M101.1,48.5c-0.7,0.3-1.3,0.8-1.9,1.2c-0.2,0.1-0.4,0.2-0.5,0.4l-0.4,0.4c-0.5,0.7-0.9,1.3-1.2,2
			c-0.4,0.9-0.6,1.9-0.6,3v20.6c0,0.6-0.3,0.8-0.8,0.8h-3.4c-0.6,0-0.8-0.3-0.8-0.8V55.6c0-0.8,0.1-1.6,0.2-2.4
			c0.2-0.9,0.5-1.8,0.8-2.6c0.7-1.6,1.6-3,2.8-4.1c1.1-1.1,2.5-2.1,4-2.8c0.8-0.4,1.7-0.6,2.6-0.8c0.5-0.1,1-0.2,1.6-0.2h1
			c7-0.2,10.2,4.2,11.2,5c0.4,0.4,0.5,1.1-0.2,1.4l-3.1,0.8c-0.8,0.3-1.4,0.2-2-0.4C109.7,49.4,105.8,46.6,101.1,48.5z"
                    />
                    <path
                        fill="#FFFFFF"
                        d="M134.2,50.7c-0.7-1.6-1.6-2.9-2.8-4.1c-1.1-1.1-5.3-4.6-13.9-3.2c-0.8,0.4-0.7,0.8,0.1,1.7
			c0.4,0.4,1.7,1.9,2.3,2.3c1,0.8,1.5,0.7,1.9,0.7c7.6-0.4,8.3,6.5,8.3,7.7V56c-0.1,0.4-0.4,0.6-0.8,0.6H121c-1.4,0-2.7,0.2-4,0.8
			c-1.3,0.5-2.3,1.3-3.3,2.2c-1,0.9-1.7,2-2.2,3.2c-0.5,1.3-0.8,2.6-0.8,4s0.2,2.7,0.8,4c0.5,1.3,1.3,2.3,2.2,3.3c1,1,2,1.7,3.3,2.2
			c1.3,0.5,2.6,0.8,4,0.8h9.7h0.2h3.4c0.6,0,0.8-0.3,0.8-0.8V55.7C135.3,53.9,135,52.3,134.2,50.7z M130.1,72.1H121
			c-1.4-0.1-5.2-0.9-5.2-5.2c0-1.5,0.6-3,1.5-3.7c1.7-1.5,3.7-1.4,3.7-1.4h8.3c0.5,0,0.7,0.2,0.8,0.7L130.1,72.1L130.1,72.1z"
                    />
                </g>
                <path
                    fill="#FFFFFF"
                    d="M26,34.4C11.9,34.4,0.4,45.9,0.4,60S11.9,85.6,26,85.6S51.6,74.1,51.6,60C51.6,45.9,40.2,34.4,26,34.4z
		 M15.5,40c1.7-1.9,4.7-3.5,8.6-3.8c0.7-0.1,1.3-0.1,1.9-0.1c6.4,0,12.2,2.7,16.4,7c-0.6-0.2-1.4-0.5-2.9-0.5
		c-12.6,0-16.9,24.9-20.7,24.8C16.3,67.5,7.7,48.8,15.5,40z M26,81.7c-12.6,0-22.8-10.2-22.8-22.8c0-7.3,3.5-13.9,8.9-18.1
		c-9.1,10.3,1.1,32.5,7,33.1c7.3,0.4,10.1-22.7,18.7-25.6c6.4-2.4,11.3,7.3,8.4,18.1C43.2,75.6,35.5,81.5,26,81.7z M26.5,42.3
		c3.6,0,6.5-0.9,6.5-2c0.1-1.1-2.9-2-6.5-2s-6.5,0.9-6.6,2C20.1,41.4,22.9,42.3,26.5,42.3z"
                />
                <g>
                    <path
                        fill="#FFFFFF"
                        d="M242.9,58.5h2.9c1.3,0,2.5-0.2,3.5-0.5c1-0.4,1.9-0.8,2.5-1.4c0.7-0.6,1.2-1.3,1.5-2.1
			c0.4-0.8,0.5-1.7,0.5-2.6c0-1-0.1-2-0.4-2.8s-0.7-1.6-1.3-2.2c-0.6-0.6-1.3-1.1-2.2-1.4c-0.9-0.4-2-0.5-3.2-0.5
			c-1.1,0-2.1,0.2-3,0.5s-1.7,0.8-2.4,1.4c-0.7,0.6-1.2,1.4-1.6,2.2c-0.4,0.9-0.5,1.9-0.5,2.9h-2.8c0-1.4,0.2-2.6,0.8-3.8
			c0.5-1.1,1.3-2.2,2.2-3c0.9-0.8,2-1.5,3.3-2c1.3-0.5,2.6-0.7,4.1-0.7c1.5,0,2.9,0.2,4.1,0.7c1.3,0.4,2.3,1,3.2,1.9
			c0.9,0.8,1.6,1.8,2,3c0.5,1.2,0.7,2.5,0.7,4.1c0,0.8-0.1,1.6-0.4,2.3c-0.2,0.8-0.6,1.5-1.1,2.2c-0.5,0.7-1.1,1.3-1.9,1.9
			c-0.7,0.5-1.6,1-2.5,1.4c1.1,0.3,2.1,0.7,2.9,1.3c0.8,0.5,1.5,1.2,2,1.9c0.5,0.7,0.9,1.5,1.2,2.4c0.2,0.8,0.4,1.7,0.4,2.7
			c0,1.6-0.2,2.9-0.8,4.1c-0.5,1.2-1.3,2.2-2.2,3.1c-1,0.8-2,1.5-3.4,1.9c-1.3,0.4-2.7,0.7-4.2,0.7c-1.4,0-2.8-0.2-4.1-0.6
			c-1.3-0.4-2.5-1-3.5-1.8c-1.1-0.8-1.9-1.8-2.5-3.1c-0.6-1.2-1-2.6-1-4.3h2.8c0,1.1,0.2,2.1,0.6,3c0.4,0.9,1,1.7,1.7,2.3
			c0.7,0.7,1.6,1.1,2.6,1.5c1,0.4,2.1,0.5,3.3,0.5c2.5,0,4.3-0.6,5.7-1.9c1.4-1.3,2-3.1,2-5.5c0-1.3-0.2-2.3-0.6-3.2
			c-0.4-0.9-1-1.6-1.7-2.2c-0.8-0.6-1.7-1-2.8-1.3c-1.1-0.2-2.2-0.4-3.5-0.4H243v-2.5H242.9z"
                    />
                    <path
                        fill="#FFFFFF"
                        d="M259,64.2c0-2,0.2-3.8,0.7-5.3c0.5-1.6,1.1-2.9,2-4.1c0.8-1.1,1.9-2,3.1-2.6c1.2-0.6,2.6-0.9,4.1-0.9
			c1.8,0,3.4,0.4,4.7,1.1s2.3,1.7,3.2,3V41h2.8v36.2H277l-0.1-3.4c-0.8,1.2-1.9,2.2-3.2,2.8c-1.3,0.7-2.9,1-4.7,1
			c-1.5,0-2.9-0.3-4.1-1c-1.2-0.7-2.2-1.5-3.1-2.6c-0.8-1.1-1.5-2.5-2-4.1c-0.5-1.6-0.7-3.4-0.7-5.3v-0.5H259z M261.9,64.7
			c0,1.5,0.1,2.9,0.4,4.1c0.3,1.3,0.8,2.4,1.4,3.4c0.6,1,1.4,1.7,2.3,2.2c1,0.5,2,0.8,3.4,0.8c1,0,1.8-0.1,2.6-0.4
			c0.8-0.2,1.4-0.5,2.1-1c0.7-0.4,1.1-0.9,1.6-1.4c0.4-0.5,0.8-1.2,1.1-1.9V58.7c-0.3-0.7-0.6-1.3-1-1.9c-0.4-0.6-0.9-1.1-1.5-1.6
			c-0.6-0.5-1.3-0.8-2.1-1.1c-0.8-0.3-1.7-0.4-2.8-0.4c-1.3,0-2.4,0.3-3.4,0.8c-1,0.5-1.7,1.3-2.3,2.2c-0.6,1-1.1,2-1.4,3.4
			c-0.3,1.3-0.4,2.7-0.4,4.1V64.7z"
                    />
                    <path
                        fill="#FFFFFF"
                        d="M298.3,70.7c0-0.5-0.1-1-0.3-1.6c-0.2-0.5-0.5-1-1-1.5c-0.5-0.5-1.2-0.9-2.1-1.3c-0.9-0.4-2-0.8-3.5-1
			c-1.4-0.3-2.7-0.7-3.8-1c-1.1-0.4-2-0.8-2.8-1.4c-0.8-0.5-1.3-1.2-1.7-2c-0.4-0.8-0.6-1.7-0.6-2.7c0-1,0.2-1.9,0.6-2.7
			c0.4-0.8,1-1.6,1.8-2.2c0.8-0.6,1.7-1.1,2.8-1.5s2.3-0.5,3.7-0.5c1.5,0,2.8,0.2,4,0.6c1.2,0.4,2.2,0.9,2.9,1.6
			c0.8,0.7,1.4,1.5,1.9,2.4c0.4,0.9,0.7,1.9,0.7,3H298c0-0.7-0.1-1.3-0.4-1.9c-0.3-0.6-0.7-1.2-1.3-1.7c-0.5-0.5-1.3-0.8-2.1-1.1
			s-1.7-0.4-2.8-0.4s-2,0.1-2.8,0.4c-0.8,0.2-1.4,0.6-1.9,1c-0.5,0.4-0.8,0.9-1.1,1.4s-0.4,1.1-0.4,1.6s0.1,1.1,0.2,1.6
			c0.2,0.5,0.5,0.9,1,1.3c0.5,0.4,1.2,0.8,2.1,1.1c0.9,0.4,2,0.7,3.5,1c1.6,0.4,2.9,0.8,4,1.2c1.1,0.4,2,1,2.8,1.6
			c0.7,0.6,1.3,1.3,1.6,2.1c0.4,0.8,0.5,1.7,0.5,2.7c0,1.1-0.2,2-0.7,2.9c-0.4,0.9-1.1,1.6-1.9,2.2s-1.8,1.1-2.9,1.4
			c-1.1,0.4-2.5,0.5-3.9,0.5c-1.6,0-3.1-0.2-4.3-0.6c-1.3-0.4-2.3-1-3.1-1.7c-0.8-0.7-1.5-1.5-1.9-2.5c-0.4-0.9-0.7-1.9-0.7-2.9h2.8
			c0.1,1,0.3,1.9,0.8,2.5c0.5,0.7,1,1.2,1.7,1.6c0.7,0.4,1.4,0.7,2.2,0.8c0.8,0.2,1.6,0.2,2.5,0.2c1.1,0,2-0.1,2.8-0.4
			c0.8-0.2,1.5-0.6,2-1c0.5-0.4,1-0.9,1.3-1.4C298.2,71.9,298.3,71.3,298.3,70.7z"
                    />
                    <path
                        fill="#FFFFFF"
                        d="M318.9,42.9l12.7,30.3l12.7-30.3h3.8v34.3h-2.9v-15l0.2-15.2l-12.8,30.2h-2.2l-12.7-30.1l0.2,15.1v15h-2.9
			V42.9L318.9,42.9L318.9,42.9z"
                    />
                    <path
                        fill="#FFFFFF"
                        d="M368.5,77.2c-0.2-0.4-0.3-1-0.4-1.6c-0.1-0.7-0.1-1.3-0.2-1.9c-0.4,0.5-0.9,1.1-1.5,1.6s-1.3,0.9-2,1.3
			c-0.7,0.4-1.5,0.7-2.4,0.9c-0.8,0.2-1.8,0.3-2.8,0.3c-1.3,0-2.3-0.2-3.4-0.5c-1-0.4-1.9-0.8-2.6-1.5s-1.3-1.4-1.7-2.3
			s-0.6-1.9-0.6-2.9c0-1.3,0.2-2.3,0.8-3.4c0.5-1,1.3-1.9,2.3-2.5c1-0.7,2.2-1.3,3.7-1.6c1.4-0.4,3.1-0.5,4.9-0.5h5.2v-2.9
			c0-1.8-0.5-3.2-1.7-4.3c-1.1-1-2.8-1.6-4.9-1.6c-1,0-1.9,0.1-2.8,0.4c-0.8,0.2-1.6,0.7-2.2,1.1c-0.6,0.5-1.1,1-1.4,1.6
			c-0.4,0.6-0.5,1.3-0.5,2h-2.8c0-1,0.2-1.9,0.7-2.8c0.5-0.9,1.1-1.7,2-2.4c0.8-0.7,1.9-1.3,3.1-1.7c1.2-0.4,2.5-0.7,4-0.7
			c1.4,0,2.6,0.2,3.7,0.5c1.1,0.4,2.1,0.8,2.9,1.6c0.8,0.7,1.4,1.6,1.9,2.6c0.5,1,0.7,2.2,0.7,3.6v12.4c0,0.4,0,0.9,0.1,1.4
			c0.1,0.5,0.1,0.9,0.2,1.4c0.1,0.4,0.2,0.8,0.2,1.3c0.1,0.4,0.2,0.8,0.3,1v0.3L368.5,77.2L368.5,77.2z M359.7,75.2
			c1,0,2-0.1,2.8-0.4c0.9-0.2,1.7-0.6,2.3-1.1c0.7-0.5,1.3-1,1.9-1.6c0.5-0.6,1-1.3,1.3-2v-5.6h-4.8c-1.4,0-2.8,0.1-3.9,0.4
			s-2.1,0.7-2.9,1.1c-0.8,0.5-1.4,1.1-1.8,1.8c-0.4,0.7-0.6,1.5-0.6,2.3c0,0.7,0.1,1.3,0.4,1.9c0.2,0.6,0.7,1.1,1.1,1.6
			c0.5,0.4,1.1,0.8,1.8,1.1C358,75.1,358.8,75.2,359.7,75.2z"
                    />
                    <path
                        fill="#FFFFFF"
                        d="M383,62l6.9-10.3h3.4l-8.7,12.5l9,13h-3.3L383,66.4l-7.3,10.8h-3.3l9-13l-8.6-12.5h3.3L383,62z"
                    />
                </g>
            </g>
        </svg>
    );
};
