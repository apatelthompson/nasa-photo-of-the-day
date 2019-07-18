import React from "react";
// import "./App.scss";
import PhotoGrid from "./PhotoGrid";
import { Header } from "semantic-ui-react";

function App(entry) {
  return (
    <div className="App">
      <Header as="h1">NASA PHOTO OF THE DAY</Header>
      <p className="intro">
        For your viewing pleasure, please check out today's featured video or
        photo:
      </p>
      <PhotoGrid className="photoGrid" />
    </div>
  );
}

export default App;
