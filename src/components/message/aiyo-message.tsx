import React from "react";
import './aiyo-message.css';

export type MessageType = 'info' | 'success' | 'danger' | 'warning';

interface Props {
    text: string;
    type: MessageType;
}

const AiyoMessage = (props: Props) => {
    return (
        <div className="aiyo-message">
            <div className="message-content">
                {props.text}
            </div>
        </div>
    );
}

export default AiyoMessage;