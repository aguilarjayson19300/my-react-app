import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, InputField, ToDoList } from "./components";

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleAddItem() {
    setItems([...items, newItem]);
    setNewItem("");
  }

  useEffect(() => {
    console.log('items', items)
    console.log('newItem', newItem)

  }, [items, newItem])

  return (
    <div className="app">
      <h1>MY TO DO LIST</h1>
      <InputField
        onChangeText={(value) => setNewItem(value)}
        placeHolder={'Add To Do'}
        value={newItem}
        required
      />

      <Button
        label="Add"
        onClick={() => handleAddItem()}
      />

      <li>
        {items.map(item => {
          return (
            <ToDoList
              text={item}
            />
          )
        })}
      </li>

    </div>
  );
}

export default App;
