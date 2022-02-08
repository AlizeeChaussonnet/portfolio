import profilPicture from "../assets/img/profil_picture.jpg";

export default function APropos() {
  return (
    <div className="px-24 my-20" id="container-a-propos">
      <h2 className="titre-section">A propos</h2>
      <div className="flex flex-row justify-center">
        <img
          src={profilPicture}
          className="w-1/6 rounded-r-lg"
          alt="image de profil"
        />
        <p className="text-justify w-1/2 pl-16">
          Diplômée d'un Master en Marketing, j'ai passé 8 ans dans la grande
          distribution auprès des plus grands industriels (Henkel, P&G, Mars).
          Toujours attirée par l'informatique j'ai décidé de suivre cette voie
          et de devenir développeuse web. De nature curieuse, j'aime continuer à
          acquérir de nouvelles compétences. Je sais travailler de manière
          autonome et gérer mes projets en respectant les délais, mais également
          m'intégrer dans une équipe.
        </p>
      </div>
    </div>
  );
}
