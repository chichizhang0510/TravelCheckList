import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";
import { useState } from "react";
// import "./styles/App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleTogglePacked(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function removeItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  function clearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onTogglePacked={handleTogglePacked}
        removeItem={removeItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
