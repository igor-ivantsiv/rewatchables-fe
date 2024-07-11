import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import Suggestions from "./pages/Suggestions";
import Series from "./pages/Series";
import Movies from "./pages/Movies";

import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
