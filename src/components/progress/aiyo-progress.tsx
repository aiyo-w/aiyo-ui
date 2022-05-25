import React from "react";
import './aiyo-progress.css';

interface Props {
    showInfo?: boolean | undefined;
    percent?: number | undefined;
    color?: string | undefined;
    width?: string | number;
}

export const AiyoProgress = (props: Props) => {
    return (
        <div className="aiyo-progress">
            <div className="progress-bg" style={{ width: props.width }}>
                <div className="progress-inner"
                    style={{ width: `${props.percent ? props.percent : 0}%`, backgroundColor: props.color }}>
                </div>
            </div>
            {props.showInfo && <span>{props.percent}%</span>}
        </div>
    );
}