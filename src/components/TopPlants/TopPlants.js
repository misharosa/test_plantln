import React from "react"
import firstProfessionalRepot from "../../img/All/Professional Repot_1.png";
import secondProfessionalRepot from "../../img/All/Professional Repot_2.png";
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
                        <img className="repot__img" src={plants.slice(1,2)[0].urlImg} alt="repot img"/>
                        <div className="repot__date">{plants.slice(1,2)[0].date}</div>
                        <div className="repot__title">{plants.slice(1,2)[0].title}</div>
                        <div className="repot__description">
                            {plants.slice(1,3)[0].description}
                        </div>
                    </div>
                    <div className="repot">
                        <img className="repot__img" src={plants.slice(2,3)[0].urlImg} alt="repot img"/>
                        <div className="repot__date">{plants.slice(2,3)[0].date}</div>
                        <div className="repot__title">{plants.slice(2,3)[0].title}</div>
                        <div className="repot__description">
                            {plants.slice(2,3)[0].description}
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