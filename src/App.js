import "./sass/styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Charts from "./pages/charts/charts";
import Favorites from "./pages/favorite/Favorites";
import Playlists from "./pages/playlist/Playlist";
import Collections from "./pages/collections/Collections";
import Settings from "./pages/settings/Setting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Charts" element={<Charts />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
