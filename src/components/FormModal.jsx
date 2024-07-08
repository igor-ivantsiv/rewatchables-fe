import { Button, Center, Group, MultiSelect, NumberInput, Rating, SimpleGrid, Stack, Textarea, TextInput, Grid, NativeSelect } from "@mantine/core";
import { YearPickerInput, TimeInput } from "@mantine/dates";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { API_URL } from "../helpers/constants";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../helpers/globalFunction";

const FormModal = ({ action, id, type }) => {

    // fetch item by id
    const [rewatchable, setRewatchable] = useState({});

    // set initial state
    const [formInput, setFormInput] = useState({
        type: "movie",
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

    // fetch data if necessary
    useEffect(() => {

        // if form is rendered with id prop, fetch data
        const fetchRewatchable = async() => {
            await fetchData(`/${type}/${id}`, setRewatchable);

            console.log("rewatchable: ", rewatchable);

            if (rewatchable.type) {
                const lengthObj = rewatchable.length;

                setFormInput(() => ({
                    ...rewatchable,
                    length: lengthObj,
                    year: new Date(rewatchable.year, 1),
                }));
            }
        }

        // fetch data and set in form if id is provided
        if (id) {
            console.log("id: ", id)
            fetchRewatchable();
        }
    }, [rewatchable.type]);

    

    const navigate = useNavigate();

    /*
    // ensure latest 'initialState' is used for input fields
    useEffect(() => {
        if (initialState) {
            setFormInput(initialState)
        } 
    }, []);*/

    
    // handle any type of input, 
    // use callback with name included for special input types
    const handleInput = (event, name) => {

        // if name was not provided, event has target property -> set name && value
        // else, the triggered event is already the value
        if (!name) {
            name = event.target.name
            event = event.target.value
        }

        console.log(`name: ${name} value: ${event}`)

        // update state of form 
        setFormInput((prevState) => ({
            ...prevState,
            [name]: event,
        }));
    }


    // handle nested properties (episodes / seasons)
    const handleNestedInput = (event, name) => {

        console.log(`name: ${name} value: ${event}`)

        setFormInput((prevState) => ({
            ...prevState,
            length: {
                ...prevState.length,
                [name]: event,
            }
        }));
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        // convert year Date object back to number
        const yearNum = formInput.year.getFullYear();

        // data to be sent with request, converted year property
        const data = {
            ...formInput,
            year: yearNum,
        }

        // get correct url for either post of put request
        let url;
        let urlEndpoint;

        // add an 's' to type to get correct url (in case of movie)
        formInput.type === "movie" ?
        urlEndpoint = `${formInput.type}s` :
        urlEndpoint = `${formInput.type}`;

        action === "POST" ?
        url = `${API_URL}/${urlEndpoint}` :
        url = `${API_URL}/${urlEndpoint}/${id}`;

        try {

            const response = await fetch(url, {
                method: action,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response}`);
            }

            //console.log("Succes response: ", await response.json());

            const newData = await response.json()

            navigate(`/${urlEndpoint}/${newData.id}`)

        } catch (error) {
            console.log("An error occured: ", error);
        } 
    }

    const genreOptions = [
        "action",
        "adventure",
        "drama",
        "fantasy",
        "comedy",
        "thriller",
        "horror"
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
        "Peacock"
    ];

    return ( 
    <>
        <form onSubmit={handleSubmit}>
            <SimpleGrid
                cols={2} 
            >
                <NativeSelect 
                    radius={"lg"}
                    label="Type"
                    name="type"
                    data={["movie", "series"]}
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
                    formInput.type === "movie" ?
                    
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
                    :
                    <>
                        <NumberInput 
                            label="Seasons"
                            radius="lg"
                            min={1}
                            max={999}
                            name="seasons"
                            value={formInput.length.seasons}
                            onChange={(event) => handleNestedInput(event, "seasons")}
                        />
                        <NumberInput 
                            label="Episodes"
                            radius="lg"
                            min={1}
                            max={9999}
                            name="episodes"
                            value={formInput.length.episodes}
                            onChange={(event) => handleNestedInput(event, "episodes")}
                        />
                    </>
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
                    Add Rewatchable
                </Button>
            </Center>
        </form>
    </> 
    );
}
 
export default FormModal;