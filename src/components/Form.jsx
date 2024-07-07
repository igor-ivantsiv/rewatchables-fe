import { Button, Center, Group, MultiSelect, NumberInput, Rating, SimpleGrid, Stack, Textarea, TextInput } from "@mantine/core";
import { YearPickerInput, TimeInput } from "@mantine/dates";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import { useState } from "react";
import { API_URL } from "../helpers/constants";
import { useNavigate } from "react-router-dom";

const Form = ( {action, type, initialState, id} ) => {

    const [formInput, setFormInput] = useState(initialState);

    const navigate = useNavigate();

    
    // handle any type of input, 
    // use callback with name included for special input types
    const handleInput = (event, name) => {

        // if name was not provided, event has target property -> set name && value
        // else, the triggered event is already the value
        if (!name) {
            name = event.target.name
            event = event.target.value
        }

        // update state of form 
        setFormInput((prevState) => ({
            ...prevState,
            [name]: event,
        }));
    }


    // handle nested properties (episodes / seasons)
    const handleNestedInput = (event, name) => {

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

        action === "POST" ?
        url = `${API_URL}/${type}` :
        url = `${API_URL}/${type}/${id}`;

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

            navigate(`/${type}/${newData.id}`)

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
        <form className="form" onSubmit={handleSubmit}>
            <Stack
                align="stretch"
                justify="center"
                gap="md"
            >
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
                    type === "movies" ?
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
                    /> :
                    <SimpleGrid cols={2}>
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
                    </SimpleGrid>
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
                
            </Stack>
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
 
export default Form;