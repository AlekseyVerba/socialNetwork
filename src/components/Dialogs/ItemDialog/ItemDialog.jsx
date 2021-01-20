import React from "react";
import { NavLink } from "react-router-dom";
import s from "./ItemDialog.module.css";

const ItemDialog = (props) => {
    return (
        <div className={s.itemDialog}>
            <img src={props.src} className={s.personImg} alt="person" />
            <li className={s.item}>
                <NavLink to={`/message/${props.id}`} className={s.link}>{props.name}</NavLink>
            </li>
        </div>
    )
}

export default ItemDialog;