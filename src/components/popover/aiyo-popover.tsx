import React, { PropsWithChildren, ReactNode } from "react";
import './aiyo-popover.css';

interface Props {
    content?: ReactNode;
    location?: 'TL' | 'Top' | 'TR' | 'Top' | 'RT' | 'Right' | 'RB' | 'BL' | 'Bottom' | 'BR' | 'LT' | 'Left' | 'LB';
}

export const AiyoPopover = (props: PropsWithChildren<Props>) => {
    return (
        <div className="aiyo-popover">
            {props.children}
            <div className={`popover-container location-${props.location ? props.location : 'TL'}`}>
                {props.content}
            </div>
        </div>
    );
}