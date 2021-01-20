import React from "react";
import s from "./AboutProfile.module.css";

const AboutProfile = (props) => {
    return (
        <div className={s.aboutProfile}>
            <span className={s.name}>{props.name}</span>
            <span className={s.surname}> {props.surname}</span>
            <div>
                Возраст: <span className={s.age}>{props.age}</span>
            </div>
            <div>
                Страна: <span className={s.country}>{props.country}</span>
            </div>
            <div>
                Город: <span className={s.city}>{props.city}</span>
            </div>
        </div>
    )
}

export default AboutProfile;