import React, { useState } from "react";
import ListItem from "./components/ListItem";
import Title from "./components/Title";
import { TodoItem } from "./interfaces/DataType";
import mockData from "./data/MockData";
import AddItem from "./components/AddItem";
import SortItem from "./components/SortItem";
import SearchItem from "./components/SearchItem";

const data = mockData;
const App: React.FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>(data);
  const [isAddItem, setIsAddItem] = useState(false);

  return (
    <div className="container">
      <Title />
      <div className="row">
        <div className="col-3">
          <SearchItem todoItems={todoItems} setTodoItems={setTodoItems} />
        </div>
        <div className="col-3">
          <SortItem todoItems={todoItems} setTodoItems={setTodoItems} />
        </div>
        <div className="col-6">
          <button
            type="button"
            className="btn btn-primary btn-block mb-2"
            onClick={(e) => {
              setIsAddItem(true);
            }}
          >
            Add New Item
          </button>
          {isAddItem ? (
            <AddItem
              todoItems={todoItems}
              setIsAddItem={setIsAddItem}
              setTodoItems={setTodoItems}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {todoItems ? (
        <ListItem todoItems={todoItems} setTodoItems={setTodoItems} />
      ) : (
        <div className="row margin-0">No data</div>
      )}
    </div>
  );
};

export default App;
