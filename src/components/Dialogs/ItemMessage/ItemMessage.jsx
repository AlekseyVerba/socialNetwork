import React from "react";
import s from "./ItemMessage.module.css";

const ItemMessage = (props) => {

    let classNames = s.messageWrap;

    if (props.im) {
        classNames += " " + s.elite
    }

    return (
        <div className={classNames}>
            <img src={props.img} alt="photo" className={s.img} />
            <div className={s.messageItem}>
                {props.name}
            </div>
        </div>
    )
}

export default ItemMessage;