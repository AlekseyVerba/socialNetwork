import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";

const store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "По приказу острых козырьков", likeCount: 10 },
                { id: 2, message: "Только с лошадиных бегов", likeCount: 15 },
                { id: 3, message: "Закончились съёмки 1 сезона, ура!", likeCount: 20 },
                { id: 4, message: "Скоро будет открытие моео бара", likeCount: 101 },
                { id: 5, message: "Сегодня вечеринка!", likeCount: 1000 },
                { id: 6, message: "Ушёл в запой...", likeCount: 70 },

            ],
            valueInputProfile: ""
        },
        messagesPage: {
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

        },
    },
    getState() {
        return this._state
    },
    _renderAll() {
        console.log("еее");
    },
    subscribe(observer) {
        this._renderAll = observer;
    },

    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)

        this._renderAll(this._state)

    }
}


export default store;