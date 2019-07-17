import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Photos from "./Photos";

function App(entry) {
  const [card, setCard] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=2JAcjwEBaCKS4enUmD0hveRXamLQCVauioOBJ6V2"
      )
      .then(response => {
        console.log(response.data);
        setCard(response.data.message);
      })
      .catch(err =>
        console.log("The NASA API is currently down; please try again later.")
      );
  }, []);

  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
      <p className="intro">For your viewing pleasure, today's photo:</p>
      <div>{card}</div>
      <Photos className="photos" data={card} />
    </div>
  );
}

export default App;
