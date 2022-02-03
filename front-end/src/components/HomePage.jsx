import { useEffect, useState } from "react";
import axios from "axios";

import NavbarTop from "./NavbarTop";
import MainContainer from "./MainContainer";
import APropos from "./APropos";
import PortfolioSection from "./PorfolioSection";
import Recommandations from "./Recommandations";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  const API_URL = "http://localhost:8000/api";

  const [projet, setProjet] = useState([]);

  useEffect(() => {
    fetchProjet();
  }, []);

  async function fetchProjet() {
    try {
      setProjet((await axios("http://localhost:8000/api/projets")).data[0]);
    } catch (e) {
      if (e.response.status === 401) {
        setProjet();
      }
    }
  }

  return (
    <div>
      <NavbarTop />
      <MainContainer />
      <Recommandations />
      <APropos />
      <PortfolioSection projet={projet} />
      <Contact />
      <Footer />
    </div>
  );
}
