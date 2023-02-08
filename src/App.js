import React, { useState } from "react";

import "./styles.css";

function App() {
  const list = [
    "Pencil",
    "Book",
    "Pen",
    "Eraser",
    "Sharpener",
    "Ruler",
    "Marker",
    "Paper",
    "Sharpee marker",
    "Book mark",
    "Protractor ruler",
    "Stapler",
    "Punching Machine",
    "Pen Cup",
    "Note Holder",
    "Paper Clip"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list); // if search value empty, reset list to original list
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    ); // change search value into lower case
    setFilterList(filteredValues); //set new list to search value than been search
  };

  return (
    //return component for UI
    <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
  );
}

export default App;
