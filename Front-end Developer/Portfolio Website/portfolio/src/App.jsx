import NavbarContainer from "./components/Navbar/NavbarContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import HomeContainer from "./components/Home-Body/HomeContainer";
import "./App.css";
import "./components/colors.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <>
      <NavbarContainer />
      <HomeContainer />
      <FooterContainer></FooterContainer>
      <SpeedInsights />
    </>
  );
}

export default App;
