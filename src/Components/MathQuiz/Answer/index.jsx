import { useState } from "react";

function Answer({ updatePoints }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    updatePoints(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Введите ответ"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Проверить</button>
    </form>
  );
}
export default Answer;
