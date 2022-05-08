import React, { PropsWithChildren } from "react";
import "./aiyo-button.css"

enum Shape {
    rectangle = "rectangle",
    rounded = "rounded",
    circle = "circle",
    square = "square"
}
interface IProps {
    iconClass?: string;
    shape?: Shape;
    className?: string;
}

export const AiyoButton = (props: PropsWithChildren<IProps>) => {
    return (<button className={`aiyo-button ${props.className && props.className}`}>
        {props.iconClass && <span className={props.iconClass}></span>}
        {props.className && props.children && <div className="icon-spacing-text"></div>}
        <span>{props.children}</span>
    </button>);
}