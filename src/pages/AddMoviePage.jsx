import Form from "../components/Form";

const AddMoviePage = () => {

    const initialState = {
        title: "",
        genre: [],
        director: "",
        rating: 0.0,
        year: new Date(2024, 1),
        length: "",
        description: "",
        image: "",
        availableOn: [],
        trailer: "",
        recap: "",
    }

    return (
        <>
            <h1>Add Movie</h1>
            <Form action="POST" type="movies" initialState={initialState} />
        </>
    );
}

export default AddMoviePage;