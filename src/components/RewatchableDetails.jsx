import { API_URL } from "../helpers/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { AspectRatio, Group, Image, Pill, Rating } from "@mantine/core";
import Netflix from "../assets/NetflixLogo.png";
import PrimeVideo from "../assets/PrimeVideoLogo.png";
import AppleTV from "../assets/AppleTVLogo.png";
import HboMax from "../assets/HboMaxLogo.png";
import Hulu from "../assets/HuluLogo.png";
import ParamountPlus from "../assets/ParamountPlusLogo.png";
import Roku from "../assets/RokuLogo.png";
import DisneyPlus from "../assets/DisneyPlusLogo.png";
import Peacock from "../assets/PeacockLogo.png";

const RewatchableDetails = ({ rewatchableId, type }) => {
  const [rewatchableDetails, setRewatchableDetails] = useState({});

  const fetchRewatchable = async () => {
    try {
      const response = await axios.get(`${API_URL}/${type}/${rewatchableId}`);
      setRewatchableDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRewatchable();
  }, []);

  return (
    <>
      <div className="details">
        <AspectRatio ratio={1080 / 720} maw={533} mx="auto">
          <Image src={rewatchableDetails.image} height={800} alt="Cover" />
        </AspectRatio>
        <div className="detailsContent">
          <h1>{rewatchableDetails.title}</h1>
          <p>Director: {rewatchableDetails.director}</p>
          <Group>
            <Rating
              fractions={4}
              name="rating"
              value={rewatchableDetails.rating}
              size="xl"
              readOnly
            />
            <p>{rewatchableDetails.rating} out of 5</p>
          </Group>
          {rewatchableDetails.genre &&
            rewatchableDetails.genre.map((eachGenre) => {
              return <Pill size="xl">{eachGenre}</Pill>;
            })}
          <p>{rewatchableDetails.description}</p>
          <p>Release year: {rewatchableDetails.year}</p>
          {type === "movie" ? (
    <p>Length: {rewatchableDetails.length}</p>
) : (
    <>
        {rewatchableDetails.length && (
            <>
                <p>Seasons: {rewatchableDetails.seasons}</p>
                <p>Episodes: {rewatchableDetails.episodes}</p>
            </>
        )}
    </>
)}
          <p>Trailer: {rewatchableDetails.length}</p>
          <p>Available on: </p>
          {rewatchableDetails.availableOn &&
            rewatchableDetails.availableOn.map((eachProvider) => (
              <>
                {eachProvider === "Netflix" ? (
                  <img className="providerLogo" src={Netflix} alt="Netflix" />
                ) : eachProvider === "Prime Video" ? (
                  <img
                    className="providerLogo"
                    src={PrimeVideo}
                    alt="Prime Video"
                  />
                ) : eachProvider === "Apple TV" ? (
                  <img className="providerLogo" src={AppleTV} alt="Apple TV" />
                ) : eachProvider === "HBO Max" ? (
                  <img className="providerLogo" src={HboMax} alt="HBO Max" />
                ) : eachProvider === "Hulu" ? (
                  <img className="providerLogo" src={Hulu} alt="Hulu" />
                ) : eachProvider === "Paramount+" ? (
                  <img
                    className="providerLogo"
                    src={ParamountPlus}
                    alt="Paramount Plus"
                  />
                ) : eachProvider === "Roku" ? (
                  <img className="providerLogo" src={Roku} alt="Roku" />
                ) : eachProvider === "Disney+" ? (
                  <img
                    className="providerLogo"
                    src={DisneyPlus}
                    alt="Disney Plus"
                  />
                ) : eachProvider === "Peacock" ? (
                  <img className="providerLogo" src={Peacock} alt="Peacock" />
                ) : null}
              </>
            ))}
          <p>Trailer: {rewatchableDetails.trailer}</p>
        </div>
      </div>
    </>
  );
};

export default RewatchableDetails;
