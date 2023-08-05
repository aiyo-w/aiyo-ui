import React, { ReactNode } from "react";
import { Item, ItemTypeStyle } from "./item";
import './aiyo-list.css';

interface Props {
    header?: ReactNode | undefined;
    footer?: ReactNode | undefined;
    itemTypeStyle?: ItemTypeStyle;
    dataSource: any[];
    renderItem: (item: any) => ReactNode;
}

export const AiyoList = (props: Props) => {
    return (
        <div className="aiyo-list">
            {props.header && <div className="list-header">{props.header}</div>}
            {
                props.dataSource.map((item, index) => {
                    return <Item key={index} typeStyle={props.itemTypeStyle}>{props.renderItem(item)}</Item>;
                })
            }
            {props.footer && <div className="list-footer">{props.footer}</div>}
        </div>
    );
}