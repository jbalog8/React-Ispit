import { useState } from "react";
import { Button } from "../Button/Button";

export function SearchForm({ username }) {
  const [searchFormState, setState] = useState({ text: "" });

  const handleOnChange = (event) => {
    setState({ text: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    username(searchFormState.text);
  };

  const style = { marginRight: "10px" };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <form className="searchForm" onSubmit={handleOnSubmit} autoComplete="off">
        <div className="searchForm">
          <h1 style={{ color: "blue" }}>GitHub user search:</h1>{" "}
        </div>
        <div style={{ display: "flex" }}>
          <label style={style}>GitHub username:</label>
          <input
            style={style}
            className="searchForm"
            name="text"
            type="text"
            placeholder="try-> jbalog8"
            onChange={handleOnChange}
            value={searchFormState.text}
            required
          ></input>
          <Button className="searchButton" type="submit" text="Search!" />
        </div>
      </form>
    </div>
  );
}
