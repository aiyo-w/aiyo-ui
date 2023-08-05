import React, { ChangeEventHandler } from "react";

import './aiyo-checkbox.css'

interface Props {
    id?: string | undefined;
    name?: string | undefined;
    value: boolean;
    disabled?: boolean;

    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const AiyoCheckbox = (props: Props) => {
    return (
        <div className="aiyo-checkbox">
            <input
                className="checkbox-input"
                type="checkbox"
                name={props.name}
                id={props.id}
                checked={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
            />
            <label htmlFor={props.id} className={props.value ? 'active' : 'false'}>
                {/* {props.value ? <span></span> : ''} */}
            </label>
        </div>
    );
}

AiyoCheckbox.defaultProps = {
    disabled: false
}