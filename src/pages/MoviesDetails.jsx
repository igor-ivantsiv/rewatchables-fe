import { API_URL } from "../helpers/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { AspectRatio, Group, Image, Pill, Rating } from "@mantine/core";

const MoviesDetails = ({ moviesId }) => {
  const [movieDetails, setMovieDetails] = useState({});

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${API_URL}/movies/${moviesId}`);
      setMovieDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div className="details">
        <AspectRatio ratio={1080 / 720} maw={533} mx="auto">
          <Image src={movieDetails.image} height={800} alt="Cover" />
        </AspectRatio>
        <div className="detailsContent">
          <h1>{movieDetails.title}</h1>
          <p>Director: {movieDetails.director}</p>
          <Group>
            <Rating
              fractions={4}
              name="rating"
              value={movieDetails.rating}
              size="xl"
              readOnly
            />
            <p>{movieDetails.rating} out of 5</p>
          </Group>
          {movieDetails.genre &&
            movieDetails.genre.map((eachGenre) => {
              return <Pill size="xl">{eachGenre}</Pill>;
            })}
          <p>{movieDetails.description}</p>
          <p>Release year: {movieDetails.year}</p>
          <p>Length: {movieDetails.length}</p>
          <p>Trailer: {movieDetails.length}</p>
          <p>Available on: </p>
          {movieDetails.availableOn &&
            movieDetails.availableOn.map((eachProvider) => (
              <>
                {eachProvider === "Netflix" && (
                  <img src="netflix-image-url" alt="Netflix" />
                )}
                {eachProvider === "Apple TV" && (
                  <img src="appletv-image-url" alt="Apple TV" />
                )}
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default MoviesDetails;
