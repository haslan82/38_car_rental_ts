import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";


const App = () => {

  return (
    <div className="min-h-screen text-white bg-[rgb(23,23,23)] ">

      <BrowserRouter>
        <Header />
        <Hero />
      </BrowserRouter>

    </div>
  );
};

export default App;
