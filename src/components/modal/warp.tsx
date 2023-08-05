import React, { PropsWithChildren, useCallback } from 'react';
import './modal.css';

interface WrapProps {
    onClick: () => void,
    className?: string
}

const includeTarget = (target: HTMLElement, content: HTMLElement): boolean => {
    return target.contains(content);
}

const Wrap = (props: PropsWithChildren<WrapProps>) => {
    const handleClick = useCallback((e: React.MouseEvent) => {
        const childNodes = (e.currentTarget as HTMLElement).childNodes;

        for (let i = 0; i < childNodes.length; i++) {
            if (!includeTarget(childNodes[i] as HTMLElement, e.target as HTMLElement)) {
                props.onClick && props.onClick();
            }
        }
    }, []);
    return (
        <div onClick={handleClick} className={props.className ? props.className : 'modal'}>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}

export default Wrap;