import React, { useState } from "react";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { TodoItem } from "../interfaces/DataType";
interface Props {
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

interface typeSort {
  id: number;
  name: string;
}

const SortItem: React.FC<Props> = ({ todoItems, setTodoItems }) => {
  const [currentSortValue, setCurrentSortValue] = useState<string>("");
  const [listSorts] = useState<typeSort[]>([
    { id: 0, name: "LEVEL - ASC" },
    { id: 1, name: "LEVEL - DESC" },
    { id: 2, name: "NAME - ASC" },
    { id: 3, name: "NAME - DESC" },
  ]);

  const sortTodoItems = (selectItem: number) => {
    switch (selectItem) {
      case 0:
        sortByLevelAsc();
        setCurrentSortValue(listSorts[0].name);
        break;
      case 1:
        sortByLevelDesc();
        setCurrentSortValue(listSorts[1].name);
        break;
      case 2:
        sortByNameAsc();
        setCurrentSortValue(listSorts[2].name);
        break;
      case 3:
        sortByNameDesc();
        setCurrentSortValue(listSorts[3].name);
        break;
      default:
        break;
    }
  };

  // React so sánh nông nên khi sắp xếp dữ liệu vẩn ko thay đổi, chỉ thay đổi khi gán lại vùng nhớ mới vào hoặc set data []
  // sort by Level - ASC
  const sortByLevelAsc = () => {
    // clone ra 1 ô nhớ mới
    const sub = [...todoItems];
    // sắp sếp
    sub.sort((a, b) => {
      if (a.level < b.level) {
        return -1;
      }
      if (a.level > b.level) {
        return 1;
      }
      return 0;
    });
    // set data cho ô nhớ cũ
    setTodoItems(sub);
  };

  // sort by Level - DESC
  const sortByLevelDesc = () => {
    // clone ra 1 ô nhớ mới
    const sub = [...todoItems];
    // sắp sếp
    sub.sort((a, b) => {
      if (a.level < b.level) {
        return 1;
      }
      if (a.level > b.level) {
        return -1;
      }
      return 0;
    });
    // set data cho ô nhớ cũ
    setTodoItems(sub);
  };

  // sort by Name - ASC
  const sortByNameAsc = () => {
    // clone ra 1 ô nhớ mới
    const sub = [...todoItems];
    // sắp sếp
    sub.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    // set data cho ô nhớ cũ
    setTodoItems(sub);
  };

  // sort by Level - DESC
  const sortByNameDesc = () => {
    // clone ra 1 ô nhớ mới
    const sub = [...todoItems];
    // sắp sếp
    sub.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    // set data cho ô nhớ cũ
    setTodoItems(sub);
  };

  return (
    <div>
      <DropdownButton
        as={ButtonGroup}
        key={"dropdown-variants-sort"}
        id={`dropdown-variants-1`}
        title={"Sort By"}
      >
        {listSorts.map((item) => (
          <Dropdown.Item
            key={item.id}
            id={`${item.id}`}
            onClick={function () {
              sortTodoItems(item.id);
            }}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {currentSortValue}
    </div>
  );
};

export default SortItem;
