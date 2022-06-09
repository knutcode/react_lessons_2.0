import { Routes, Route, Link } from "react-router-dom";
import AboutUsPage from "./landingPage/AboutUsPage";
import CatFactPage from "./landingPage/CatFactsPage";
import PantePersonSelectorPage from "./landingPage/PantePersonSelectorPage";
import ReactLogo from "../components/ReactLogo";
import Header from "./landingPage/landingPageFiles/Header";
import { LayerWrapper } from "./landingPage/landingPageFiles/styles";
import Background from "../components/BackgroundParticles";
import BackgroundParticles from "../components/BackgroundParticles";

const LandingPage = () => {
  return (
    <>
      <BackgroundParticles />
      <Header />
      <Routes>
        <Route path="*" element={<ReactLogo />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/cat-facts" element={<CatFactPage />} />
        <Route
          path="/pante-person-selector"
          element={<PantePersonSelectorPage />}
        />
      </Routes>
    </>
  );
};

export default LandingPage;
