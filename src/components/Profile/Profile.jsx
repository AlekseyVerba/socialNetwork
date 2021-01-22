import React from "react";
import s from "./Profile.module.css";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Avatar from "./Avatar/Avatar";
import AboutProfile from "./AboutProfile/AboutProfile";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://avatars.mds.yandex.net/get-zen_doc/1923220/pub_5e46db93f2bc62324222f68a_5e46dc4e9f3ad148f4152570/scale_1200" alt="more" className={s.profile_zastavka} />
            </div>
            <div className={s.down}>
                <div className={s.card}>
                    <Avatar src="https://cdnb.artstation.com/p/assets/images/images/022/254/985/large/simone-ornaghi-front.jpg?1574714734" />
                    <AboutProfile name="Томас" surname="Шелби" age="30 лет" country="Великобритания" city="Бирмингем" />
                </div>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;