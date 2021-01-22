import React from "react";
import AddMessage from "./AddMessage";

import { sayInfoActionCreater, changeInputMessageActionCreater } from "../../../Redux/messagesPageReducer"
import { connect } from "react-redux";




let mapStateToProps = (state) => {
    return {
        valueInputMessage: state.messagesPage.valueInputMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSayInfo(text) {
            const action = sayInfoActionCreater(text)
            dispatch(action)
        },
        onChangeInputMessage(text) {
            const action = changeInputMessageActionCreater(text)
            dispatch(action)
        }
    }
}


const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

export default AddMessageContainer;

