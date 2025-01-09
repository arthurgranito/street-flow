import NavApp from "./components/NavApp";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/inicio" element={<NavApp />} />
      </Routes>
    </>
  )
}

export default App;
