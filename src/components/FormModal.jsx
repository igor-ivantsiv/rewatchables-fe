import {
  Button,
  Center,
  Group,
  MultiSelect,
  NumberInput,
  Rating,
  SimpleGrid,
  Stack,
  Textarea,
  TextInput,
  Grid,
  NativeSelect,
} from "@mantine/core";
import { YearPickerInput, TimeInput } from "@mantine/dates";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../helpers/globalFunction";
import { useRefetchContext } from "../contexts/RefetchContext";

const FormModal = ({ action, id, type, closeModal, setShowContent }) => {
    const { setShouldRefetch } = useRefetchContext();

  // state to store fetched item in case of edit
  const [rewatchable, setRewatchable] = useState({});

  // set initial state
  const [formInput, setFormInput] = useState({
    type: "movies",
    title: "",
    genre: [],
    director: "",
    rating: 0.0,
    year: new Date(2024, 1),
    length: "",
    seasons: 0,
    episodes: 0,
    description: "",
    image: "",
    availableOn: [],
    trailer: "",
    recap: "",
    notes: [],
  });

  // fetch data if necessary
  useEffect(() => {
    // if form is rendered with id prop, fetch data
    const fetchRewatchable = async () => {
      try {
        // wait until data is fetched
        await fetchData(`/${type}/${id}`, setRewatchable);

        // if item has a type, meaning a valid item was found
        // set form input
        if (rewatchable.type) {
          // set form with correct length and Date (year) input
          setFormInput(() => ({
            ...rewatchable,
            year: new Date(rewatchable.year, 1),
          }));
        }
      } catch (error) {
        console.log("Error fetching form data: ", error);
      }
    };

    // fetch data and set in form if id is provided
    if (id) {
      fetchRewatchable();
    }
    // run effect whenever the type of rewatchable changes
    // to ensure form is populated with correct data in case of edit
  }, [rewatchable.type]);

  // if type is changed at any point, set length values to 0 / empty str
  useEffect(() => {
    formInput.type === "movies"
      ? setFormInput((prevState) => ({
          ...prevState,
          seasons: 0,
          episodes: 0,
        }))
      : setFormInput((prevState) => ({
          ...prevState,
          length: "",
        }));
  }, [formInput.type]);

  const navigate = useNavigate();

  // handle any type of input,
  // use callback with name included for special input types
  const handleInput = (event, name) => {
    // if name was not provided, event has target property -> set name && value
    // else, the triggered event is already the value
    if (!name) {
      name = event.target.name;
      event = event.target.value;
    }

    // update state of form
    setFormInput((prevState) => ({
      ...prevState,
      [name]: event,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // convert year Date object back to number
    const yearNum = formInput.year.getFullYear();

    // set empty values to null to keep consistency with db
    const lengthNull = formInput.length === "" ? null : formInput.length;
    const episodesNull = formInput.episodes === 0 ? null : formInput.episodes;
    const seasonsNull = formInput.seasons === 0 ? null : formInput.seasons;

    // data to be sent with request, converted year property
    const data = {
      ...formInput,
      year: yearNum,
      length: lengthNull,
      episodes: episodesNull,
      seasons: seasonsNull,
    };

    // get correct url for either post of put request
    let url;

    action === "POST"
      ? (url = `${import.meta.env.VITE_API_URL}/${formInput.type}`)
      : (url = `${import.meta.env.VITE_API_URL}/${formInput.type}/${id}`);

    try {
      const response = await fetch(url, {
        method: action,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response}`);
      }

      const newData = await response.json();

      // close form, navigate to list of type added/editted
      if (setShowContent) {
        setShowContent(true);
      } else {
        closeModal();
        navigate(`/${newData.type}`);
      }
      setShouldRefetch((prevState) => !prevState);
    } catch (error) {
      console.log("An error occured: ", error);
    }
  };

  const genreOptions = [
    "action",
    "adventure",
    "drama",
    "fantasy",
    "comedy",
    "thriller",
    "horror",
  ];

  const availabilityOptions = [
    "Netflix",
    "Prime Video",
    "Apple TV",
    "HBO Max",
    "Hulu",
    "Paramount+",
    "Roku",
    "Disney+",
    "Peacock",
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SimpleGrid cols={2}>
          <NativeSelect
            radius={"lg"}
            label="Type"
            name="type"
            data={["movies", "series"]}
            value={formInput.type}
            onChange={handleInput}
          />
          <TextInput
            radius="lg"
            label="Title"
            name="title"
            value={formInput.title}
            onChange={handleInput}
          />

          <MultiSelect
            radius="lg"
            label="Genre(s)"
            data={genreOptions}
            name="genre"
            value={formInput.genre}
            onChange={(event) => handleInput(event, "genre")}
            data-multiselect
          />

          <TextInput
            radius="lg"
            label="Director"
            name="director"
            value={formInput.director}
            onChange={handleInput}
          />

          <Group>
            <div>Rating: </div>
            <Rating
              fractions={4}
              name="rating"
              value={formInput.rating}
              onChange={(event) => handleInput(event, "rating")}
            />
          </Group>

          <YearPickerInput
            radius="lg"
            label="Year"
            description="Pick the year your Rewatchable was released"
            leftSection={<IconCalendar />}
            minDate={new Date(1889, 1)}
            maxDate={new Date(2025, 1)}
            name="year"
            value={formInput.year}
            onChange={(event) => handleInput(event, "year")}
          />

          {
            /* render correct input fields for either type of item */
            formInput.type === "movies" ? (
              <TimeInput
                radius="lg"
                label="Length"
                description="Input the duration of your Rewatchable in hh:mm format"
                leftSection={<IconClock />}
                minTime="00:01"
                maxTime="10:00"
                name="length"
                value={formInput.length}
                onChange={handleInput}
              />
            ) : (
              <>
                <NumberInput
                  label="Seasons"
                  radius="lg"
                  min={1}
                  max={999}
                  name="seasons"
                  value={formInput.seasons}
                  onChange={(event) => handleInput(event, "seasons")}
                />
                <NumberInput
                  label="Episodes"
                  radius="lg"
                  min={1}
                  max={9999}
                  name="episodes"
                  value={formInput.episodes}
                  onChange={(event) => handleInput(event, "episodes")}
                />
              </>
            )
          }

          <Textarea
            label="Description"
            description="Add a small description of your Rewatchable"
            radius="lg"
            name="description"
            value={formInput.description}
            onChange={handleInput}
          />

          <TextInput
            radius="lg"
            label="Cover image"
            description="Add a url path to the cover image for your Rewatchable"
            name="image"
            value={formInput.image}
            onChange={handleInput}
          />

          <MultiSelect
            radius="lg"
            label="Available on"
            data={availabilityOptions}
            name="availableOn"
            value={formInput.availableOn}
            onChange={(event) => handleInput(event, "availableOn")}
          />

          <TextInput
            radius="lg"
            label="Trailer"
            name="trailer"
            value={formInput.trailer}
            onChange={handleInput}
          />

          <TextInput
            radius="lg"
            label="Recap"
            name="recap"
            value={formInput.recap}
            onChange={handleInput}
          />
        </SimpleGrid>
        <Center h={90}>
          <Button
            type="submit"
            variant="filled"
            color="rgba(194, 58, 58, 1)"
            size="md"
            radius="lg"
          >
            Save Rewatchable
          </Button>
        </Center>
      </form>
    </>
  );
};

export default FormModal;
