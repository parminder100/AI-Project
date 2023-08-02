import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import FavouriteAiTool from "./Components/FavouriteAiTool/FavouriteAiTool";
import {Provider} from "react-redux";
import {Store, persistor} from "./Components/Store/Store";
import {PersistGate} from "redux-persist/integration/react";
import EcommerceAiTool from './Components/EcommerceAiTool/EcommerceAiTool';
import AiToolsCategories from "./Components/AiToolsCategories/AiToolsCategories";
import AiToolsInformation from "./Components/AiToolsInformation/AiToolsInformation";

function App() {
  return (
    <>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favourites" element={<FavouriteAiTool />} />
              <Route path="/ai-tools/ecommerce" element={<EcommerceAiTool />} />
              <Route path="/ai-tools" element={<AiToolsCategories />} />
              <Route path="/ai-tools-information/:toolId" element={<AiToolsInformation />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
