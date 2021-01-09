import React from "react";
import "./Cardd.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Cardd({ info }) {
  return (
    <div className="cardd">
      <Card className="card">
        <div className="card_img">
          <img
            className="movieCard_media"
            src={info.images["Poster Art"].url}
            alt=""
          />
        </div>
        <CardContent>
          <div className="card_conent">
            <p>{info.title}</p>
            <p>{info.releaseYear}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cardd;
