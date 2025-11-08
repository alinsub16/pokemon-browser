import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
