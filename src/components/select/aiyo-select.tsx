import React, { PropsWithChildren, ReactNode, useState } from "react";
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
}
export const AiyoSelect = (props: PropsWithChildren<SelectProps>) => {
    const [isCollapse, setIsCollapse] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const doClick = (value: string) => {
        setSelectedValue(value);
        setIsCollapse(!isCollapse);
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
                    readOnly />
            </div>
            <div className={`dropdown-list ${isCollapse ? 'show' : ''}`}>
                {renderList()}
            </div>
        </div>
    );
}

