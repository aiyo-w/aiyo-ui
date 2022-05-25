import { PropsWithChildren } from "react";
import "./aiyo-avatar.css";

interface IProps {
    shape?: 'circle' | 'square';
    size?: 'small' | 'middle' | 'large';
    src?: string;
}

export const AiyoAvatar = (props: PropsWithChildren<IProps>) => {
    return (
        <div className={`aiyo-avatar aiyo-avatar-${props.shape ? props.shape : 'circle'}
         aiyo-avatar-${props.size ? props.size : "middle"}`}>
            {props.src ? <img className="avatarimg" src={props.src} alt='' /> : <span>{props.children}</span>}
        </div>
    );
}