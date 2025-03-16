  "use client";
  import React, { useEffect, useState } from "react";
  import { Select } from "antd";

  const DropdownComponent = ({ onCategoryChange }) => {
    const [selectData, setSelectData] = useState([]);

    useEffect(() => {
      fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((data) => {
          const formattedData = data.map((item) => ({
            value: item.slug,
            label: item.name,
            // url: item.url,
          }));
          setSelectData(formattedData);
        })
        .catch((err) => console.error("Error fetching categories:", err));
    }, []);

    return (
      <Select
        showSearch
        placeholder="Select Category"
        optionFilterProp="children"
        onChange={onCategoryChange}
        options={selectData}
        style={{ width: 200 }}
      />
    );
  };

  export default DropdownComponent;
