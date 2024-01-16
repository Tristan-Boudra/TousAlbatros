import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-20">
      <Helmet>
        <title>Page Introuvable - Tous Albatros</title>
        <meta
          name="description"
          content="Oups! La page que vous demandez sur Tous Albatros n'existe pas. Retournez sur la page d'accueil pour découvrir plus sur notre association."
        />
      </Helmet>
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <p className="text-4xl font-semibold text-secondary">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <a href="/" className="text-xl font-semibold text-secondary underline">
        Retourner sur la page d’accueil
      </a>
    </div>
  );
};

export default Error;
