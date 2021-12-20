import React from "react"
import Union from "../../img/All/Union.svg";
import advertising from "../../img/All/advertising.svg";
import "./advertising.scss"

export const Advertising = () => {
    return (
        <div className="advertising__content">
            <div className="advertising">
                <div className="advertising__name">
                    <img className="advertising__name-img" src={Union} alt="union img"/>
                    <p className="advertising__name-text">PlantIn</p>
                </div>
                <div className="advertising__title">Get unlimited access to exclusive articles</div>
                <div className="advertising__text">Get rid of limits and read everything you wish</div>
                <button className="advertising__button">
                    <a className="advertising__button-link" target="_blank" href="https://myplantin.com/">Try For Free</a>
                </button>
            </div>
            <img className="advertising__img" src={advertising} alt="advertising img"/>
        </div>
    )
}