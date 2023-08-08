import React from "react";
import { useState } from "react";

const List = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <input className="input" type="text" value={newItem} onChange={handleInputChange} />
        <button onClick={handleAddItem}>Adicionar Item</button>
      </div>
    </>
  );
};

export default List;