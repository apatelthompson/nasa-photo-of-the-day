import React from "react";
import "./App.scss";
import PhotoGrid from "./PhotoGrid";
import { Header, Card } from "semantic-ui-react";

function App(entry) {
  return (
    <div className="App">
      <Header as="h1" className="main">
        NASA PHOTO OF THE DAY
      </Header>
      <p className="intro">
        For your viewing pleasure, please check out today's featured video or
        photo:
      </p>

      <PhotoGrid className="photoGrid" />

      <Card className="dateCard" style={{ width: "250px", height: "150px" }}>
        Select another date:
        <div className="datePicker">
          <input type="date" />
        </div>
      </Card>
    </div>
  );
}

export default App;
