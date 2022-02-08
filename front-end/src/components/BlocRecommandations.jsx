import React from "react";

export default function BlocRecommandations({
  titreRecommandation,
  descriptionRecommandation,
}) {
  return (
    <div className="px-8 py-4">
      <h3 className="text-gray-600 font-light text-2xl pb-6">
        {titreRecommandation}
      </h3>
      <p className="text-justify">{descriptionRecommandation}</p>
    </div>
  );
}
