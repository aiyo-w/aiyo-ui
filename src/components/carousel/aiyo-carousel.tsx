import React, { PropsWithChildren } from "react";
import './aiyo-carousel.css';

interface Props {
    width?: string | undefined;
    height?: string | undefined;
}

export const AiyoCarousel = (props: PropsWithChildren<Props>) => {
    const containerStyle = {
        width: props.width,
        height: props.height,
    };
    return (
        <div className="aiyo-carousel">
            <div className="carousel-container" style={containerStyle}>
                {props.children}
            </div>
            <div className="carousel-button"></div>
        </div>
    );
}