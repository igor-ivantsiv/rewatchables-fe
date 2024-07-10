import { Button, Textarea } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { IconTrash } from "@tabler/icons-react";

const Notes = ({ rewatchableId, type }) => {
  const [newNote, setNewNote] = useState("");
  const [payload, setPayload] = useState({});

  const fetchRewatchable = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/${type}/${rewatchableId}`);
      setPayload(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRewatchable();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedPayload = { ...payload }; // Create a shallow copy of the payload
    updatedPayload.notes = updatedPayload.notes || [];
    updatedPayload.notes.push(newNote);

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/${type}/${rewatchableId}`,
        updatedPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("PUT request successful. Response:", response.data);
      // reset newNote and update the UI to reflect the changes
      setNewNote("");
      setPayload(updatedPayload); // Update the local state with the modified payload
    } catch (error) {
      console.error("Error during PUT request:", error);
    }
  };

   const deleteNoteHandler = async(index) => {
    const updatedPayload = { ...payload };

      updatedPayload.notes.splice(index, 1); // Remove the note from the array
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_API_URLL}/${type}/${rewatchableId}`,
          updatedPayload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("PUT request successful. Response:", response.data);
        // reset newNote and update the UI to reflect the changes
        setNewNote("");
        setPayload(updatedPayload); // Update the local state with the modified payload
      } catch (error) {
        console.error("Error during PUT request:", error);
      }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Textarea
          size="xl"
          label="New note"
          placeholder="Input placeholder"
          value={newNote}
          onChange={(event) => setNewNote(event.currentTarget.value)}
        />
        <Button type="submit" variant="filled">
          Submit
        </Button>
      </form>
      <ul>
        {payload.notes &&
          payload.notes.map((note, index) => (
            <>
              <li key={index}>{note}</li>
              <Button variant="filled" color="red" onClick={() => deleteNoteHandler(index)} id={index}>
                <IconTrash />
              </Button>
            </>
          ))}
      </ul>
    </>
  );
};

export default Notes;
