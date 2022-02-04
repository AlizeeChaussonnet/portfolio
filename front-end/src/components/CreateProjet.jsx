import { useForm } from "react-hook-form";
import CheckboxComponent from "./CheckboxComponent";

import Label from "./Label";

export default function CreateProjet() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label
        labelName={"Nom du projet"}
        padding={"p-4"}
        register={register}
        registerName={"name"}
      />
      <Label
        labelName={"Lien de l'image"}
        padding={"p-4"}
        register={register}
        registerName={"picture"}
      />
      <Label
        labelName={"Lien vers le site"}
        padding={"p-4"}
        register={register}
        registerName={"link"}
      />
      <Label
        labelName={"Lien vers le github"}
        padding={"p-4"}
        register={register}
        registerName={"github"}
      />
      <Label
        labelName={"Description simple"}
        padding={"p-4"}
        register={register}
        registerName={"description"}
      />
      <Label
        labelName={"Explications"}
        padding={"p-4"}
        register={register}
        registerName={"explanation"}
      />
      <CheckboxComponent control={control} register={register} />
      {/* <div class="mb-6">
        <label
          htmlFor="base-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Base input
        </label>
        <input
          type="text"
          id="base-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="small-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Small input
        </label>
        <input
          type="text"
          id="small-input"
          class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label
          htmlFor="large-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Explications
        </label>
        <input
          type="text"
          id="large-input"
          class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div> */}
      <button type="submit" className="button-general">
        Envoyer
      </button>
    </form>
  );
}
