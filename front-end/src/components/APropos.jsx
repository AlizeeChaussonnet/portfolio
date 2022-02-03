import profilPicture from "../assets/img/profil_picture.jpg";

export default function APropos() {
  return (
    <div className="px-24 my-20" id="container-a-propos">
      <h2 className="titre-section">A propos</h2>
      <div className="flex flex-row">
        <img
          src={profilPicture}
          className="w-1/6 rounded-r-lg"
          alt="image de profil"
        />
        <p className="text-justify w-1/2 pl-16">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de texte, comme Aldus
          PageMaker.
        </p>
      </div>
    </div>
  );
}
