import React, { PropsWithChildren } from "react";
import './aiyo-divider.css';

interface Props {
    type?: 'horizontal' | 'vertical';
    orientation?: 'left' | 'right' | 'center';
}

export const AiyoDivider = (props: PropsWithChildren<Props>) => {
    return (
        <div className="aiyo-divider">
            <div className={`text ${props.orientation ? props.orientation : 'left'}`}>
                {typeof props.children === 'string' ? <span>{props.children}</span> : props.children}
            </div>
            <div className="line"></div>
        </div>
    );
}