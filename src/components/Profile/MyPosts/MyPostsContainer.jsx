import React from "react";
import MyPosts from "./MyPosts"


import { changeInputProfileActionCreater, addCountNumActionCreater } from "../../../Redux/profilePageReducer"

const MyPostsContainer = (props) => {
    // debugger
    const { store: { profilePage: { postsData, valueInputProfile } } } = props;

    // const el = props.store.getState();
    const addCountNum = (text) => {
        const action = addCountNumActionCreater(text)
        props.store.dispatch(action)
    }

    const changeInputProfile = (text) => {
        const action = changeInputProfileActionCreater(text)
        props.store.dispatch(action)
    }


    return <MyPosts onAddCountNum={addCountNum}
        onChangeInputProfile={changeInputProfile}
        postsData={postsData}
        valueInputProfile={valueInputProfile} />
}

export default MyPostsContainer;