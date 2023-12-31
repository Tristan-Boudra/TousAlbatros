const Contact = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto mt-32 md:px-10 md:gap-10">
        <div className="px-10 lg:px-0 lg:w-1/3">
          <h2 className="text-3xl font-semibold text-secondary">
            Nous sommes{" "}
            <span className="text-primary font-bold">à votre disposition</span>{" "}
            pour discuter
          </h2>
          <p className="mt-5 text-secondary">
            Notre équipe est disponible de 9h à 17h30, du lundi au jeudi et sera
            ravie d'échanger avec vous.
          </p>
        </div>
        <div className="w-10/12 md:w-2/3 border p-5 md:p-10 rounded-lg mt-20 lg:mt-0">
          <h1 className="text-secondary text-2xl md:text-4xl font-bold">
            Nous contacter
          </h1>
          <div className="flex flex-col lg:flex-row lg:gap-10 mt-10">
            <div className="lg:w-1/2">
              <div className="flex flex-col">
                <label className="text-secondary">
                  Nom : <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nom"
                  className="border rounded h-8 placeholder-placeholder"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label className="text-secondary">
                  Email : <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="border rounded h-8 placeholder-placeholder"
                />
                <br />
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2">
              <label className="text-secondary">
                Prénom : <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Prénom"
                className="border rounded h-8 placeholder-placeholder"
              />
              <br />
            </div>
          </div>
          <div className="lg:mt-5">
            <label className="text-secondary">
              Message : <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Message"
              className="border rounded w-full placeholder-placeholder"
              rows="6"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
            <p className="text-xs">Tous les champs sont obligatoires</p>
            <button className="bg-primary text-white px-8 py-1 rounded-xl mt-5 lg:mt-0">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
