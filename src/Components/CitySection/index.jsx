import { useState } from "react";
import { citiesData } from "../CitySelector/array";
import CitySelector from "../CitySelector";
import CityCard from "../CityCard";
import styles from "./styles.module.css";
function CitySection() {
  const [selectedCity, setSelectedCity] = useState(null);
  function handleCitySelection(cityName) {
    const city = citiesData.find((c) => c.name === cityName);
    setSelectedCity(city || null);
  }
  return (
    <div className={styles.container}>
      <h1>City card - Города японии</h1>
      <CitySelector cities={citiesData} onSelectCity={handleCitySelection} />
      <CityCard city={selectedCity} />
    </div>
  );
}
export default CitySection;
