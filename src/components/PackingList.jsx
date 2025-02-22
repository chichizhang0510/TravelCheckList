import PropTypes from "prop-types";
import Item from "./Item";

function PackingList({ items, onTogglePacked, removeItem }) {
  console.log("onTogglePacked exists?", onTogglePacked);
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onTogglePacked={onTogglePacked}
            removeItem={removeItem}
          />
        ))}
      </ul>
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
  onTogglePacked: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default PackingList;
