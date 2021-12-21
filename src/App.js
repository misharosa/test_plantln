import './styles/App.scss';
import Plants from "./data/plants.json"
import InfiniteScroll from 'react-infinite-scroll-component';
import React, {useCallback, useEffect, useMemo, useState} from "react";
import { Nav } from "./components/Nav/nav";
import { Header } from "./components/Header/header";
import { NewPlant } from "./components/NewPlant/NewPlant";
import { TopPlants } from "./components/TopPlants/TopPlants";
import { PlantsList } from "./components/PlantsList/PlantsList";
import { Advertising } from "./components/Advertising/advertising";

export function App() {
    const [plants, setPlants] = useState(Plants.slice(3))
    const [temp, setTemp] = useState(0)
    const [city, setCity] = useState(undefined)
    const [country, setCountry] = useState(undefined)
    const [value, setValue] = useState('')

    useEffect(() => {
        setPlants(Plants)
    },[])

    useEffect(async () => {
        await getWeather();
    },[])

    const filteredPlants = useMemo( () => {
       return plants.filter(plant => {
           if ( (plant.title).toLowerCase().includes((value).toLowerCase())
               || (plant.description).toLowerCase().includes((value).toLowerCase())) {
               return plant
           }
        })
    },[value, plants])

    const fetchMoreData = () => {
           setTimeout(() => {
               setPlants(prev => prev.concat(prev.slice(3, 9)))
           }, 800);
    };

    const getWeather = useCallback(async () => {
        const API_KEY = "90802751e8e72a8de9f36ebf07e38a1d"
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}&units=metric`);
        const data = await api_url.json()
        setTemp(data.main.temp)
        setCity(data.name)
        setCountry(data.sys.country)
    }, [setTemp, setCity, setCountry])

  return (
    <body className="App">
    <Nav />
        <div className="general-content">
            {!!temp &&
                <Header
                    temp={temp}
                    city={city}
                    country={country}
                    setValue={setValue}
                    value={value}
                />
            }
            {plants.length &&
            <>
                {!!filteredPlants.length &&
                <NewPlant plants={filteredPlants}/>
                }

                {filteredPlants.length >= 3 &&
                <TopPlants plants={filteredPlants}/>
                }

                <PlantsList
                    plants={filteredPlants.slice(3,9)}
                />
                <Advertising />
                <PlantsList plants={filteredPlants.slice(3,9)}/>
            </>
            }
                <InfiniteScroll
                    scrollThreshold="200px"
                    dataLength={plants.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    <PlantsList plants={filteredPlants.slice(3)}/>
                </InfiniteScroll>
        </div>
    </body>
  );
}
