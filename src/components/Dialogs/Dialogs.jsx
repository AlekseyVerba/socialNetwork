import React from "react";
import AddMessageContainer from "./AddMessage/AddMessageContainer";
import s from "./Dialogs.module.css";
import ItemDialog from "./ItemDialog/ItemDialog";
import ItemMessage from "./ItemMessage/ItemMessage";

const Dialogs = (props) => {


    const dialogsElements = props.dialogsData.map(d => <ItemDialog id={d.id} name={d.name} src={d.src} />)



    const messagesElements = props.messagesData.map(m => <ItemMessage name={m.messages} im={m.im} img={m.img} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsLeft}>
                <ul className={s.list}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={s.messagesRight}>
                {messagesElements}
                <AddMessageContainer />
            </div>
        </div>
    )
}

export default Dialogs;