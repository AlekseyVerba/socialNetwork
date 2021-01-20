import React from "react";
import s from "./Avatar.module.css";

const Avatar = (props) => {
    return (
        <div className={s.wrap}>
            <img src={props.src} className={s.photo} alt="avatar" />
        </div>
    )
}

export default Avatar;