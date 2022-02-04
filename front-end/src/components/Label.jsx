import React from "react";

export default function Label({ labelName, padding, register, registerName }) {
  return (
    <div>
      <label
        htmlFor="base-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {labelName}
      </label>
      <input
        type="text"
        id="base-input"
        {...register(`${registerName}`)}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 ${padding} dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      />
    </div>
  );
}
