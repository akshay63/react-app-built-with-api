import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    // setTerm(event.target.value.replace(/[a-z]/, ""));
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term:</label>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;
