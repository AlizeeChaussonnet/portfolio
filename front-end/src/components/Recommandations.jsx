import BlocRecommandations from "./BlocRecommandations";

export default function Recommandations() {
  return (
    <>
      <div id="container-recommandation" className="h-[88px] mt-[-88px]"></div>

      <h2 className="titre-section">Recommandations</h2>
      <div className="flex px-24">
        <BlocRecommandations
          titreRecommandation={"Je recommande"}
          descriptionRecommandation={
            " Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été"
          }
        />
        <BlocRecommandations
          titreRecommandation={"Je recommande"}
          descriptionRecommandation={
            " Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été"
          }
        />
        <BlocRecommandations
          titreRecommandation={"Je recommande"}
          descriptionRecommandation={
            " Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été"
          }
        />
      </div>
    </>
  );
}
