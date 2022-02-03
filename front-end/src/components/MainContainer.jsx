import logo from "../assets/img/logo.svg";

export default function MainContainer() {
  return (
    <div
      className="bg-[#282c34]  h-[500px] relative flex flex-col justify-center items-center overflow-hidden scroll-smooth"
      id="container-home"
    >
      <h2 className="text-white font-extra-light text-4xl text-center z-50 my-6">
        Développeuse Web Full-Stack
        <br />
        <span className="text-2xl">
          JavaScript - <span className="text-cyan-400 ">React</span>
        </span>
      </h2>
      <button className="button-general">Me Contacter</button>

      <img src={logo} alt="logo" className="w-9/12 logo" />
    </div>
  );
}
