import NavApp from "./components/NavApp";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/inicio" element={<NavApp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App;
