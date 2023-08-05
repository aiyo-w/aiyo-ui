import React, { ChangeEvent, PropsWithChildren, ReactNode, useState } from "react";
import './aiyo-select.css';

interface OptionProps {
    index?: number;
    value?: string;
    onClick?: (value: string) => void;
}
export const Option = (props: PropsWithChildren<OptionProps>) => {
    const doClick = () => {
        props.onClick?.(props.value ? props.value : '')
    }
    return (
        <div className="list-item" onClick={doClick}>{props.children}</div>
    );
}

interface SelectProps {
    placeholder?: string;
    dataSource?: any[];

    onChange?: (value: string) => void;
}
export const AiyoSelect = (props: PropsWithChildren<SelectProps>) => {
    const [isCollapse, setIsCollapse] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const doClick = (value: string) => {
        setSelectedValue(value);
        setIsCollapse(!isCollapse);
        props.onChange?.(value);
    }

    const renderList = () => {
        const dropdownlist: ReactNode[] = [];
        props.dataSource?.map((item, index) => {
            const option = <Option key={index} index={index} value={item} onClick={doClick} >{item}</Option>;
            dropdownlist.push(option);
        });
        return (
            <>
                {dropdownlist}
            </>
        );
    }

    const doOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        props.onChange?.(value);
    }

    return (
        <div className="aiyo-select">
            <div
                className={`select-content ${isCollapse ? 'show' : ''}`}
                onClick={() => { setIsCollapse(!isCollapse) }}
            >
                <input
                    type="text"
                    placeholder={props.placeholder}
                    defaultValue={selectedValue}
                    onChange={doOnchange}
                    readOnly />
            </div>
            <div className={`dropdown-list ${isCollapse ? 'show' : ''}`}>
                {renderList()}
            </div>
        </div>
    );
}

