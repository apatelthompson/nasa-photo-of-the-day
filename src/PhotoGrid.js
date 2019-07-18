import React, { useState, useEffect } from "react";
import axios from "axios";
import Photos from "./Photos";

export default function PhotoGrid(props) {
  const [card, setCard] = useState("");
  // const [type, setType] = useState("video")

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=2JAcjwEBaCKS4enUmD0hveRXamLQCVauioOBJ6V2"
      )
      .then(response => {
        console.log(response.data);
        const media = response.data;
        setCard(media);
      })
      .catch(err =>
        console.log("The NASA API is currently down; please try again later.")
      );
  }, []);

  return (
    <div className="photo-grid">
      <Photos
        mediaUrl={card.hdurl}
        explanation={card.explanation}
        mediaTitle={card.title}
        mediaType={card.media_type}
        date={card.date}
      />
    </div>
  );
}
