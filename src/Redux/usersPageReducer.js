const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SETUSERS = "SET-USER";


const usersPage = {
    users: []
}


const usersPageReducer = (state = usersPage, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.idUser) {
                        return { ...user, follow: true }
                    }
                    return user;
                })
            }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.idUser) {
                        return { ...user, follow: false }
                    }
                    return user;
                })
            }
        }
        case SETUSERS: {
            debugger
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state
    }
}


export const followAC = (id) => {
    return {
        type: FOLLOW,
        idUser: id
    }
}

export const unFollowAC = (id) => {
    return {
        type: UNFOLLOW,
        idUser: id
    }
}
export const setUsersAС = (users) => {
    return {
        type: SETUSERS,
        users: users
    }
}


export default usersPageReducer;