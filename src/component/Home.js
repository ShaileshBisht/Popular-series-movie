import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import HomeCard from "./HomeCard";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

function Home() {
  const history = useHistory();
  return (
    <div className="home">
      <div className="home_title">
        <Typography variant="h4">Popular Titles</Typography>
      </div>
      <div className="home_card">
        <Grid container spacing={0}>
          <Grid item xs={6} sm={3} md={2}>
            <div onClick={(e) => history.push("/Series")}>
              <HomeCard key="1" title="series" />
            </div>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <div onClick={(e) => history.push("/Movies")}>
              <HomeCard key="2" title="movies" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
