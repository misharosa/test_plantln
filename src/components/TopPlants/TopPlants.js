import React from "react"
import "./TopPlants.scss"

export const TopPlants = ({ plants }) => {
    return (
        <>
            <div>
                <div className="capture">
                    <p>TOP of the Day</p>
                </div>
                <div className="repots">
                    <div className="repot">
                        <img className="repot__img" src={plants[0].urlImg} alt="repot img"/>
                        <div className="repot__date">{plants[0].date}</div>
                        <div className="repot__title">{plants[0].title}</div>
                        <div className="repot__description">
                            {plants[0].description}
                        </div>
                    </div>
                    <div className="repot">
                        <img className="repot__img" src={plants[1].urlImg} alt="repot img"/>
                        <div className="repot__date">{plants[1].date}</div>
                        <div className="repot__title">{plants[1].title}</div>
                        <div className="repot__description">
                            {plants[1].description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"> </div>
            <div>
                <div className="capture">
                    <p>Interesting</p>
                </div>
            </div>
        </>
    )
}