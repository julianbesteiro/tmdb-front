import React from "react";
import { useState } from "react";
import style from "./Test.css";

function Test() {
  const [input, setInput] = useState("");
  const [fruits, setFruits] = useState([]);
  const [orderAlphabetically, setOrderAlphabetically] = useState(true);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      let newFruits = [];
      if (orderAlphabetically) {
        newFruits = [...fruits, input].sort();
      } else {
        newFruits = [...fruits, input].sort().reverse();
      }
      setFruits(newFruits);
    }
    setInput("");
    document.getElementById("fruit").value = "";
  };

  const handleOrderClick = () => {
    if (!orderAlphabetically) fruits.sort();
    else {
      fruits.reverse();
    }
    setOrderAlphabetically(!orderAlphabetically);
  };

  const handleClearClick = () => {
    setFruits("");
    document.getElementById("fruit").value = "";
  };

  return (
    <>
      <p>TODO -- trabajá src/components/OrderedList.jsx</p>
      <form data-testid="input-form" onSubmit={handleSubmit}>
        <input data-testid="add-item" id="fruit" onChange={handleChange} />
      </form>
      <button
        data-testid="sort-direction"
        id="arrow"
        onClick={handleOrderClick}
      >
        {" "}
        {orderAlphabetically ? "⬆️" : "⬇️"}
      </button>
      <button data-testid="clear-list" onClick={handleClearClick}>
        ️🆑
      </button>
      <ul data-testid="items-list">
        <li>bananas</li>
        <li>manzanas</li>
        {fruits.length === 0
          ? ""
          : fruits.map((elem, index) => <li key={index}>{elem}</li>)}
      </ul>
    </>
  );
}

export default Test;
