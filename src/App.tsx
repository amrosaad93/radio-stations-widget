import React from "react";
import "./App.css";
import RadioContainer from "./components/RadioContainer";
import Header from "./components/Header";
import Stations from "./components/Stations";
import Footer from "./components/Footer";

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
