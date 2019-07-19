import React, { useState } from "react";
import "./App.scss";
import PhotoGrid from "./PhotoGrid";
import { Header, Card, Container as AppContainer } from "semantic-ui-react";

function App(entry) {
  const [apiDate, setApiDate] = useState("2019-07-18");

  function handleDateChange(event) {
    setApiDate(event.target.value);
  }

  return (
    <AppContainer className="App">
      <Header as="h1" className="main">
        NASA PHOTO OF THE DAY
      </Header>
      <p className="intro">
        For your viewing pleasure, please check out today's featured video or
        photo.
      </p>

      <div className="main-section">
        <PhotoGrid
          className="photoGrid"
          apiDate={apiDate}
          setApiDate={setApiDate}
        />

        <Card className="dateCard" style={{ width: "250px", height: "200px" }}>
          <Header as="h3">Select another date:</Header>
          <div className="datePicker">
            <input type="date" onChange={handleDateChange} />
          </div>
        </Card>
      </div>
    </AppContainer>
  );
}

export default App;
