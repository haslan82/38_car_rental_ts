import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import fetchCars from "./utils/fetchCars";
import { CarType } from "./utils/types";
import Warning from "./components/Warning";
import Card from "./components/Card";


const App = () => {
const [cars, setCars] = useState<CarType[] | null>(null);
const [isError, setIsError] = useState<boolean>(false);

  useEffect (() => {
    fetchCars()
    .then((data)=> setCars(data))
    .catch(() => setIsError(true));
  }, []);

  //! console.log(isError, cars)

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
             {/* Araçları Listele 
        1) Veri null ise > Henüz api'dan cevap gelmemiştir
         2) isError true ise > API'dan hata gelmiştir
         3) Veri boş dizi ise > Aranılan kritere uyun veri yoktur
         4) Veri dolu dizi ise > API'dan araçlar gelmiştir
        */}

  

          {!cars ? (
  
          <Warning>Yükleniyor...</Warning> 
         
        ) : isError ? (

          <Warning>Üzgünüz bir sorun oluştu...</Warning> 
        
          
        ) : cars.length < 1 ? (

          <Warning>Aranılan kritere uygun araç bulunamadı...</Warning> 
        
        ):(
          
          cars.length > 1 && (
          
        
          <div className="home__cars-wrapper">
{cars.map((car, i)=>(
 <Card car={car} key={i}/>
))}
          </div>
         
          )
        )}
          
          </div>
        </div>
       

      </BrowserRouter>

    </div>
  );
};

export default App;
