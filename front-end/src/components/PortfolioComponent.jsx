import github from "../assets/img/github.svg";

export default function PortfolioComponent({ projet }) {
  return (
    <div className="px-24 my-20 scroll-smooth" id="container-portfolio">
      <div className="flex">
        <div className="flex flex-col  items-start mr-4 w-1/3 ">
          <div className="flex w-full justify-between items-center pt-9 pb-6">
            <h3 className="text-3xl ">{projet.name}</h3>

            <a href={projet.github} className="">
              <img src={github} alt="logo github" className="w-[25px]" />
            </a>
          </div>
          <p className="description inline-block">{projet.description} </p>
          <p>{projet.explanation}</p>
        </div>

        <img className="w-1/2 rounded-l-lg" src={projet.picture} alt="" />
        <div className="flex flex-col border-solid border-zinc-200 border-2 rounded-r-lg ">
          <p className="bg-slate-200 text-zinc-700 font-semibold rounded-tr-lg w-full px-16 uppercase">
            Stacks
          </p>
          <p className="px-16 py-2">Javascript</p>
        </div>
      </div>
    </div>
  );
}
