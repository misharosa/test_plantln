import './styles/App.scss';
import Plants from "./data/plants.json"
import React, {useEffect, useMemo, useState} from "react";
import { Nav } from "./components/Nav/nav";
import { Header } from "./components/Header/header";
import { NewPlant } from "./components/NewPlant/NewPlant";
import { TopPlants } from "./components/TopPlants/TopPlants";
import { PlantsList } from "./components/PlantsList/PlantsList";
import { Advertising } from "./components/Advertising/advertising";

export function App() {
    const [plants, setPlants] = useState([])
    const [temp, setTemp] = useState(0)
    const [city, setCity] = useState(undefined)
    const [country, setCountry] = useState(undefined)
    const [value, setValue] = useState('')

    useEffect(() => {
        setPlants(Plants)
    },[])

    useEffect(async () => {
        await gettingWeather();
    },[])

    const handleFilter = useMemo( () => {
         Plants.filter(plant => {
            (plant.title).toLowerCase().includes((value).toLowerCase())
            || (plant.description).toLowerCase().includes((value).toLowerCase())
        })
    },[value])

    const gettingWeather = async () => {
        const API_KEY = "90802751e8e72a8de9f36ebf07e38a1d"
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}&units=metric`);
        const data = await api_url.json()
        setTemp(data.main.temp)
        setCity(data.name)
        setCountry(data.sys.country)
    }

  return (
    <body className="App">
    <Nav />
        <div className="general-content">
            <Header
                temp={temp}
                city={city}
                country={country}
            />
            <NewPlant plants={Plants}/>
            <TopPlants plants={Plants}/>
            <PlantsList plants={Plants}/>
            <Advertising />
            <PlantsList plants={Plants}/>
        </div>
    </body>
  );
}
