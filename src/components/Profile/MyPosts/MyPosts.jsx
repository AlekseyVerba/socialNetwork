import React from "react";
import s from "./MyPosts.module.css";

import Post from "./Post/Post";


const MyPosts = (props) => {


    const link = React.createRef();

    const addCountNum = () => {
        const el = props.valueInputProfile;
        props.onAddCountNum(el)
    }

    const changeInputProfile = () => {
        const el = link.current.value;
        props.onChangeInputProfile(el)
    }

    const postElements = props.postsData.map(p => <Post message={p.message} likeCount={p.likeCount} />)

    return (
        <div>
            <div className={s.myPost}>Мои записи</div>
            {/* <form> */}
            <input className={s.input} ref={link} placeholder="Поделитесь своим последними новостями" onChange={changeInputProfile} value={props.valueInputProfile} />
            <div className={s.wrap}>
                <button type="button" className={s.submit} onClick={addCountNum}>Добавить</button>
            </div>
            {/* </form> */}
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;