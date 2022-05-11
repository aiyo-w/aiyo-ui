import React, { MouseEventHandler, PropsWithChildren } from "react";
import "./aiyo-button.css"

interface IProps {
    iconClass?: string;
    className?: string;
    shape?: string;
    disabled?: boolean;
    plain?: boolean;
    loading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
export const AiyoButton = (props: PropsWithChildren<IProps>) => {
    return (<button className={`ai-btn ai-btn-${props.shape ? props.shape : "rectangle"} 
    ai-btn-${props.plain ? "plain" : "default"} 
    ${props.className ? props.className : ""}`} disabled={props.disabled} onClick={props.onClick}>
        {!props.loading && props.iconClass && <span className={props.iconClass}></span>}
        {props.loading && <span className={`ai-btn-loading-${props.plain ? "plain" : "default"}`}></span>}
        {props.iconClass && props.children && !(props.shape === "circle" || props.shape === "square") && <div className="icon-spacing-text"></div>}
        {props.shape === "circle" || props.shape === "square" ? "" : <span>{props.children}</span>}
    </button>);
}