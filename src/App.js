import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import FavouriteAiTool from "./Components/FavouriteAiTool/FavouriteAiTool";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<FavouriteAiTool  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
