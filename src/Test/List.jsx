import PropTypes from "prop-types";

function List({items = [], category = "Uncategorized"}) {
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical Order
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical Order
    // fruits.sort((a, b) => a.calories - b.calories); // Numeric Order
    // fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric Order

    const lowCalFruits = items.filter(item => item.calories < 100);
    const highCalFruits = items.filter(item => item.calories >= 100);

  const listItems = items.map(item => 
                    <li key={item.id}>{item.name} | Calories: <strong>{item.calories}</strong></li>);

  return ( 
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  )
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number,
  }))
}

export default List