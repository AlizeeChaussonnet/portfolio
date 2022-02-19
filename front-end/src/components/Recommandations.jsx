const textRecommandation = [
  {
    title: "Je recommande 1",
    text: " Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été",
  },
  {
    title: "Je recommande 2",
    text: " Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été",
  },
  {
    title: "Je recommande 3",
    text: " Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été",
  },
];

export default function Recommandations() {
  return (
    <>
      <div id="container-recommandation" className="h-[88px] mt-[-88px]"></div>

      <h2 className="titre-section">Recommandations</h2>
      <div className="flex px-24">
        {textRecommandation.map((reco, i) => {
          return (
            <div className="px-8 py-4" key={i}>
              <h3 className="text-gray-600 font-light text-2xl pb-6">
                {reco.title}
              </h3>
              <p className="text-justify">{reco.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
