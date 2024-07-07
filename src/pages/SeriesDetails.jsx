import { fetchData } from "../helpers/globalFunction";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SeriesDetails = () => {

  const [seriesDetails, setSeriesDetails] = useState({});

  const { seriesId } = useParams();

  useEffect(() => {
    fetchData(`/series/${seriesId}`, setSeriesDetails);
  }, []);

  return (
  <>
    <h1>{seriesDetails.title}</h1>
  </>
  );
};

export default SeriesDetails;
