import PortfolioComponent from "./PortfolioComponent";

export default function PorfolioSection({ projets }) {
  return (
    <div>
      <h2 className="titre-section px-24">Portfolio</h2>
      <PortfolioComponent projets={projets} />
    </div>
  );
}
