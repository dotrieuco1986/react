import React, { useState } from "react";
import ListItem from "./components/ListItem";
import Title from "./components/Title";
import TodoItem from "./interfaces/DataType";
import mockData from "./data/MockData";

const data = mockData;
const App: React.FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>(data);
  return (
    <div className="container">
      <Title />
      {todoItems ? (
        <ListItem todoItems={todoItems} setTodoItems={setTodoItems} />
      ) : (
        <div className="row margin-0">No data</div>
      )}
    </div>
  );
};

export default App;
