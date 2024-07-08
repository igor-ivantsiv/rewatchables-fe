import { Carousel } from "@mantine/carousel";
import { useEffect, useState } from "react";
import { fetchData } from "../helpers/globalFunction";
import { AspectRatio } from "@mantine/core";

const Gallery = ({ type }) => {

  const [rewatchables, setRewatchables] = useState([{}])

  useEffect(() => {
    fetchData(`/${type}`, setRewatchables);
  }, [])

  return (
    <>
      <div className="carousel">
        <Carousel slideSize="50%" height={400} slideGap="lg" loop>

          {
            rewatchables.map(item => (
              
              
              <Carousel.Slide>
                {console.log("key: ", item.id )}
                <img
                  className="carousel-img"
                  src={item.image}
                  alt={item.title}
                />
              </Carousel.Slide>
              
            ))
          }
          
        </Carousel>
      </div>
    </>
  );
};

export default Gallery;
