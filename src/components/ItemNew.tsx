import React, { useState } from "react";
import { constantData } from "../constant/ConstantData";
import { TodoItem } from "../interfaces/DataType";
import ItemEditNew from "./ItemEditNew";

interface Props {
  todoItem: TodoItem;
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const ItemNew: React.FC<Props> = ({ todoItem, todoItems, setTodoItems }) => {
  const [isEditItem, setIsEditItem] = useState(false);
  const renderLevel = (level: number) => {
    switch (level) {
      case constantData.MEDIUM:
        return <span className="label label-danger">Medium</span>;
      case constantData.HIGH:
        return <span className="label label-warning">High</span>;
      default:
        return <span className="label label-info">Low</span>;
    }
  };

  const deleteTodoItem = (id: string) => {
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id));
  };

  const showEditItem = () => {
    setIsEditItem(true);
  };

  return (
    <>
      {isEditItem === false ? (
        <tr>
          <td className="text-center">{todoItems.indexOf(todoItem) + 1}</td>
          <td>{todoItem.name}</td>
          <td className="text-center">{renderLevel(todoItem.level)}</td>
          <td>
            <button
              id={todoItem.id}
              type="button"
              className="btn btn-warning btn-sm"
              onClick={(e) => {
                showEditItem();
              }}
            >
              Edit
            </button>
            <button
              id={todoItem.id}
              type="button"
              className="btn btn-danger btn-sm"
              onClick={(e) => {
                deleteTodoItem(e.currentTarget.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ) : (
        <ItemEditNew
          editItem={todoItem}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          setIsEditItem={setIsEditItem}
        />
      )}
    </>
  );
};

export default ItemNew;
