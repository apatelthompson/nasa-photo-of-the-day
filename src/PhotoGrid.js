import React,  { useState, useEffect } from 'react';
import axios from 'axios';
import Photos from "./Photos";

export default function PhotoGrid( {limit}) {
  const [card, setCard] = useState([]);
  const [type, setType] = useState("video")
console.log("card:", card)

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
  }, [type]);

console.log("type", type)

  return (
    <div className="photo-grid">
    <button onClick={() => setType("video")}>Video</button>
    <Photos vidUrl={card.url} explanation={card.explanation}/>
    </div>


  )
}
