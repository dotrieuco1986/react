import React, { useState } from "react";
import { constantData } from "../constant/ConstantData";
import { TodoItem } from "../interfaces/DataType";
const { v4: uuidv4 } = require("uuid");

interface Props {
  todoItems: TodoItem[];
  setIsAddItem: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const AddItem: React.FC<Props> = ({
  todoItems,
  setTodoItems,
  setIsAddItem,
}) => {
  const [nameItem, setNameItem] = useState<string>("");
  const [levelItem, setLevelItem] = useState<number>(constantData.LOW);

  // add item
  const addTodoItem = () => {
    setTodoItems([
      ...todoItems,
      {
        id: uuidv4(),
        name: nameItem,
        level: levelItem,
      },
    ]);
  };
  return (
    <form className="form-inline add-item">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={nameItem}
          onChange={(e) => {
            setNameItem(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          onChange={(e) => {
            setLevelItem(parseInt(e.target.value));
          }}
        >
          <option value={constantData.LOW}>Low</option>
          <option value={constantData.MEDIUM}>Medium</option>
          <option value={constantData.HIGH}>High</option>
        </select>
      </div>
      <button type="button" className="btn btn-success" onClick={addTodoItem}>
        Submit
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={(e) => {
          setIsAddItem(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default AddItem;
