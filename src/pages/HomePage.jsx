import Gallery from "../components/Gallery";

const HomePage = () => {
    
    return ( 
    <div className="homepage">
        <h1>Home Page</h1>
        <Gallery type={"movies"}/>
        <Gallery type={"series"} />
    </div> 
    );
}
 
export default HomePage;