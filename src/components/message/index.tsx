import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import AiyoMessage, { MessageType } from "./aiyo-message";

import './aiyo-message.css'

export interface AiyoMessageApi {
    info: (text: string) => void;
    success: (text: string) => void;
    warning: (text: string) => void;
    error: (text: string) => void;
}

export interface Notice {
    text: string;
    key: string;
    type: MessageType;
}

// 创建唯一标识
let seed = 0;
const now = Date.now();
const getUid = (): string => {
    const id = seed;
    seed += 1;
    return `MESSAGE_${now}_${id}`;
}

let add: (notice: Notice) => void;

// 消息组件占位
export const MessageContainer = () => {
    const [notices, setNotices] = useState<Notice[]>([]);
    const timeout = 3 * 1000;
    const maxCount = 10;

    const remove = (notice: Notice) => {
        const { key } = notice;

        setNotices((prevNotices) => (
            prevNotices.filter(({ key: itemkey }) => key !== itemkey)
        ));
    }

    add = (notice: Notice) => {
        setNotices((prevNotices) => [...prevNotices, notice]);

        setTimeout(() => {
            remove(notice);
        }, timeout);
    }

    useEffect(() => {
        if (notices.length > maxCount) {
            const [firstNotice] = notices;
            remove(firstNotice);
        }
    }, [notices]);

    return (
        <div className="aiyo-message-container">
            <TransitionGroup>
                {
                    notices.map(({ text, key, type }) => (
                        <Transition
                            timeout={200}
                            in
                            animation='slide-in-top'
                            key={key}
                        >
                            <AiyoMessage type={type} text={text} />
                        </Transition>
                    ))
                }
            </TransitionGroup>
        </div>
    );
}

let el = document.querySelector('#message-wrapper');
if (!el) {
    el = document.createElement('div');
    el.className = 'message-wrapper';
    el.id = 'message-wrapper';
    document.body.append(el);
}

ReactDOM.render(<MessageContainer />, el);

const api: AiyoMessageApi = {
    info: (text) => {
        add({
            text,
            key: getUid(),
            type: 'info'
        })
    }, success: (text) => {
        add({
            text,
            key: getUid(),
            type: 'success'
        })
    },
    warning: (text) => {
        add({
            text,
            key: getUid(),
            type: 'warning'
        })
    },
    error: (text) => {
        add({
            text,
            key: getUid(),
            type: 'danger'
        })
    }
}

export default api;