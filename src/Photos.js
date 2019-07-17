import React from "react";

function Photos({vidUrl}, {explanation}) {
  return (
    <div className="card">
      <h3 className="cardTitle">Title</h3>
      <iframe src={vidUrl}  />
      <p className="explanation">{explanation}</p>
    </div>
  );
}

export default Photos;
