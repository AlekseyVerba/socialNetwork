import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unFollowAC, setUsersAС } from "../../Redux/usersPageReducer";

const mapStateToProps = (state) => {
    return {
        state: state.usersPage.users

    }
}
debugger

const mapDispatchToProps = (dispatch) => {
    return {
        follow(id) {
            dispatch(followAC(id))
        },
        unFollow(id) {
            dispatch(unFollowAC(id))
        },
        setUsers(users) {
            dispatch(setUsersAС(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;