import { AspectRatio, Button, Card, Center, Divider, Group, Image, NativeSelect, Paper, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchData } from "../helpers/globalFunction";

const Suggestions = () => {

  const [suggestion, setSuggestion] = useState({
    type: "movies",
    genre: "action",
  });

  const [rewatchables, setRewatchables] = useState([]);

  const [currentRewatchable, setCurrentRewatchable] = useState({});

  useEffect(() => {
    if (rewatchables.length > 0) {
      let options;
      // if no genre was provided, select random from entire list of items
      // else filter by genre
      suggestion.genre === "any" ?
      options = [...rewatchables] :
      options = rewatchables.filter((item) => 
        item.genre.includes(suggestion.genre))

      if (options.length > 0) {
        setCurrentRewatchable(options[Math.floor(Math.random() * options.length)]);
      }
    }
    
  }, [rewatchables]);


  // scroll to bottom when the card is displayed
  const  scrollToBottom = () => {
    setTimeout(() => {
      console.log("scroll")
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 500) 
  }


  const handleInput = (event) => {
    
    setSuggestion((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (suggestion.type === "either") {
      // if no type was selected, select one at random
      Math.random() > 0.5 ?
      fetchData(`/movies`, setRewatchables) :
      fetchData(`/series`, setRewatchables)
    }
    else {
      fetchData(`/${suggestion.type}`, setRewatchables)
    } 
    scrollToBottom();
  }


  const genreOptions = [
    "action",
    "adventure",
    "drama",
    "fantasy",
    "comedy",
    "thriller",
    "horror",
    "any",
  ];

  return <>
    <h1>Suggestions</h1>
    <Divider my="md" variant="dashed"/>
    <h2>Suggest a Rewatchable for me!</h2>
    <Paper p="xl" shadow="lg">
      <form onSubmit={handleSubmit}>
        <Center h={100} >
        <Group>
          <Text>I'm in the mood for </Text>
          <NativeSelect 
            size="md"
            radius="lg"
            aria-label="Type"
            data={["movies", "series", "either"]}
            name="type"
            value={suggestion.type}
            onChange={handleInput}
          />
          <Text>in the</Text>
          <NativeSelect
            size="md"
            radius="lg"
            aria-label="Genre"
            data={genreOptions} 
            name="genre"
            value={suggestion.genre}
            onChange={handleInput}
          />
          <Text>genre.</Text>
        </Group>
        </Center>
        <Center className="btn-div">
          <Button
            type="submit"
            variant="filled"
            color="rgba(194, 58, 58, 1)"
            size="md"
            radius="lg"
          >
            Generate
          </Button>
        </Center>
      </form>
    </Paper>
    <div className="suggestion-box">
      {
        currentRewatchable.type && 
        <Card
          shadow="sm"
          padding="xl"
          withBorder
          className="suggestion-card"
          h="fit-content"
          radius="md"
        >
          <Card.Section>
          <AspectRatio ratio={1080 / 720} maw={366} mx="auto">
            <Image 
              src={currentRewatchable.image} 
              height={350} 
              alt="Cover"
              radius="md" 
            />
          </AspectRatio>
            
          </Card.Section>

          <Text fw={500} size="lg" mt="md">
            {currentRewatchable.title}
          </Text>
          <Text size="sm" c="dimmed">
            {currentRewatchable.description}
          </Text>
          <Button 
            fullWidth 
            mt="md"
            variant="filled"
            color="rgba(194, 58, 58, 1)"
            radius="lg"
            onClick={handleSubmit}
          >
            Suggest another
          </Button>
        </Card>
      }
    </div>
    
  </>;
};

export default Suggestions;
