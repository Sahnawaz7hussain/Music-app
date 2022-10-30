import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.getAll("genre") || []);
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");
  const handleChange = (e) => {
    let option = e.target.value;
    let newCategory = [...category];
    if (newCategory.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    const params = {};
    category && (params.genre = category);
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);
  }, [category, setSearchParams, sortBy]);
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "flex-start",
  };
  return (
    <>
      <h2>Filter</h2>
      <div style={style}>
        <div>
          <input
            type="checkbox"
            value="K-Pop"
            defaultChecked={category.includes("K-Pop")}
            onChange={handleChange}
          />
          <label>K-Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Pop"
            defaultChecked={category.includes("Pop")}
            onChange={handleChange}
          />
          <label>Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Country"
            defaultChecked={category.includes("Country")}
            onChange={handleChange}
          />
          <label>Country</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Rock"
            defaultChecked={category.includes("Rock")}
            onChange={handleChange}
          />
          <label>Rock</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Heavy Metal"
            defaultChecked={category.includes("Heavy Metal")}
            onChange={handleChange}
          />
          <label>Heavy Metal</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Holiday"
            defaultChecked={category.includes("Holiday")}
            onChange={handleChange}
          />
          <label>Holiday</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Classical Crossover"
            defaultChecked={category.includes("Classical Crossover")}
            onChange={handleChange}
          />
          <label>Classical Crossover</label>
        </div>
      </div>
      {/* Filter */}
      <h2>Sort</h2>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            value="desc"
            name="sortBy"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </>
  );
};

export default FilterSort;
