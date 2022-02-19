import { useForm } from "react-hook-form";
import CheckboxComponent from "./CheckboxComponent";

export default function CreateProjet() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const contactFom = [
    {
      labelName: "Nom du projet",
      padding: "p-4",
      registerName: "name",
    },
    {
      labelName: "Lien de l'image",
      padding: "p-4",
      registerName: "picture",
    },
    {
      labelName: "Lien vers le site",
      padding: "p-4",
      registerName: "link",
    },
    {
      labelName: "Lien vers le github",
      padding: "p-4",
      registerName: "github",
    },
    {
      labelName: "Description simple",
      padding: "p-4",
      registerName: "description",
    },
    {
      labelName: "Explications",
      padding: "p-4",
      registerName: "explanation",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-5/6">
      <h2 className="text-center text-2xl pt-8">Créer un nouveau projet</h2>
      {contactFom.map((info, i) => {
        return (
          <div className="ml-12" key={i}>
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {info.labelName}
            </label>
            <input
              type="text"
              id="base-input"
              {...register(`${info.registerName}`)}
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 ${info.padding} dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
          </div>
        );
      })}
      {/* <CheckboxComponent control={control} register={register} /> */}
      <div className="my-6 flex justify-end">
        <button
          type="submit"
          className="
         button-general
          "
        >
          Créer
        </button>
      </div>
    </form>
  );
}
