import { Carousel } from "@mantine/carousel";
import { useEffect, useState } from "react";
import { fetchData } from "../helpers/globalFunction";
import { AspectRatio, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import RewatchableDetails from "./RewatchableDetails";
import { useRefetchContext } from "../contexts/RefetchContext";

const Gallery = ({ type }) => {
  const { shouldRefetch } = useRefetchContext();


  // states for all items, specific item
  const [rewatchables, setRewatchables] = useState([{}])

  const [currentItem, setCurrentItem] = useState({});

  // fetch all data on mount
  useEffect(() => {
    fetchData(`/${type}`, setRewatchables);
  }, []);

  // states for modal
  const [opened, { open, close }] = useDisclosure(false);


  // on click, get all details of item clicked to pass to details comp
  const getDetails = (id, type, title) => {
    setCurrentItem(() => ({
      id: id,
      type: type,
      title: title,
    }))

    // open modal
    open()
  }

  useEffect(() => {
    fetchData(`/${type}`, setRewatchables);
  }, [shouldRefetch]);


  return (
    <>
      <div className="carousel">
        <Carousel slideSize="50%" height={400} slideGap="lg" loop>

          {
            rewatchables.map(item => (
          
              <Carousel.Slide key={item.id}>
                
                <img
                  className="carousel-img"
                  src={item.image}
                  alt={item.title}
                  onClick={() => getDetails(item.id, item.type, item.title)}
                />
              </Carousel.Slide>
              
            ))
          }
          
        </Carousel>
      </div>

      
      <Modal
        size="90%"
        opened={opened}
        onClose={close}
        centered
        title={currentItem.title}
        classNames={{
          title: "customTitle",
        }}
      >
        <RewatchableDetails rewatchableId={currentItem.id} type={currentItem.type} close={close}/>
      </Modal>
    </>
  );
};

export default Gallery;
