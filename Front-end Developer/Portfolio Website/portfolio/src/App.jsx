import NavbarContainer from "./components/Navbar/NavbarContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import HomeContainer from "./components/Home-Body/HomeContainer";
import "./App.css";
import "./components/colors.css";

function App() {
  return (
    <>
      <NavbarContainer />
      <HomeContainer />
      <FooterContainer></FooterContainer>
    </>
  );
}

export default App;
