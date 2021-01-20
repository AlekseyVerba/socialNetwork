const CHANGE_INPUT_PROFILE = "CHANGE-INPUT-PROFILE",
    ADD_POST = "ADD-POST";

const profilePage = {
    postsData: [
        { id: 1, message: "По приказу острых козырьков", likeCount: 10 },
        { id: 2, message: "Только с лошадиных бегов", likeCount: 15 },
        { id: 3, message: "Закончились съёмки 1 сезона, ура!", likeCount: 20 },
        { id: 4, message: "Скоро будет открытие моео бара", likeCount: 101 },
        { id: 5, message: "Сегодня вечеринка!", likeCount: 1000 },
        { id: 6, message: "Ушёл в запой...", likeCount: 70 },

    ],
    valueInputProfile: ""
};

const profilePageReducer = (state = profilePage, action) => {

    switch (action.type) {
        case ADD_POST:
            const el = {
                id: 8,
                message: action.text,
                likeCount: 0
            };
            state.postsData.push(el)
            state.valueInputProfile = "";
            return state;
        case CHANGE_INPUT_PROFILE:
            state.valueInputProfile = action.text;
            return state;
        default:
            return state
    }
}

export let changeInputProfileActionCreater = (text) => {
    return {
        type: CHANGE_INPUT_PROFILE,
        text: text
    }
}

export let addCountNumActionCreater = (text) => {
    return {
        type: ADD_POST,
        text: text
    }
}

export default profilePageReducer;