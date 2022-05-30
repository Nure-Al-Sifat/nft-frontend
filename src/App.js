import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Charts from "./pages/Charts/charts";
import Favorites from "./pages/favorite/Favorites";
import Playlists from "./pages/playlist/Playlist";
import Collections from "./pages/collections/Collections";
import Settings from "./pages/settings/Setting";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Sidebar> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Charts" element={<Charts />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        {/* </Sidebar> */}
      </BrowserRouter>
    </>
  );
}

export default App;
