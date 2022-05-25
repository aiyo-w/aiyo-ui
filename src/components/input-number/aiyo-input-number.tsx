import React, { ChangeEvent, ChangeEventHandler } from "react";
import './aiyo-input-number.css';

interface Props {
    name?: string | undefined;
    id?: string | undefined;
    defaultValue?: number | undefined;
    value?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;

    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const AiyoInputNumber = (props: Props) => {
    return (
        <input
            type="number"
            name={props.name}
            id={props.id}
            defaultValue={props.defaultValue}
            value={props.value}
            min={props.min}
            max={props.max}
            onChange={props.onChange}
            title="input-number"
        />
    );
}