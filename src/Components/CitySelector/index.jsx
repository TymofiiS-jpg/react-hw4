import styles from "./styles.module.css";
const CitySelector = ({ cities, onSelectCity }) => {
  return (
    <div className={styles.citySelector}>
      <h2>Выберите город:</h2>
      <select onChange={(event) => onSelectCity(event.target.value)}>
        <option value="">-- Выберите город --</option>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default CitySelector;
