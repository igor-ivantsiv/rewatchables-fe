import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddRewatchable from "./pages/AddRewatchable";
import Suggestions from "./pages/Suggestions";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import SeriesDetails from "./pages/SeriesDetails";
import MoviesDetails from "./pages/MoviesDetails";
import EditSeries from "./pages/EditSeries";
import EditMovies from "./pages/EditMovies";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AddMoviePage from "./pages/AddMoviePage";
import AddSeriesPage from "./pages/AddSeriesPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/add" element={<AddRewatchable />} />
        <Route path="/add/movie" element={<AddMoviePage />} />
        <Route path="/add/series" element={<AddSeriesPage />} />
        
        <Route path="/suggestions" element={<Suggestions />} />

        <Route path="/series" element={<Series />} />
        <Route path="/series/:seriesId" element={<SeriesDetails />} />
        <Route path="/series/:id/edit" element={<EditPage type="series" />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MoviesDetails />} />
        <Route path="/movies/:id/edit" element={<EditPage type="movies" />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
