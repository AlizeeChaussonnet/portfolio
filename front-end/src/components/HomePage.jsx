import { useEffect, useState } from "react";
import axios from "axios";

import NavbarTop from "./NavbarTop";
import MainContainer from "./MainContainer";
import APropos from "./APropos";
import PortfolioSection from "./PorfolioSection";
import Recommandations from "./Recommandations";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage({ API_URL }) {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    fetchProjets();
  }, []);

  async function fetchProjets() {
    try {
      setProjets((await axios(`${API_URL}/projets`)).data);
    } catch (e) {
      if (e.response.status === 401) {
        setProjets();
      }
    }
  }

  return (
    <div>
      <NavbarTop />
      <MainContainer />
      <Recommandations />
      <APropos />
      <PortfolioSection projets={projets} />
      <Contact API_URL={API_URL} />
      <Footer />
    </div>
  );
}
