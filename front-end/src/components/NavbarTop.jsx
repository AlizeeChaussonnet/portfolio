import { HomeIcon } from "@heroicons/react/outline";

export default function NavbarTop() {
  function scrollToPortfolio() {
    document
      .querySelector("#container-portfolio")
      .scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAPropos() {
    document
      .querySelector("#container-a-propos")
      .scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact() {
    document
      .querySelector("#container-contact")
      .scrollIntoView({ behavior: "smooth" });
  }

  function scrollToRecommandation() {
    document
      .querySelector("#container-recommandation")
      .scrollIntoView({ behavior: "smooth" });
  }
  function scrollToHome() {
    document
      .querySelector("#container-home")
      .scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex justify-between py-8 px-24 bg-zinc-800 fixed z-[999] w-full">
      <div className="text-cyan-400 font-semi-bold">
        Alizée <strong>Chaussonnet</strong>
      </div>
      <div className="flex items-center flex-end">
        <button onClick={scrollToHome} className="a-class">
          <HomeIcon className="w-[20px] text-cyan-400 " />
        </button>
        <button onClick={scrollToAPropos} className="a-class">
          A propos
        </button>
        <button onClick={scrollToRecommandation} className="a-class">
          Recommandations
        </button>
        <button onClick={scrollToPortfolio} className="a-class">
          Portfolio
        </button>
        <button onClick={scrollToContact} className="a-class">
          Contact
        </button>
      </div>
    </div>
  );
}
