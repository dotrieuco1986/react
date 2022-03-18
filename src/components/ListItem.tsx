import React from "react";
import ItemNew from "./ItemNew";
import { TodoItem } from "../interfaces/DataType";

interface Props {
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const ListItem: React.FC<Props> = ({ todoItems, setTodoItems }) => {
  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Item</div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Name</th>
            <th style={{ width: "15%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "15%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoItems.length > 0
            ? todoItems.map((todoItem) => (
                <ItemNew
                  todoItem={todoItem}
                  key={todoItem.id}
                  todoItems={todoItems}
                  setTodoItems={setTodoItems}
                />
              ))
            : "No data"}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
