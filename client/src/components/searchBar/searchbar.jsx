import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";


export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokemonByName(name));
    document.getElementById("valueName").value = "";
  }

  return (
    <div className="inputDiv">
      <input
        id="valueName"
        className="inputSearch"
        onChange={(e) => handleInputChange(e)}
        type="text"
        placeholder="Pika pika..."
      />
      <button
        className="ButtonSearch"
        onClick={(e) => handleSubmit(e)}
        type={"submit"}
      >
        Search
      </button>
    </div>
  );
}