import React from "react";
import MyPosts from "./MyPosts"


import { changeInputProfileActionCreater, addCountNumActionCreater } from "../../../Redux/profilePageReducer"
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        valueInputProfile: state.profilePage.valueInputProfile,
        postsData: state.profilePage.postsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeInputProfile(text) {
            const action = changeInputProfileActionCreater(text)
            dispatch(action)
        },
        onAddCountNum(text) {
            const action = addCountNumActionCreater(text)
            dispatch(action)
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;