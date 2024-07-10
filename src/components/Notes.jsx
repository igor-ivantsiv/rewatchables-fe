import { Button, Input, Textarea } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { IconMessageForward, IconTrash } from "@tabler/icons-react";

const Notes = ({ rewatchableId, type }) => {
  const [newNote, setNewNote] = useState("");
  const [payload, setPayload] = useState({});

  const fetchRewatchable = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/${type}/${rewatchableId}`
      );
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

  const deleteNoteHandler = async (index) => {
    const updatedPayload = { ...payload };

    updatedPayload.notes.splice(index, 1); // Remove the note from the array
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4 className="notesHeader">New Note</h4>
        <Input
         required
        radius="lg"
          className="notesInput"
          size="lg"
          placeholder="Write your thoughts"
          value={newNote}
          onChange={(event) => setNewNote(event.currentTarget.value)}
        />
        <div className="notesFormButton">
          <Button
          className="button"
            type="submit"
            color="#f1580c"
            size="compact-lg"
            radius="lg"
            rightSection={<IconMessageForward size={20} />}
          >
            Save
          </Button>
        </div>
      </form>
      <ul style={{ padding: 0, marginTop: "-44px" }}>
        {payload.notes &&
          payload.notes.map((note, index) => (
            <>
              <li className="note" key={index}>{index + 1}. {note}
                <IconTrash size={14} color="grey" onClick={() => deleteNoteHandler(index)} id={index}/>
                </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default Notes;
