import React from "react";
import { Header, Card } from "semantic-ui-react";

const Photos = props =>
  props.mediaType === "image" ? (
    <Card>
      <div className="card">
        <Header as="h3">{props.mediaTitle}</Header>
        <p className="date">{props.date}</p>
        <input type="date"></input>
        <img src={props.mediaUrl} alt="{props.mediaTitle}"></img>
        <p className="explanation">{props.explanation}</p>
      </div>
    </Card>
  ) : (
    <Card>
      <div className="card">
        <Header as="h3">{props.mediaTitle}</Header>
        <p className="date">{props.date}</p>
        <input type="date"></input>
        <iframe
          title="videoPlayer"
          width="600"
          height="360"
          src={props.mediaUrl}
        ></iframe>
        <p className="explanation">{props.explanation}</p>
      </div>
    </Card>
  );

export default Photos;
