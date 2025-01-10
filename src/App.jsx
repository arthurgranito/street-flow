import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    // Cleanup do observador
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={currentUser ? <HomePage /> : <Navigate to="/landingPage" />}
        />
        <Route path="/landingPage" element={currentUser ? <Navigate to='/' /> : <LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
