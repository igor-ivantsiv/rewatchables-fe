// general function to make get request and set state
export const fetchData = async(urlEndpoint, setter) => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL + urlEndpoint);

        if(!response.ok) {
            throw new Error(`HTTP error: ${response}`);
        }

        const data = await response.json();

        if (setter) {
            setter(data);
        }
        
        return data;
        
    } catch (error) {
        console.log("An error occured: ", error);
    }
}



