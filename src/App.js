import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=2JAcjwEBaCKS4enUmD0hveRXamLQCVauioOBJ6V2"
      )
      .then(response => {
        console.log(response.data);
        setPhoto(response.data.message);
      })
      .catch(err =>
        console.log("The NASA API is currently down; please try again later.")
      );
  }, []);

  return (
    <div className="App">
      <h1>Nasa Photo of The Day</h1>
      <p>Here are my beautiful photos:</p>
      <div className="image">{photo}</div>
      <h3 className="title">{}</h3>
    </div>
  );
}

export default App;
