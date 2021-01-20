import React from "react";
import AddMessage from "./AddMessage/AddMessage";
import s from "./Dialogs.module.css";
import ItemDialog from "./ItemDialog/ItemDialog";
import ItemMessage from "./ItemMessage/ItemMessage";

const Dialogs = (props) => {

    const { state: { messagesData, dialogsData, valueInputMessage } } = props;

    const dialogsElements = dialogsData.map(d => <ItemDialog id={d.id} name={d.name} src={d.src} />)



    const messagesElements = messagesData.map(m => <ItemMessage name={m.messages} im={m.im} img={m.img} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsLeft}>
                <ul className={s.list}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={s.messagesRight}>
                {messagesElements}
                <AddMessage valueInputMessage={valueInputMessage} dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Dialogs;