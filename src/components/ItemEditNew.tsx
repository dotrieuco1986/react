import React, { useState } from "react";
import TodoItem from "../interfaces/DataType";
interface Props {
  editItem: TodoItem;
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setIsEditItem: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemEditNew: React.FC<Props> = ({
  editItem,
  todoItems,
  setTodoItems,
  setIsEditItem,
}) => {
  const [oldItem, setOldItem] = useState(editItem);
  const clickCancelItem = () => {
    setIsEditItem(false);
  };
  // ham luu item
  const clickSaveItem = () => {
    setTodoItems(
      todoItems.map((todoItem) => {
        if (todoItem.id === editItem.id) {
          return oldItem;
        }
        return todoItem;
      })
    );
    setIsEditItem(false);
  };
  return (
    <tr>
      <td className="text-center">{todoItems.indexOf(editItem) + 1}</td>
      <td>
        <input
          type="text"
          className="form-control"
          defaultValue={oldItem.name}
          onChange={(e) => {
            setOldItem({ ...oldItem, name: e.target.value });
          }}
        />
      </td>
      <td className="text-center">
        <select
          className="form-control"
          defaultValue={oldItem.level}
          onChange={(e) => {
            setOldItem({ ...oldItem, level: parseInt(e.target.value) });
          }}
        >
          <option value={0}>Low</option>
          <option value={1}>Medium</option>
          <option value={2}>High</option>
        </select>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-default btn-sm"
          onClick={() => {
            clickCancelItem();
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={() => {
            clickSaveItem();
          }}
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default ItemEditNew;
