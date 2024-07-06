import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddRewatchable from "./pages/AddRewatchable";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import SeriesDetails from "./pages/SeriesDetails";
import MoviesDetails from "./pages/MoviesDetails";
import EditSeries from "./pages/EditSeries";
import EditMovies from "./pages/EditMovies";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/add" element={<AddRewatchable />} />
          <Route path="/suggestions" element={<Suggestions />} />

          <Route path="/series" element={<Series />} />
          <Route path="/series/:seriesId" element={<SeriesDetails />} />
          <Route path="/series/:seriesId/edit" element={<EditSeries />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MoviesDetails />} />
          <Route path="/movies/:moviesId/edit" element={<EditMovies />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
