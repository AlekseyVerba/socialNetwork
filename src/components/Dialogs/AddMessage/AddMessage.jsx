import React from "react";
import s from "./AddMessage.module.css";


const AddMessage = (props) => {




    const linkEl = React.createRef();

    const sayInfo = () => {
        const el = linkEl.current.value;
        props.onSayInfo(el);
    }

    const changeInputMessage = () => {
        const el = linkEl.current.value;
        props.onChangeInputMessage(el);
    }

    return (
        <div className={s.form}>
            <input type="text" placeholder="Написать" className={s.input} ref={linkEl} value={props.valueInputMessage} onChange={changeInputMessage} />
            <button type="button" className={s.btn} onClick={sayInfo}>Отправить</button>
        </div>
    )
}

export default AddMessage;