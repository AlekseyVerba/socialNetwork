import React from "react";
import { connect } from "react-redux";
import Dialogs from "./Dialogs"

let mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
        dialogsData: state.messagesPage.dialogsData
    }
}

let DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer;