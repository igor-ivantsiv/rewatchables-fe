import { Button, Center, Group, MultiSelect, NumberInput, Rating, SimpleGrid, Stack, Textarea, TextInput } from "@mantine/core";
import { YearPickerInput, TimeInput } from "@mantine/dates";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import { useState } from "react";

const Form = ( {action, type, initialState} ) => {

    const [formInput, setFormInput] = useState(initialState);

    const handleTextInput = (event) => {
        console.log(event.target.value)
        setFormInput((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }

    const handleMultiSelectInput = (name, change) => {
        console.log(`MultiSelect ${name}`, change);
        setFormInput((prevState) => ({
            ...prevState,
            [name]: change,
        }));
    };

    const handleYearPickerInput = (selectedYear) => {
        console.log('YearPicker Change:', selectedYear); // Log selected year
        const year = selectedYear.getFullYear();
        console.log("Year: ", year)
        console.log(typeof year)
    };

    const handleTimeChange = (event) => {
        console.log("Time change: ", event.target.value);
        console.log("Time name: ", event.target.name);
        console.log(typeof event.target.value);
    }

    const handleRatingChange = (event) => {
        console.log("Rating: ", event)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
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
        <form className="form">
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
                    onChange={handleTextInput}
                />
                <MultiSelect 
                    radius="lg"
                    label="Genre(s)"
                    data={genreOptions}
                    name="genre"
                    value={formInput.genre}
                    onChange={(change) => handleMultiSelectInput("genre", change)}
                    data-multiselect
                />
                <TextInput 
                    radius="lg"
                    label="Director"
                    name="director"
                    value={formInput.director}
                    onChange={handleTextInput}
                />
                <Group>
                    <div>Rating: </div>
                    <Rating 
                        fractions={4} 
                        name="rating"
                        value={formInput.rating}
                        onChange={handleRatingChange}
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
                    onChange={handleYearPickerInput}
                />
                {
                    type === "movie" ?
                    <TimeInput 
                        radius="lg"
                        label="Length"
                        description="Input the duration of your Rewatchable in hh:mm format"
                        leftSection={<IconClock />}
                        minTime="00:01"
                        maxTime="10:00"
                        name="length"
                        value={formInput.length}
                        onChange={handleTextInput}
                    /> :
                    <SimpleGrid cols={2}>
                        <NumberInput 
                            label="Seasons"
                            radius="lg"
                            min={1}
                            max={999}
                            name="length.seasons"
                            value={formInput.length.seasons}
                            onChange={handleTextInput}
                        />
                        <NumberInput 
                            label="Episodes"
                            radius="lg"
                            min={1}
                            max={9999}
                            name="length.episodes"
                            value={formInput.length.episodes}
                            onChange={handleTextInput}
                        />
                    </SimpleGrid>
                } 
                <Textarea 
                    label="Description"
                    description="Add a small description of your rewatchable"
                    radius="lg"
                    name="description"
                    value={formInput.description}
                    onChange={handleTextInput}
                />
                <TextInput 
                    radius="lg"
                    label="Cover image"
                    description="Add a url path to the cover image for your Rewatchable"
                    name="image"
                    value={formInput.image}
                    onChange={handleTextInput}
                />
                <MultiSelect 
                    radius="lg"
                    label="Available on"
                    data={availabilityOptions}
                    name="availableOn"
                    value={formInput.availableOn}
                    onChange={(change) => handleMultiSelectInput("availableOn", change)}
                />
                <TextInput 
                    radius="lg"
                    label="Trailer"
                    name="trailer"
                    value={formInput.trailer}
                    onChange={handleTextInput}
                />
                <TextInput 
                    radius="lg"
                    label="Recap"
                    name="recap"
                    value={formInput.recap}
                    onChange={handleTextInput}
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