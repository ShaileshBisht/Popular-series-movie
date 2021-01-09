import React from "react";
import "./HomeCard.css";

function HomeCard({ title }) {
  return (
    <div className="homeCard">
      <div className="top">
        <div className="top_img">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="bottom">
        <p>Popular {title} </p>
      </div>
    </div>
  );
}

export default HomeCard;
