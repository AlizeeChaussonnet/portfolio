import React from "react";

export default function Contact() {
  return (
    <div id="container-contact">
      <h2 className="titre-section px-24">Contact</h2>
      <form
        className="h-60 flex flex-col w-[86%] m-auto items-end"
        method="post"
      >
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div>
                <label htmlFor="lastName">Nom</label>
                <input
                  type="text"
                  placeholder="Nom"
                  id="lastName"
                  name="lastName"
                  value=""
                />
              </div>
              <div>
                <label htmlFor="firstName">Prénom</label>
                <input
                  type="text"
                  placeholder="Prénom"
                  id="firstName"
                  name="firstName"
                  value=""
                  className="mr-0"
                />
              </div>
            </div>

            <div className="my-4">
              <label htmlFor="email">Email</label>
              <input
                className="w-full m-0"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value=""
              />
            </div>
          </div>

          <div className="items-center">
            <label htmlFor="message">Message :</label>
            <textarea
              className="w-full mx-0"
              id="message"
              name="message"
            ></textarea>
          </div>
        </div>
        <a
          href="mailto:alizee.chaussonnet@gmail.com"
          className="button-general justify-center text-center mt-4 w-24"
        >
          Envoyer
        </a>
      </form>
    </div>
  );
}
