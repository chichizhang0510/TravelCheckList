import { useState } from "react";
import PropTypes from "prop-types";

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity: number,
      packed: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setDescription("");
    setNumber(1);
  }

  //   function handleClick(e) {}

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😍?</h3>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

Form.PropTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default Form;
