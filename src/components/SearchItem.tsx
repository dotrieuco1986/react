import React, { useState } from "react";
import { TodoItem } from "../interfaces/DataType";

interface Props {
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const SearchItem: React.FC<Props> = ({ todoItems, setTodoItems }) => {
  const [searchData, setSearchData] = useState(todoItems);
  const [searchInput, setSearchInput] = useState<string>("");

  const convertViToEn = (str: string) => {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
  };

  const filterItemsByText = (str: string) => {
    setSearchInput(str);
    setTodoItems(
      searchData.filter((todoItem) =>
        convertViToEn(todoItem.name)
          .toLowerCase()
          .includes(convertViToEn(str).toLowerCase())
      )
    );
  };

  const clearSeacrhInput = () => {
    setSearchInput("");
    setTodoItems(searchData);
  };

  return (
    <div className="input-group">
      <input
        value={searchInput}
        type="text"
        className="form-control"
        placeholder="Search text"
        onChange={function (e) {
          filterItemsByText(e.target.value);
        }}
        onClick={function () {
          return setSearchData(todoItems);
        }}
      />
      <span className="input-group-btn">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={clearSeacrhInput}
        >
          Clear
        </button>
      </span>
    </div>
  );
};

export default SearchItem;
