import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Movies.css";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Cardd from "./Cardd";

function Movies() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
        )
        .then((data) => setAllData(data.data.entries));
    };
    fetchData();
  }, []);

  const newData = allData.filter((data) => data.programType === "movie");

  //get first 21 Movies
  const movies = newData?.slice(0, 21);

  // arrange Movies in alphabatic order
  const newMovies = movies.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="movies">
      <div className="movies_title">
        <Typography variant="h4">Popular Movies</Typography>
      </div>
      <Grid justify="space-evenly" container spacing={3}>
        {newMovies.map((item, index) => (
          <Grid item xs={6} sm={3} md={2}>
            <Cardd key={index} info={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Movies;
