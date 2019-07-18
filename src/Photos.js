import React from "react";
import { Header, Container, Card, Image } from "semantic-ui-react";

const Photos = props => (
  <Container>
    {props.mediaType === "image" ? (
      <Card className="bigCard" style={{ width: "700px", height: "800px" }}>
        <div className="card">
          <Header as="h2" className="cardTitle">
            {props.mediaTitle}
          </Header>
          <p className="date">{props.date}</p>
          <Image
            style={{ width: "600px", height: "350px" }}
            src={props.mediaUrl}
            alt="{props.mediaTitle}"
          ></Image>
          <p className="explanation">{props.explanation}</p>
        </div>
      </Card>
    ) : (
      <Card>
        <div className="card">
          <Header as="h2" className="cardTitle">
            {props.mediaTitle}
          </Header>
          <p className="date">{props.date}</p>
          <iframe
            title="videoPlayer"
            width="600"
            height="360"
            src={props.mediaUrl}
          ></iframe>
          <p className="explanation">{props.explanation}</p>
        </div>
      </Card>
    )}
  </Container>
);

export default Photos;
