import React from "react";
import "./App.scss";
import PhotoGrid from "./PhotoGrid";

function App(entry) {


  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
      <p className="intro">For your viewing pleasure, today's photo:</p>
      <PhotoGrid className="photoGrid" />
    </div>
  );
}

export default App;
