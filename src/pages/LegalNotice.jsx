import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import ScrollReveal from "scrollreveal";

const LegalNotice = () => {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  const box4Ref = useRef();
  const box5Ref = useRef();
  const box6Ref = useRef();
  const box7Ref = useRef();
  const box8Ref = useRef();

  useEffect(() => {
    const config = {
      origin: "left",
      duration: 1000,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
      reset: true,
    };

    ScrollReveal().reveal(box1Ref.current, config);
    ScrollReveal().reveal(box2Ref.current, config);
    ScrollReveal().reveal(box3Ref.current, config);
    ScrollReveal().reveal(box4Ref.current, config);
    ScrollReveal().reveal(box5Ref.current, config);
    ScrollReveal().reveal(box6Ref.current, config);
    ScrollReveal().reveal(box7Ref.current, config);
    ScrollReveal().reveal(box8Ref.current, config);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Mentions Légales - Tous Albatros</title>
        <meta
          name="description"
          content="Consultez les mentions légales de Tous Albatros, y compris des informations sur l'éditeur du site, la conception et le développement, l'hébergement, la possession du nom de domaine, l'utilisation des cookies, l'utilisation des données personnelles, la responsabilité de l'association Tous Albatros, et le droit applicable."
        />
      </Helmet>
      <section
        className="pt-20 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box1Ref}
      >
        <h1 className="text-3xl font-bold text-secondary">Mentions légales</h1>
        <h2 className="text-2xl font-bold text-secondary mt-5">
          Editeur du site
        </h2>
        <div className="mt-5">
          <ul className="flex flex-col text-tertiary">
            <li>Identificateur de l'association: Tous Albatros</li>
            <li>
              Siège sociale: Maison des Associations, 93 la Canebière, boite aux
              lettre n°160, 13001 MARSEILLE
            </li>
            <li>
              RCS: 123 456 789 | Code NAF: 123456 | Capital social: 123 456 €
            </li>
            <li>N° de téléphone: 06 16 13 38 06</li>
            <li>
              Adresse e-mail:{" "}
              <a
                href="mailto:contact@tousalbatros.fr"
                className="hover:text-primary"
              >
                contact@tousalbatros.fr
              </a>
            </li>
            <li>Dirigeant: Mylène</li>
          </ul>
        </div>
      </section>
      <section
        className="pt-20 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box2Ref}
      >
        <h2 className="text-2xl font-bold text-secondary">
          Conception et développement du sites
        </h2>
        <div className="mt-5">
          <ul className="flex flex-col text-tertiary">
            <li>Société: Boudra Tristan</li>
            <li>
              N° de téléphone:{" "}
              <a href="tel:0777117198" className="hover:text-primary">
                07 77 11 71 98
              </a>
            </li>
            <li>
              Adresse e-mail:{" "}
              <a
                href="mailto:boudratristan@gmail.com"
                className="hover:text-primary"
              >
                boudratristan@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                href="https://github.com/tristanboudra"
                className="hover:text-primary"
              >
                https://github.com/tristanboudra
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/tristan-boudra/"
                className="hover:text-primary"
              >
                https://www.linkedin.com/in/tristan-boudra/
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section
        className="pt-20 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box3Ref}
      >
        <h2 className="text-2xl font-bold text-secondary">
          Hébergement du site
        </h2>
        <p className="mt-5 text-tertiary">
          OVHcloud:{" "}
          <a href="https://www.ovhcloud.com/fr/" className="hover:text-primary">
            https://www.ovhcloud.com/fr/
          </a>
        </p>
      </section>
      <section
        className="pt-20 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box4Ref}
      >
        <h2 className="text-2xl font-bold text-secondary">
          Posséssion du nom de domaine
        </h2>
        <p className="mt-5 text-tertiary">
          OVHcloud:{" "}
          <a href="https://www.ovhcloud.com/fr/" className="hover:text-primary">
            https://www.ovhcloud.com/fr/
          </a>
        </p>
      </section>
      <section
        className="pt-20 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box5Ref}
      >
        <h2 className="text-2xl font-bold text-secondary">
          Utilisation des cookies
        </h2>
        <p className="mt-5 text-tertiary">
          Ce site utilise les cookies dans un but de statistiques et de
          fonctionnement uniquement.
        </p>
      </section>
      <section
        className="pt-20 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box6Ref}
      >
        <h2 className="text-2xl font-bold text-secondary">
          Utilisation des données personnelles
        </h2>
        <p className="mt-5 text-tertiary">
          En utilisant le formulaire présents sur la page de contact, vous
          acceptez le traitement des données personnelles transmises au site.
          Elles sont conservées et traitées à des fins de gestion, d'historique
          et d'amélioration de nos services.
          <br /> Les données sont conservées pour une durée raisonnable de 10
          ans. <br />
          Pour toute demande de suppression, de rectification ou d'accès aux
          données, veuillez effectuer une demande par email à :
          contact@domaine-de-pipangaille.fr ou par courrier à l'adresse : 1
          Quartier Les Marettes, 26140, Andancette
        </p>
      </section>
      <section
        className="pt-20 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box7Ref}
      >
        <h2 className="text-2xl font-bold text-secondary">
          Responsabilité de l'association Tous Albatros
        </h2>
        <p className="mt-5 text-tertiary">
          Dans les conditions autorisées par la loi, l'association Tous Albatros
          n'encourt aucune responsabilité : Pour toute imprécision,
          inexactitude, omission ou pour tous dommages résultant d'une intrusion
          d'un tiers ayant entraîné une modification des informations mises à
          disposition sur le Site. En cas de dommages provoqués en raison de
          l'accès d'un tiers non autorisé sur le Site ou rendant impossible son
          accès. Le visiteur est informé que l'accès au Site pourra être
          interrompu à tout moment par l'association Tous Albatros en raison de
          maintenance, de sécurité ou toute autre contrainte technique.
        </p>
      </section>
      <section
        className="py-20 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box8Ref}
      >
        <h2 className="text-2xl font-bold text-secondary">Droit applicable</h2>
        <p className="mt-5 text-tertiary">
          Les présentes mentions sont régies par le droit français. Les
          juridictions françaises sont seules compétentes pour connaître tout
          litige se rapportant directement ou indirectement à l'accès au présent
          Site ou à son utilisation.
        </p>
      </section>
    </div>
  );
};

export default LegalNotice;
