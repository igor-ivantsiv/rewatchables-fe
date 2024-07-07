import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helpers/globalFunction";
import Form from "../components/Form";

//! no longer necessary
const EditMovies = () => {

  const { moviesId } = useParams();

  const [movie, setMovie] = useState({});

  // have some values in initial form to prevent warnings on re rendering
  const [initialForm, setInitialForm] = useState({
    title: "",
    genre: [],
    director: "",
    rating: 0.0,
    year: new Date(2024, 1),
    length: "",
    description: "",
    image: "",
    availableOn: [],
    trailer: "",
    recap: "",
  });

  // fetch correct movie
  useEffect(() => {
    fetchData(`/movies/${moviesId}`, setMovie);
  }, []);

  
  // set initial form data based on fetched movie
  useEffect(() => {
    if (movie) {

      // filter out id
      const { id, ...values} = movie;

      // set year to Date object
      if (movie.year) {
        setInitialForm({
          ...values,
          year: new Date(movie.year, 1),
        });
      }
    }
  }, [movie]) 

  return (
    <>
      <h1>Edit</h1>
      <Form action="PUT" type="movies" initialState={initialForm} id={movie.id}/>
    </>
  );
};

export default EditMovies;
