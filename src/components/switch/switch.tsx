import React from "react";
import './switch.css';

interface Props {
    id?: string | undefined;
    name?: string | undefined;
    checkedColor?: string | undefined;
    value: boolean;

    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const AiyoSwitch = (props: Props) => {
    return (
        <div className="aiyo-switch">
            <input
                type="checkbox"
                id={props.id}
                name={props.name}
                checked={props.value}
                onChange={props.onChange}
                title="switch"
                className="aiyo-switch-input"
            />
            <label
                htmlFor={props.id}
                style={{ backgroundColor: props.value ? props.checkedColor : undefined }}>
                <span className="aiyo-switch-button"></span>
            </label>
        </div>
    );
}