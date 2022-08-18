import React, { useState } from "react";
import http from "../services/api";

const Header = () => {
  const [value, setValue] = useState("");

  const submit = () => {
    console.log("value inputted: ", value);
  };

  return (
    <>
      <header className="header">
        <input
          type="text"
          id="input__box"
          name="create-task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          value="submit"
          id="input__submit"
          name="create-task"
          onClick={submit}
        >
          Submit{" "}
        </button>
      </header>
    </>
  );
};

export default Header;
