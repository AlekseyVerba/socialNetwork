const SEND_MESSAGE = "SEND-MESSAGE",
    CHANGE_INPUT_MESSAGE = "CHANGE-INPUT-MESSAGE";


const messagesPage = {
    messagesData: [
        { id: 1, messages: "Привет, как дела?)", img: "https://sun9-22.userapi.com/impf/qPhBCLwLKlFHhqKQo3zCSGYuBgMZLUqNy3k5-g/UDXrdcxJW5U.jpg?size=720x960&quality=96&proxy=1&sign=2d266209c1436c45e7e778c57abcea5a&type=album" },
        { id: 2, messages: "я тут", img: "https://sun9-22.userapi.com/impf/qPhBCLwLKlFHhqKQo3zCSGYuBgMZLUqNy3k5-g/UDXrdcxJW5U.jpg?size=720x960&quality=96&proxy=1&sign=2d266209c1436c45e7e778c57abcea5a&type=album" },
        { id: 3, messages: "еду в соседнее село", img: "https://sun9-22.userapi.com/impf/qPhBCLwLKlFHhqKQo3zCSGYuBgMZLUqNy3k5-g/UDXrdcxJW5U.jpg?size=720x960&quality=96&proxy=1&sign=2d266209c1436c45e7e778c57abcea5a&type=album" },
        { id: 4, messages: "я великий!", im: true, img: "https://sun9-65.userapi.com/impg/aDlEXMtTx5U8xz1l96737w-IsISvIo4pxZXb7w/8m_l0ArGxV4.jpg?size=580x900&quality=96&proxy=1&sign=f3e6ed459e714a3b84eb8f1a88861281&type=album" },
        { id: 5, messages: "Ставка зашла! ", img: "https://sun9-22.userapi.com/impf/qPhBCLwLKlFHhqKQo3zCSGYuBgMZLUqNy3k5-g/UDXrdcxJW5U.jpg?size=720x960&quality=96&proxy=1&sign=2d266209c1436c45e7e778c57abcea5a&type=album" },
        { id: 6, messages: "Привет дружище!", im: true, img: "https://sun9-65.userapi.com/impg/aDlEXMtTx5U8xz1l96737w-IsISvIo4pxZXb7w/8m_l0ArGxV4.jpg?size=580x900&quality=96&proxy=1&sign=f3e6ed459e714a3b84eb8f1a88861281&type=album" }
    ],

    valueInputMessage: "",

    dialogsData: [
        { id: 1, name: "Роман", src: "https://sun9-22.userapi.com/impf/qPhBCLwLKlFHhqKQo3zCSGYuBgMZLUqNy3k5-g/UDXrdcxJW5U.jpg?size=720x960&quality=96&proxy=1&sign=2d266209c1436c45e7e778c57abcea5a&type=album" },
        { id: 2, name: "Макс", src: "https://sun9-43.userapi.com/impf/TMEK7HCEAPnMwSrzoPX22IRM8NLGCnypeuUihg/4Jk7HcoDKj8.jpg?size=828x1792&quality=96&proxy=1&sign=dd75b5172191ba8509440a9651960d73&type=album" },
        { id: 3, name: "Артём", src: "https://vk.com/images/camera_200.png?ava=1" },
        { id: 4, name: "Александр", src: "https://sun9-69.userapi.com/impg/j_I05xBg7rOht5d12QoiSLtj7paJCcqoNHa4RA/HkpMA5VHAWs.jpg?size=1333x2000&quality=96&proxy=1&sign=129c06c691e1630bccd48d56b107b297&type=album" }
    ]

};

const messagesPageReducer = (state = messagesPage, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            const el = {
                id: 7,
                messages: action.text,
                im: true,
                img: "https://sun9-65.userapi.com/impg/aDlEXMtTx5U8xz1l96737w-IsISvIo4pxZXb7w/8m_l0ArGxV4.jpg?size=580x900&quality=96&proxy=1&sign=f3e6ed459e714a3b84eb8f1a88861281&type=album"
            }
            return {
                ...state,
                messagesData: [...state.messagesData, el],
                valueInputMessage: ""
            };
        }

        case CHANGE_INPUT_MESSAGE: {
            return {
                ...state,
                valueInputMessage: action.text
            };
        }
        default:
            return state;
    }
}

export let sayInfoActionCreater = (text) => {
    return {
        type: SEND_MESSAGE,
        text: text
    }
}
export let changeInputMessageActionCreater = (text) => {
    return {
        type: CHANGE_INPUT_MESSAGE,
        text: text
    }
}

export default messagesPageReducer;