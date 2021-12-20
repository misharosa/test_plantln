import React from 'react'
import imgNew from "../../img/All/Rectangle 223.svg";
import "./NewPlant.scss"

export const NewPlant = ({ plants }) => {
    return (
        <>
            <div className="container__section__new">
                <div className="section__new">
                    <img
                        className="section__new__img"
                        src={imgNew} alt="new plant img"
                    />
                    <p className="section__new__title">New</p>
                </div>
                <div className="new__plant__icon">
                    <img
                        className="new__plant__img"
                        src={plants[0].urlImg} alt="New Plant"
                    />
                    <div className="new__plant">
                        <div className="new__plant__date">
                            {plants[0].date}
                        </div>
                        <div className="new__plant__title">
                            {plants[0].title}
                        </div>
                        <div className="new__plant__description">
                            {plants[0].description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="line" />
        </>
    )
}