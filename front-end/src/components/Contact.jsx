import { useForm } from "react-hook-form";
import { notifSucess } from "../services/notifications";
import axios from "axios";

export default function Contact({ API_URL }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    notifSucess("Merci pour votre message");
    return await axios.post(`${API_URL}/contact`, data).data;
  };

  return (
    <>
      <div id="container-contact" className="h-[88px] mt-[-88px]"></div>
      <div>
        <h2 className="titre-section px-24">Contact</h2>
        <div className="w-full md:w-96 md:max-w-full mx-auto my-6 bg-[#f7f7f7]">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="block mb-6">
                <span className="text-gray-700">Nom et Prénom</span>
                <input
                  type="text"
                  name="name"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Laurence Dupont"
                  {...register("name")}
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Email</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="laurence.dupont@example.com"
                  required
                  {...register("email")}
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="3"
                  placeholder="Quel est votre message ?"
                  {...register("message")}
                ></textarea>
              </label>
              <div className="mb-6 flex justify-end">
                <button
                  type="submit"
                  className="
         button-general
          "
                >
                  Contactez-Moi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
