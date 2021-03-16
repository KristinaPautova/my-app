import React, { useEffect, useState } from "react";
// import CardClass from '../CardClass/CardClass'
// import CardFunc from '../CardFunc/CardFanc';
// import Form from '../Form/Form'
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useEffect([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="App">
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={onNameChange} type="text"></input>
      <button type="submit" onClick={onSubmit}>
        Add
      </button>
    </div>
  );
}

export default App;
