import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Series.css";
import axios from "axios";

function Series() {
  const [allData, setAllData] = useState([]);

  console.log(allData);

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

  //   first json data for series
  const newData = allData.filter((data) => data.programType === "series");

  //get first 21 series
  const series = newData.slice(0, 21);

  // arrange series in alphabatic order
  const newSeries = series.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  console.log(newSeries);

  return (
    <div className="series">
      <div className="series_title">
        <Typography variant="h4">Popular Series</Typography>
      </div>
      <>{newSeries.map((item) => console.log(item.title))}</>
    </div>
  );
}

export default Series;
