import React from "react";
import "./Cardd.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

function Cardd() {
  return (
    <div className="cardd">
      <Card className="card">
        <CardMedia
          className="movieCard_media"
          image={`https://image.tmdb.org/t/p/original${info.poster_path}`}
          title={info.strDrink}
        />
        <CardContent>
          <div className="movieCard_content">
            <Box
              fontWeight="fontWeightBold"
              fontSize={18}
              textAlign="left"
              letterSpacing={2}
              m={1}
            >
              {info.title}
            </Box>
            <Box
              fontWeight="fontWeightBold"
              fontSize={15}
              fontFamily="Monospace"
              textAlign="right"
              m={1}
            >
              {info.release_date.slice(0, 4)}
            </Box>
          </div>
          <div className="movieCard_overview">
            <div className="movieCard_overview1">
              <Box
                fontWeight="fontWeightRegular"
                // fontFamily="Monospace"
                fontSize={18}
                textAlign="center"
                m={1}
              >
                {info.overview}
              </Box>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cardd;
