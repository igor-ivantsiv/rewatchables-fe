import {
  AspectRatio,
  Button,
  Card,
  Center,
  Divider,
  Group,
  Image,
  NativeSelect,
  Paper,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchData } from "../helpers/globalFunction";
import { useDisclosure } from "@mantine/hooks";

const Suggestions = () => {
  // lock the button for a second
  // have loading image thing
  // condition if nothing found
  // initial state not showing anything

  const [suggestion, setSuggestion] = useState({
    type: "movies",
    genre: "action",
  });

  const [rewatchables, setRewatchables] = useState([]);

  const [searching, setSearching] = useState(false);

  //const [loading, {toggle}] = useDisclosure();

  const [loading, setLoading] = useState(false);

  const [resultFound, setResultFound] = useState(false);

  const [currentRewatchable, setCurrentRewatchable] = useState({});

  useEffect(() => {
    console.log("suggestion changed")
    setCurrentRewatchable((prevState) => ({
      ...prevState,
      id: null,
    }))
  }, [suggestion])


  useEffect(() => {

    const selectSuggestion = (previousId) => {
      if (rewatchables.length > 0) {
        let options;
        // if no genre was provided, select random from entire list of items
        // else filter by genre
        suggestion.genre === "any"
          ? (options = [...rewatchables])
          : (options = rewatchables.filter((item) =>
              item.genre.includes(suggestion.genre)
            ));
  
        console.log("options: ", options.length)
        // ensure a different option is chosen
        if (options.length > 0) {
          // if id is provided, and other options available ->
          // select different item
          if (previousId && options.length > 1) {
            let randInt;
            do {
              randInt = Math.floor(Math.random() * options.length);
              console.log("chosen item: ", options[randInt]);
            }
            while (options[randInt].id === previousId);
  
            setCurrentRewatchable(
              options[randInt]
            );
          }
          else if (previousId && options.length === 1) {
            console.log("only 1 option")
          }
          else {
            setCurrentRewatchable(
              options[Math.floor(Math.random() * options.length)]
            );
          }
          setResultFound(true);
        }
        else {
          setResultFound(false);
        }
      }
    }

    selectSuggestion(currentRewatchable.id)

  }, [rewatchables]);


  useEffect(() => {
    const runLoadingState = () => {
      console.log("toggle on")
      setLoading(true);
      const debounceId = setTimeout(() => {
        setLoading(false);
        console.log("toggle off")
      }, 1000);

      return () => clearTimeout(debounceId);
    }

    runLoadingState();
  }, [currentRewatchable])


  const updateSearch = () => {
    setSearching((prevState) => (!prevState));
  }

  // scroll to bottom when the card is displayed
  const scrollToBottom = () => {

    const scrollTimeOut = setTimeout(() => {
      console.log("scroll");
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 500);
  };

  const handleInput = (event) => {
    setSuggestion((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event, previousId) => {
    event.preventDefault();
    console.log("click");
    setSearching(true)

    if (suggestion.type === "either") {
      // if no type was selected, select one at random
      Math.random() > 0.5
        ? fetchData(`/movies`, setRewatchables)
        : fetchData(`/series`, setRewatchables);
    } else {
      fetchData(`/${suggestion.type}`, setRewatchables);
    }
    scrollToBottom();
  };

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

  return (
    <>
      <h1>Suggestions</h1>
      <Divider my="md" variant="dashed" />
      <h2>Suggest a Rewatchable for me!</h2>
      <Paper p="xl" shadow="lg">
        <form onSubmit={handleSubmit}>
          <Center h={100}>
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
              loading={loading}
              loaderProps={{ type: "bars"}}
            >
              Generate
            </Button>
          </Center>
        </form>
      </Paper>
      {searching && 
        <div className="suggestion-box">
          {resultFound ? 
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
                onClick={(event) => (handleSubmit(event, currentRewatchable.id))}
                loading={loading}
                loaderProps={{ type: "bars"}}
              >
                Suggest another
              </Button>
            </Card>
          : <p>No results</p>
          }
        </div> 
        }
    </>
  );
};

export default Suggestions;
