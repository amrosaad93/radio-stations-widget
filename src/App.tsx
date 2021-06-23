import React from "react";
import RadioContainer from "./components/RadioContainer/RadioContainer";
import Header from "./components/Header/Header";
import Stations from "./components/Stations/Stations";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <RadioContainer>
        <Stations />
      </RadioContainer>
      <Footer />
    </div>
  );
}

export default App;
