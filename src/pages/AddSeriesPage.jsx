import Form from "../components/Form";

const AddSeriesPage = () => {

    const initialState = {
        title: "",
        genre: [],
        director: "",
        rating: 0.0,
        year: new Date(2024, 1),
        length: {
            episodes: 0,
            seasons: 0,
        },
        description: "",
        image: "",
        availableOn: [],
        trailer: "",
        recap: "",
    }

    return (
        <>
            <h1>Add Series</h1>
            <Form action="POST" type="series" initialState={initialState} />
        </>
    );
}

export default AddSeriesPage;