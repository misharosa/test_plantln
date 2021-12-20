import React from "react";
import "./PlantsList.scss"

export const PlantsList = ({ plants }) => {
    return (
        <>
            <div className="plants">
            {plants.slice(3).map(plant => (
                <div key={plant.id} className="plant">
                    <img className="plant__img" src={plant.urlImg} alt="plant img"/>
                    <div className="plant__date">{plant.date}</div>
                    <div className="plant__title">{plant.title}</div>
                    <div className="plant__description">{plant.description}</div>
                </div>
            ))}
            </div>

        </>
    )
}