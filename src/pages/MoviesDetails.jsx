import { useParams } from "react-router-dom";
import { API_URL } from "../helpers/constants";
import { useEffect, useState } from "react";
import axios from "axios";

const MoviesDetails = () => {
const [movieDetails, setMovieDetails] = useState({})
const { moviesId } = useParams()

const fetchMovie = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies/${moviesId}`);
    setMovieDetails(response.data);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  fetchMovie()
}, [])

  return (
    <>
      <h1>{movieDetails.title}</h1>
    </>
  );
};

export default MoviesDetails;
