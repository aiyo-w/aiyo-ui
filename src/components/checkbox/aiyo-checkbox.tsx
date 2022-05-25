import React, { ChangeEventHandler } from "react";

import './aiyo-checkbox.css'

interface Props {
    id?: string | undefined;
    name?: string | undefined;
    value: boolean;

    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const AiyoCheckbox = (props: Props) => {
/* 
    const doClick = (e: React.MouseEvent) => {
        
    }
 */
    return (<input
        type="checkbox"
        name={props.name}
        id={props.id}
        checked={props.value}
        onChange={props.onChange}
    />);
}