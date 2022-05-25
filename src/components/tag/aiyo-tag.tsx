import React, { MouseEventHandler, PropsWithChildren } from "react";
import './aiyo-tag.css';

interface Props {
    color?: string | undefined;
    borderColor?: string | undefined;
    backgroundColor?: string | undefined;
    closable?: boolean | undefined;

    onClose?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const AiyoTag = (props: PropsWithChildren<Props>) => {
    const tagStyle = {
        color: props.color,
        border: `1px solid ${props.borderColor}`,
        backgroundColor: props.backgroundColor,
    };

    const doClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        const tag = e.currentTarget.parentElement;
        tag?.remove();
        props.onClose && props.onClose(e);
    }
    return (
        <div className="aiyo-tag" style={tagStyle}>
            {props.children}
            {props.closable && <button className="close-btn" onClick={doClose}>x</button>}
        </div>
    );
}