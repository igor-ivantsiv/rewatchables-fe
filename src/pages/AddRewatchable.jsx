import { Link } from "react-router-dom";
import Form from "../components/Form";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const AddRewatchable = () => {
  return (
    <>
      <h1>Add a Rewatchable</h1>
      <Button 
        type="button"
        component={Link}
        to="/add/movie"
        variant="filled" 
        color="rgba(194, 58, 58, 1)" 
        size="xl" 
        radius="xl"
        rightSection={<IconArrowRight size={24} />}
      >
        Movie
      </Button>
      <Button 
        type="button"
        component={Link}
        to="/add/series"
        variant="filled" 
        color="rgba(194, 58, 58, 1)" 
        size="xl" 
        radius="xl"
        rightSection={<IconArrowRight size={24} />}
      >
        Series
      </Button>
      
    </>
  );
};

export default AddRewatchable;
