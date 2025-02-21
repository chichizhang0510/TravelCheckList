import PropTypes from "prop-types";

function Item({ item, onTogglePacked }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onTogglePacked(item.id)}>
        {item.packed ? "✅" : "❌"}
      </button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool.isRequired,
  }).isRequired,
  onTogglePacked: PropTypes.func.isRequired,
};

export default Item;
