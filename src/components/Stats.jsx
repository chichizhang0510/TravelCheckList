import PropTypes from "prop-types";

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage =
    totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        You have {totalItems} items on your list. 📦 And you alreay packed{" "}
        {packedItems} ({packedPercentage}%).
      </em>
    </footer>
  );
}

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTogglePacked: PropTypes.func.isRequired,
};

export default Stats;
