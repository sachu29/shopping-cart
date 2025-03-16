  "use client";
  import React, { useEffect, useState } from "react";
  import { Select } from "antd";

  const DropdownComponent = ({ onChange, value }) => {
    const [selectData, setSelectData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(value);

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

    useEffect(() => {
      if(!value) setSelectedCategory(null);
    }, [value]);

    const handleChange = (val) => {
      setSelectedCategory(val);
      onChange(val);
    }

    return (
      <Select
        showSearch
        placeholder="Select Category"
        optionFilterProp="children"
        onChange={handleChange}
        options={selectData}
        style={{ width: 200 }}
        value={selectedCategory} 
      />
    );
  };

  export default DropdownComponent;
