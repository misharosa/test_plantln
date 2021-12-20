import React from "react"
import {TextField} from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import girlInBushes from "../../img/All/girlInBushes.svg";
import './header.scss'

export const Header = ({ temp, city, country, setValue, value }) => {
    return (
        <>
            <header className="header-content">
                <div className="header">
                    <div className="header__title">Stay always tuned with planting trends</div>
                    <div className="header__weather__desktop">{`${city}, ${country} ${Math.round(temp)}°C`}</div>
                    <div className="header__weather__mobile">Tips & Tricks selected specially for you!</div>
                    <TextField
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        label="Search"
                        className="header__input"
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                    />
                    <img className="header__img" src={girlInBushes} alt="girlInBushes"/>
                </div>
            </header>
        </>
    )
}
