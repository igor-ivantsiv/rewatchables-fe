import { useEffect, useState } from "react";

import ListItem from "../components/ListItem";
import axios from "axios";
import { API_URL } from "../helpers/constants";

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
    <ul>
      {rewatchables.map((eachRewatchable) => {
        return (
          <ListItem
            key={eachRewatchable.id}
            rewatchable={eachRewatchable}
          />
        );
      })}
    </ul>
  );
};

export default List;
