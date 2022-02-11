import PortfolioComponent from "./PortfolioComponent";

export default function PorfolioSection({ projets }) {
  return (
    <>
      <div>
        <div id="container-portfolio" className="h-[88px] mt-[-88px]"></div>
        <h2 className="titre-section">Portfolio</h2>
        <PortfolioComponent projets={projets} />
      </div>
    </>
  );
}
