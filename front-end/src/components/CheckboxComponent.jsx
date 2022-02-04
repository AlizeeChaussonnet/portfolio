import { Controller } from "react-hook-form";
import { CheckIcon } from "@heroicons/react/solid";

export default function CheckboxComponent({ register, control }) {
  return (
    <div>
      <p>Choisir les technos utilisées</p>

      <div>
        <input
          type="checkbox"
          id="javascript"
          name="javascript"
          {...register("technos")}
        />
        <label htmlFor="javascript">Javascript</label>
      </div>

      <div>
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <CheckIcon className="w-1/6" {...field} />}
        />
        <label htmlFor="typescript">TypeScript</label>
      </div>
    </div>
  );
}
