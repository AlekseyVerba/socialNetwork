import React from "react";
import s from "./Users.module.css";


const Users = (props) => {
    debugger
    if (props.state.length === 0) {
        debugger
        props.setUsers([
            {
                id: 1,
                follow: true,
                name: "Роман",
                surname: "Сибетулов",
                status: "Знание сила!",
                location: { city: "Иркутск", country: "Россия" },
                imgAvatar: "https://sun9-22.userapi.com/impf/qPhBCLwLKlFHhqKQo3zCSGYuBgMZLUqNy3k5-g/UDXrdcxJW5U.jpg?size=720x960&quality=96&proxy=1&sign=2d266209c1436c45e7e778c57abcea5a&type=album"
            },
            {
                id: 2,
                follow: true,
                name: "Максим",
                surname: "Макарычев",
                status: "Старость не в радость",
                location: { city: "Иркутск", country: "Россия" },
                imgAvatar: "https://sun9-42.userapi.com/impf/c857216/v857216257/d2cc4/wRfscTK2uGk.jpg?size=1620x2160&quality=96&proxy=1&sign=98bf3913100ffe8ebae515caf4a88bc7&type=album"
            },
            {
                id: 3,
                follow: false,
                name: "Екатерина",
                surname: "Капустина",
                status: "Краска с волос слезла =(",
                location: { city: "Иркутск", country: "Россия" },
                imgAvatar: "https://sun9-19.userapi.com/impg/cnLy001O-fX631VYew6kWauEFwEo9vL7kiS1TA/Nb4tmYHCFgo.jpg?size=1620x2160&quality=96&proxy=1&sign=035e362c63133943bf59dd3971323f2c&type=album"
            },
            {
                id: 4,
                follow: true,
                name: "Александр",
                surname: "Копылов",
                status: "чувак это рэпчик",
                location: { city: "Иркутск", country: "Россия" },
                imgAvatar: "https://sun9-7.userapi.com/impg/-vpKeX-a5OUL7zS4AEUC50Efgwbtde7IM77LWg/atdEjVeGjLg.jpg?size=1280x1280&quality=96&proxy=1&sign=3bde5a2531ab26003e61fe8848b2c848&type=album"
            },
        ])
    }

    return (
        <div className={s.users}>
            {
                props.state.map(user => {
                    return (
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <img src={user.imgAvatar} alt="avatar" className={s.imgAvatar} />


                                {user.follow ?
                                    <button className={`${s.btnFollow} ${s.btnFol}`} onClick={() => props.unFollow(user.id)}>Отписаться</button> :
                                    <button className={`${s.btnFollow} ${s.btnUnfol}`} onClick={() => props.follow(user.id)}>Подписаться</button>}


                            </div>
                            <div className={s.content}>
                                <div className={s.left}>
                                    <div className={s.fullName}>
                                        <span className={s.name}>{user.name + " "}</span>
                                        <span className={s.surname}>{user.surname[0] + "."}</span>
                                    </div>
                                    <div className={s.status}>
                                        {user.status.length >= 30 ? user.status.slice(0, 30) + "..." : user.status}
                                    </div>
                                </div>
                                <div className={s.right}>
                                    <div className={s.country}>{user.location.country}</div>
                                    <div className={s.city}>{user.location.city}</div>
                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </div >
    )
}

export default Users;