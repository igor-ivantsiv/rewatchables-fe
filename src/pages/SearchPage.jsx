import { Divider, Group, SimpleGrid, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import { useRefetchContext } from "../contexts/RefetchContext";
import { fetchData } from "../helpers/globalFunction";

// ! need to do something about 'not found' text rendering
const SearchPage = () => {
  const { shouldRefetch } = useRefetchContext();

  const [searchMovie, setSearchMovie] = useState("");
  const [searchSeries, setSearchSeries] = useState("");
  const [seriesResults, setSeriesResults] = useState([]);
  const [movieResults, setMovieResults] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);
  const [searching, setSearching] = useState(false);

  // fetch search query after typing stopped
  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeout = setTimeout(() => {
      if (searchMovie) {
        fetchData(`/movies?title_like=${searchMovie}`, setMovieResults);
      } else if (searchSeries) {
        fetchData(`/series?title_like=${searchSeries}`, setSeriesResults);
      }
    }, 500);

    setTimeoutId(newTimeout);

    return () => clearTimeout(newTimeout);
  }, [searchMovie, searchSeries, shouldRefetch]);


  // remove all results if both search bars empty
  useEffect(() => {

    if (searchMovie === "" && searchSeries === "") {
        setSearching(false);
    }

  }, [searchMovie, searchSeries ])


  // clear series search query and results, set movie search query
  const handleMovieInput = (event) => {
    setSearchSeries("");
    setSeriesResults([]);

    setSearching(true);

    setSearchMovie(event.target.value);
  };

  // clear movie search q and results, set series search q
  const handleSeriesInput = (event) => {
    setSearchMovie("");
    setMovieResults([]);

    setSearching(true);

    setSearchSeries(event.target.value);
  };

  return (
    <>
      <h1>Search</h1>
      <Group
        justify="center"
        gap={20}
        className="search-bar"
      >
      <TextInput
        size="md"
        radius="lg"
        label="Search Rewatchable movie"
        placeholder="Title of a movie..."
        value={searchMovie}
        name="searchMovie"
        onChange={handleMovieInput}
      />
      <TextInput
        size="md"
        radius="lg"
        label="Search Rewatchable series"
        placeholder="Title of a series..."
        value={searchSeries}
        name="searchSeries"
        onChange={handleSeriesInput}
      />
      </Group>
      <Divider my="md" variant="dashed" />
      {
        searching && 
      
      <div>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          {movieResults.length > 0 ? (
            movieResults.map((eachRewatchable) => (
              <ListItem
                key={eachRewatchable.id}
                rewatchable={eachRewatchable}
              />
            ))
          ) : seriesResults.length > 0 ? (
            seriesResults.map((eachRewatchable) => (
              <ListItem
                key={eachRewatchable.id}
                rewatchable={eachRewatchable}
              />
            ))
          ) : (
            searchMovie ?
            <p>No results for <span className="search-term">{searchMovie}</span></p> :
            <p>No results for <span className="search-term">{searchSeries}</span></p>
          )}
        </SimpleGrid>
      </div>
      }
    </>
  );
};

export default SearchPage;
