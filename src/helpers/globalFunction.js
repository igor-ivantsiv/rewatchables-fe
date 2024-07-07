import { API_URL } from "./constants";

// general function to make get request and set state
export const fetchData = async(urlEndpoint, setter) => {
    try {
        const response = await fetch(API_URL + urlEndpoint);

        if(!response.ok) {
            throw new Error(`HTTP error: ${response}`);
        }

        const data = await response.json();

        setter(data);
        
    } catch (error) {
        console.log("An error occured: ", error);
    }
}
