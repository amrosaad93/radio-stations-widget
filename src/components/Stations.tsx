import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { setCurrentStation } from "../app/station";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import StationsCSS from "./Stations.module.css";
import { motion } from "framer-motion";

interface StationInterface {
  name: string;
  frequency: string;
  image: string;
}

const Stations: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentRadioStation, setCurrentRadioStation] = useState<string>("");
  const [stations, setStations] = useState<StationInterface[]>([]);

  const dispatch = useAppDispatch();

  const fetchStationsData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://radionstationsapi.herokuapp.com/radio-stations");
      const data = await response.json();
      setStations(data);
      setLoading(false);
      console.log(stations);
    } catch (e) {
      setLoading(false);
      setError("An Error Happened! Please try again later!");
      console.log(e);
    }
  };

  useEffect(() => {
    fetchStationsData();
  }, []);

  const selectStation = (stationName: string) => {
    if (currentRadioStation === stationName) {
      setCurrentRadioStation("");
      dispatch(setCurrentStation(""));
    } else {
      setCurrentRadioStation(stationName);
      dispatch(setCurrentStation(stationName));
    }
  };
  if (error) {
    return <h1>An Error Happened! Please try again later!</h1>;
  }
  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        stations.map((station) => (
          <div key={station.frequency}>
            <div className={StationsCSS.singleStation} onClick={(e) => selectStation(station.name)}>
              <h3>{station.name}</h3>
              <h3 className={StationsCSS.frequency}>{station.frequency}</h3>
            </div>
            <div>
              {currentRadioStation === station.name && (
                <motion.div
                  className={StationsCSS.details}
                  initial={{ opacity: 0.2, marginTop: -100 }}
                  animate={{ opacity: 1, marginTop: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <BsDashCircle size={30} color="gray" cursor="pointer" />
                  <img className={StationsCSS.image} src={station.image} alt="station" />
                  <BsPlusCircle size={30} color="gray" cursor="pointer" />
                </motion.div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Stations;
