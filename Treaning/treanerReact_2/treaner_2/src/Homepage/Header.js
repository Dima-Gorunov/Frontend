import {Component} from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import PagesContainer from "../UsersPage/Pages/PagesContainer";

const Header = (props) => {

    return (
        <div className={s.header}>
            <div>
                Header
            </div>
            <div>
                <div>{props.Login}</div>
                <NavLink to="login">Login</NavLink>
                <button onClick={props.logOutThunk}>logOut</button>
            </div>

        </div>
    )

}

export default Header;