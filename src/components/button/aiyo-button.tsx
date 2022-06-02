import React, { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";
import "./aiyo-button.css"

interface IProps {
    iconClass?: string;
    className?: string;
    shape?: 'rounded' | 'circle' | 'rectangle' | 'square';
    disabled?: boolean;
    plain?: boolean;
    text?: boolean;
    loading?: boolean;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
export const AiyoButton = (props: PropsWithChildren<IProps>) => {
    return (
        <div className="aiyo-btn">
            <button className={`ai-btn ${props.shape} ${props.plain && 'plain'} ${props.text && 'text'} ${props.className ? props.className : ""}`}
                style={props.style}
                disabled={props.disabled}
                onClick={props.onClick}
            >
                {!props.loading && props.iconClass && <span className={props.iconClass}></span>}
                {props.loading && <span className={`ai-btn-loading-${props.plain ? "plain" : "default"}`}></span>}
                {props.children && !(props.shape === "circle" || props.shape === "square") && <div className="icon-spacing-text"></div>}
                {props.shape === "circle" || props.shape === "square" ? "" : <span>{props.children}</span>}
            </button>
        </div>
    );
}

AiyoButton.defaultProps = {
    shape: 'rectangle',
    disabled: false,
    plain: false,
    loading: false,
    text: false,
}