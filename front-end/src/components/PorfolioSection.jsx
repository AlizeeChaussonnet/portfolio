import PortfolioComponent from "./PortfolioComponent";

export default function PorfolioSection({ projet }) {
  return (
    <div>
      <h2 className="titre-section px-24">Portfolio</h2>
      <PortfolioComponent projet={projet} />
      <PortfolioComponent projet={projet} />
      <PortfolioComponent projet={projet} />
    </div>
  );
}
