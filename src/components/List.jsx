import { useEffect, useState } from "react";

import ListItem from "../components/ListItem";
import axios from "axios";
import { API_URL } from "../helpers/constants";
import { SimpleGrid } from "@mantine/core";

const List = ({ type }) => {
  const [rewatchables, setRewatchables] = useState([]);
  const getRewatchables = async () => {
    try {
      const response = await axios.get(`${API_URL}/${type}`);
      setRewatchables(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRewatchables();
  }, []);

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={{ base: 10, sm: "xl" }}
      verticalSpacing={{ base: "md", sm: "xl" }}
    >
      {rewatchables.map((eachRewatchable) => {
        return (
          <ListItem key={eachRewatchable.id} rewatchable={eachRewatchable} />
        );
      })}
    </SimpleGrid>
  );
};

export default List;
