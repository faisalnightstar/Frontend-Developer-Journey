import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavbarContainer from "./components/Navbar/NavbarContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import HomeContainer from "./components/Home-Body/HomeContainer";
import CarouselContainer from "./components/Projects/CarouselContainer";
import AboutContainer from "./components/AboutMe/AboutContainer";
import FormContainer from "./Contact-form/FormContainer";
import "./App.css";
import "./components/colors.css";

function App() {
  return (
    <Router>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/project" element={<CarouselContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/contact" element={<FormContainer />} />
        <Route path="*" element={<Navigate to="/" />} />{" "}
        {/* Redirect unknown routes */}
      </Routes>

      <FooterContainer />
    </Router>
  );
}

export default App;
