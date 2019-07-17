import React from "react";

function Photos(props) {
  return (
    <div className="card">
      <h3 className="cardTitle">Title</h3>
      <img className="cardImage" src={props.url} />
      <p className="explanation">{props.explanation}</p>
    </div>
  );
}

export default Photos;
