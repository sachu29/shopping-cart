import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchComponent = ({ onSearch }) => {
  return (
    <Search
      placeholder="What do you want to buy today?"
      allowClear
      onChange={(e) => onSearch(e.target.value)}
      style={{ width: 200 }}
    />
  );
};

export default SearchComponent;
