// App.js
import "./App.css";
import React, { useState } from "react";
import ContactI from "./components/ContactI";
import ContactL from "./components/ContactL";

const App = () => {
  const [filter, setFilter] = useState({
    name: "",
    date: "",
    countryCode: "",
    phoneNumber: "",
  });

  return (
    <div>
      <h1 className="containerHeading">Contact Management App</h1>
      <ContactI filter={filter} setFilter={setFilter} />
      <ContactL filter={filter} />
    </div>
  );
};

export default App;
