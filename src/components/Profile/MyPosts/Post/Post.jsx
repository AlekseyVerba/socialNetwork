import React from "react";
import s from "./Post.module.css";

const Post = (props) => {


    return (
        <div className={s.post}>
            <div className={s.content} >
                <img src="https://cdnb.artstation.com/p/assets/images/images/022/254/985/large/simone-ornaghi-front.jpg?1574714734" alt="shelby" className={s.avatar} />
                <div className={s.description}>{props.message}</div>
            </div>
            <div className={s.like}>
                <div className={s.addLike}>
                    <span>like</span>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_379554.png" alt="like" className={s.likeImg} />
                    <span className={s.count}>{props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;