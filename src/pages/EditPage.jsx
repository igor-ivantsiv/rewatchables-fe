import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helpers/globalFunction";
import Form from "../components/Form";
import FormModal from "../components/FormModal";

// general page to edit both series and movies, specify type in props
const EditPage = ({ type }) => {

  const { id } = useParams();

  const [rewatchable, setRewatchable] = useState({});

  // have some values in initial form to prevent warnings on re rendering
  const initialState = {
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
  }

  // change length property in case of series
  if (type === "series") {
    initialState.length = {
      episodes: 0,
      seasons: 0,
    }
  }

  // set initial form with empty values to prevent warnings
  const [initialForm, setInitialForm] = useState(initialState);

  // fetch correct item
  useEffect(() => {
    fetchData(`/${type}/${id}`, setRewatchable);
  }, []);

  
  // set initial form data based on fetched item
  useEffect(() => {
    if (rewatchable) {
      
      // filter out id
      const { id, ...values} = rewatchable;

      // set year to Date object
      if (rewatchable.year) {
        setInitialForm({
          ...values,
          year: new Date(rewatchable.year, 1),
        });
      }
    }
  }, [rewatchable]) 

  return (
    <>
      <h1>Edit Rewatchable</h1>
      <FormModal action="PUT" type={type} initialState={initialForm} id={id}/>
    </>
  );
};

export default EditPage;
