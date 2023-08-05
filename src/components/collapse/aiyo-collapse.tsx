import React, { PropsWithChildren, useState } from "react";
import './aiyo-collapse.css';

interface Props {
    header: string | undefined;
}

export const AiyoCollapse = (props: PropsWithChildren<Props>) => {
    const [isCollapse, setIsCollapse] = useState(true);

    const doClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const icon = e.currentTarget.firstElementChild;
        if (!isCollapse) icon?.setAttribute('style', 'transform:rotate(45deg)');
        else icon?.setAttribute('style', 'transform:rotate(135deg)');

        setIsCollapse(!isCollapse);
    }
    return (
        <div className="aiyo-collapse">
            <div className="collapse-title" onClick={doClick}>
                <span className="collapse-icon"></span>
                {props.header}
            </div>
            {!isCollapse && <div className="collapse-context">{props.children}</div>}
        </div>
    );
}