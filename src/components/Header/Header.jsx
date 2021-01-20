import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <a href="#">
                <img src="https://d2u2ylzkn7lnak.cloudfront.net/uploads/sites/9/2017/08/PeakyBlinderSpirits-logo.png"
                    alt="logo" />
            </a>
        </header>
    )
}

export default Header;