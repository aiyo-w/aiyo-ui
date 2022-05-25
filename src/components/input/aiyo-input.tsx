import React, { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';
import './aiyo-input.css';

interface IProps {
    placceholder?: string;
    defaultValue?: string;
    size?: 'small' | 'default' | 'large';
    maxLength?: number;
    disabled?: boolean;
    value?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    addonAfter?: ReactNode;
    addonBefore?: ReactNode;

    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
}

export const AiyoInput = (props: IProps) => {
    // const [defaultValue, usedefaultValue] = useState(props.defaultValue);


    // TODO:onBlur, onKeyDown, timeout

    return (
        <div className={`aiyo-input-text input-size-${props.size ? props.size : 'default'}`}>
            {props.addonBefore && <div className='aiyo-input-addon'>{props.addonBefore}</div>}
            {props.prefix && <div className='aiyo-input-icon input-icon-prefix'>{props.prefix}</div>}
            <input
                type="text"
                placeholder={props.placceholder}
                value={props.value}
                defaultValue={props.defaultValue}
                maxLength={props.maxLength}
                disabled={props.disabled}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            {props.suffix && <div className='aiyo-input-icon input-icon-suffix'>{props.suffix}</div>}
            {props.addonAfter && <div className='aiyo-input-addon'>{props.addonAfter}</div>}
        </div>
    );
}
