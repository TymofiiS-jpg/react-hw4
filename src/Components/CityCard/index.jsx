import styles from "./styles.module.css";
function CityCard({ city }) {
  if (!city) {
    return (
      <p className={styles.placeHolder}>
        Пожалуйста, выберите город,чтобы увидеть информацию
      </p>
    );
  }
  return (
    <div className={styles.containerCard}>
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} className={styles.cityImage} />
      <p>{city.description}</p>
      <h4>Интересные факты:</h4>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
export default CityCard;
