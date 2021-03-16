import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(name, password);
  }

  return (
    <form className="form">
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={onNameChange} type="text"></input>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        value={password}
        onChange={onPasswordChange}
        type="password"
      ></input>
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
