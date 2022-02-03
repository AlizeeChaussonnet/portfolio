import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="bg-zinc-800 text-white p-8 flex justify-center"
      id="container-footer"
    >
      <div className="flex flex-col">
        <h3 className="uppercase text-gray-400 font-bold pb-4 text-center">
          Canaux
        </h3>
        <a href="https://github.com/AlizeeChaussonnet" className="pb-2 a-class">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alizeechaussonnet/"
          className="pb-2 a-class"
        >
          LinkedIn
        </a>
      </div>
      <div className="flex flex-col">
        <h3 className="uppercase text-gray-400 font-bold pb-4 text-center">
          Accès
        </h3>
        <Link to="/login">
          <p className="pb-2 a-class">Admin</p>
        </Link>
      </div>
    </div>
  );
}
