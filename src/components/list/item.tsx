import React, { PropsWithChildren, ReactNode } from "react";
export type ItemTypeStyle = 'circle' | 'number' | ReactNode;
interface Props {
    typeStyle?: ItemTypeStyle;
}

export const Item = (props: PropsWithChildren<Props>) => {
    return <div className="list-item">
        {
            props.typeStyle &&
            (
                typeof props.typeStyle !== "string"
                    ? < span className={`type-style`}>{props.typeStyle}</span>
                    : < span className={`type-style ${props.typeStyle}`}></span>
            )

        }
        {props.children && <div className="item-content">{props.children}</div>}
        <button className="delete-btn">x</button>
    </div >
}