import Gallery from "../components/Gallery";

const HomePage = () => {
    
    return ( 
    <div className="homepage">
        <h1>Movies</h1>
        <Gallery type={"movies"}/>
        <h1>Series</h1>
        <Gallery type={"series"} />
    </div> 
    );
}
 
export default HomePage;