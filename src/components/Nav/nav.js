import React from 'react';
import Union from "../../img/All/Union.svg";
import Search from "../../img/All/search.svg";
import user from "../../img/All/user.svg";
import Burger from "../../img/All/burger.svg";
import "./nav.scss"
import "./nav-desktop.scss"

export const Nav = () => {
    return (
        <>
        <div className="nav__desktop">
                <ul className="nav__desktop__list" >
                    <li className="nav__desktop-item">Discover</li>
                    <li className="nav__desktop-item">My Plants</li>
                    <li className="nav__desktop-item">Diseases</li>
                    <li className="nav__desktop-item">Blog</li>
                    <li className="nav__desktop-item">FAQ</li>
                    <li className="nav__desktop-item">Contact Us</li>
                </ul>
                <div className="nav__desktop__icon">
                    <img className="nav__desktop__icon-search" src={Search} alt="search img"/>
                    <img className="nav__desktop__icon-user" src={user} alt="search img"/>
                </div>
        </div>
        <div className="nav">
            <div className="nav__name">
                <img className="nav__name-img" src={Union} alt="union img"/>
                <p className="nav__name-text">PlantIn</p>
            </div>
            <div className="nav__icon">
                <img className="nav__icon-search" src={Search} alt="search img"/>
                <img className="nav__icon-burger" src={Burger} alt="burger img"/>
            </div>
        </div>
        </>
    )
}