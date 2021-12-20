import React from 'react';
import Union from "../../img/All/Union.svg";
import Search from "../../img/All/search.svg";
import Burger from "../../img/All/burger.svg";
import "./nav.scss"

export const Nav = () => {
    return (
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
    )
}