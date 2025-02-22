import PropTypes from "prop-types";
import Item from "./Item";
import { useState } from "react";

function PackingList({ items, onTogglePacked, removeItem, clearList }) {
  const [sortBy, setSortBy] = useState("input");

  function changeSort(e) {
    setSortBy(e.target.value);
  }

  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onTogglePacked={onTogglePacked}
            removeItem={removeItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={changeSort}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by decription order</option>
          <option value="packed">Sort by packed order</option>
        </select>
        <button onClick={clearList}>Clear</button>
      </div>
    </div>
  );
}

PackingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  sortedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTogglePacked: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
};

export default PackingList;
