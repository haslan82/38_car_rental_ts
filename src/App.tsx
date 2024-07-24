import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import fetchCars from "./utils/fetchCars";
import { CarType } from "./utils/types";


const App = () => {
const [cars, setCars] = useState<CarType[] | null>(null);
const [isError, setIsError] = useState<boolean>(false);

  useEffect (() => {
    fetchCars()
    .then((data)=> setCars(data))
    .catch(() => setIsError(true));
  }, []);

  console.log(isError, cars)

  return (
    <div className="min-h-screen text-white bg-[rgb(23,23,23)] ">

      <BrowserRouter>
        <Header />
        <Hero />
        <div className="mt-12 padding-x padding-y max-width">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold ">Araba Katoloğu</h1>
            <p>Beğenebileceğin arabaları keşfet</p>
            <div className="home__filters">
              <SearchBar />
              <div className="home__filter-container">
                <Filter/>
                <Filter/>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>

    </div>
  );
};

export default App;
