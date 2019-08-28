import * as React from 'react';

type ContentProps = {
    className?: string;
    children?: React.ReactNode;
};

export const Content = (props: ContentProps) => {
    return <div className={props.className}>{props.children}</div>;
};
