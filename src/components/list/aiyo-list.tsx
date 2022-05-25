import React, { PropsWithChildren } from "react";
import './aiyo-list.css';

interface Props {

}

export const AiyoList = (props: PropsWithChildren<Props>) => {
    return (
        <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
        </ul>
    );
}