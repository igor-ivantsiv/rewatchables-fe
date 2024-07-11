import { useEffect, useState } from "react";
import axios from "axios";
import { AspectRatio, Badge, Button, Image, Modal, Pill } from "@mantine/core";
import Netflix from "../assets/NetflixLogo.png";
import PrimeVideo from "../assets/PrimeVideoLogo.png";
import AppleTV from "../assets/AppleTVLogo.png";
import HboMax from "../assets/HboMaxLogo.png";
import Hulu from "../assets/HuluLogo.png";
import ParamountPlus from "../assets/ParamountPlusLogo.png";
import Roku from "../assets/RokuLogo.png";
import DisneyPlus from "../assets/DisneyPlusLogo.png";
import Peacock from "../assets/PeacockLogo.png";
import Notes from "./Notes";
import FormModal from "./FormModal";
import { useRefetchContext } from "../contexts/RefetchContext";
import {
  IconArrowBack,
  IconCalendarStats,
  IconChairDirector,
  IconClock,
  IconEdit,
  IconExternalLink,
  IconTrash,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import VideoModal from "./VideoModal";

const RewatchableDetails = ({ rewatchableId, type, closeModal }) => {
  const { setShouldRefetch } = useRefetchContext();
  const [openedWarn, { open, close }] = useDisclosure(false);

  const [rewatchableDetails, setRewatchableDetails] = useState({});
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    fetchRewatchable();
  }, [showContent]);

  const fetchRewatchable = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/${type}/${rewatchableId}`
      );
      setRewatchableDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRewatchable();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/${type}/${rewatchableId}`
      );
      console.log("DELETE request successful. Response:", response.data);
      closeModal();
      close();
      setShouldRefetch((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showContent ? (
        <div>
          <div className="details">
            <AspectRatio ratio={1080 / 720} maw={373} mx="auto">
              <Image
                className="detailsImage"
                src={rewatchableDetails.image}
                height={560}
                alt="Cover"
              />
            </AspectRatio>
            <div className="detailsContent">
              <div className="arrayDiv">
                {rewatchableDetails.genre &&
                  rewatchableDetails.genre.map((eachGenre, index) => {
                    return (
                      <Pill key={index} className="pill" size="xl">
                        {eachGenre}
                      </Pill>
                    );
                  })}
              </div>
              <div className="flexDivDetails">
                <div className="detailDiv directors">
                  <IconChairDirector size={18} />
                  <p>{rewatchableDetails.director}</p>
                </div>
                <div className="detailDiv">
                  <IconCalendarStats size={18} />
                  <p>{rewatchableDetails.year}</p>
                </div>
                {type === "movies" ? (
                  <div className="detailDiv">
                    <IconClock size={18} />
                    <p>{rewatchableDetails.length}</p>
                  </div>
                ) : null}
              </div>
              {type === "series" ? (
                <>
                  {rewatchableDetails.seasons && (
                    <div className="arrayDiv">
                      <Badge
                        size="lg"
                        variant="gradient"
                        gradient={{ from: "#f1580c", to: "orange", deg: 90 }}
                      >
                        Seasons: {rewatchableDetails.seasons}
                      </Badge>
                      <Badge
                        size="lg"
                        variant="gradient"
                        gradient={{ from: "#f1580c", to: "orange", deg: 90 }}
                      >
                        Episodes: {rewatchableDetails.episodes}
                      </Badge>
                    </div>
                  )}
                </>
              ) : null}
              <p>{rewatchableDetails.description}</p>
              <div className="spaceBetweenDiv">
                <div className="arrayDiv">
                  {rewatchableDetails.availableOn &&
                    rewatchableDetails.availableOn.map(
                      (eachProvider, index) => (
                        <div key={`provider ${index}`}>
                          {eachProvider === "Netflix" ? (
                            <img
                              key={`provider ${index}`}
                              className="providerLogo"
                              src={Netflix}
                              alt="Netflix"
                            />
                          ) : eachProvider === "Prime Video" ? (
                            <img
                              key={`provider ${index}`}
                              className="providerLogo"
                              src={PrimeVideo}
                              alt="Prime Video"
                            />
                          ) : eachProvider === "Apple TV" ? (
                            <img
                              key={`provider ${index}`}
                              className="providerLogo"
                              src={AppleTV}
                              alt="Apple TV"
                            />
                          ) : eachProvider === "HBO Max" ? (
                            <img
                              key={`provider ${index}`}
                              className="providerLogo"
                              src={HboMax}
                              alt="HBO Max"
                            />
                          ) : eachProvider === "Hulu" ? (
                            <img
                              key={`provider ${index}`}
                              className="providerLogo"
                              src={Hulu}
                              alt="Hulu"
                            />
                          ) : eachProvider === "Paramount+" ? (
                            <img
                              key={`provider ${index}`}
                              className="providerLogo"
                              src={ParamountPlus}
                              alt="Paramount Plus"
                            />
                          ) : eachProvider === "Roku" ? (
                            <img
                              key={`provider ${index}`}
                              className="providerLogo"
                              src={Roku}
                              alt="Roku"
                            />
                          ) : eachProvider === "Disney+" ? (
                            <img
                              key={`provider ${index}`}
                              className="providerLogo"
                              src={DisneyPlus}
                              alt="Disney Plus"
                            />
                          ) : eachProvider === "Peacock" ? (
                            <img
                              key={`provider ${index}`}
                              className="providerLogo"
                              src={Peacock}
                              alt="Peacock"
                            />
                          ) : null}
                        </div>
                      )
                    )}
                </div>
                <p>
                  <VideoModal videoUrl={rewatchableDetails.trailer}/>
                </p>
              </div>
              <div className="notesButtonsDiv">
                <Button
                  color="#f1580c"
                  size="compact-md"
                  radius="lg"
                  rightSection={<IconEdit size={20} />}
                  onClick={() => setShowContent(false)}
                >
                  Edit
                </Button>
                <Button
                  color="red"
                  size="compact-md"
                  radius="lg"
                  rightSection={<IconTrash size={20} />}
                  onClick={open}
                >
                  Delete
                </Button>
              </div>
              <Notes
                type={type}
                rewatchableId={rewatchableId}
                fetchRewatchable={fetchRewatchable}
              />
            </div>
            <Modal opened={openedWarn} onClose={close} title = ""withCloseButton={false}>
              <h3>Are you sure you want to delete this rewatchable?</h3>
              <div className="warnButtons">
              <Button
                color="#f1580c"
                size="compact-md"
                radius="lg"
                rightSection={<IconArrowBack size={20} />}
                onClick={close}
              >
                Back
              </Button>
              <Button
                color="red"
                size="compact-md"
                radius="lg"
                rightSection={<IconTrash size={20} />}
                onClick={() => handleDelete()}
              >
                Delete
              </Button>
              </div>
            </Modal>
          </div>
        </div>
      ) : (
        <>
          <FormModal
            action="PUT"
            id={rewatchableId}
            type={type}
            setShowContent={setShowContent}
          />
        </>
      )}
    </>
  );
};

export default RewatchableDetails;
