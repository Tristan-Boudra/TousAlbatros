const Footer = () => {
  const linkedin = require("../../assets/logos/brands/linkedin.png");
  const facebook = require("../../assets/logos/brands/facebook.png");
  const instagram = require("../../assets/logos/brands/instagram.png");
  const tiktok = require("../../assets/logos/brands/tiktok.png");
  const snapchat = require("../../assets/logos/brands/snapchat.webp");

  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-10 md:gap-0 justify-between items-center md:items-start max-w-screen-xl mx-auto p-10 border-t-2">
      <div className="flex flex-col md:flex-row gap-10 justify-between w-full">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src={require("../../assets/logos/logo_tousAlbatros.png")}
            className="h-20 w-auto"
            alt="Logo TousAbatros"
          />
          <p className="text-secondary font-medium text-center md:text-left">
            <span className="text-primary">Tous Albatros</span>
            <br />
            Pour l'envol de la jeunesse
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-secondary text-lg font-bold">
              Où sommes-nous ?
            </h3>
            <p className="text-tertiary mt-3 w-1/2 md:w-64 text-center md:text-left">
              Maison des Associations, 93 la Canebière, boîte aux lettres n°160,
              13001 MARSEILLE
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-secondary text-lg font-bold">Contact</h3>
            <a href="telto:0616133806" className="text-tertiary mt-3">
              06 16 13 38 06
            </a>
            <a href="mailto:contact@tousalbatros.fr" className="text-tertiary">
              contact@tousalbatros.fr
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-center mt-10 gap-10 md:gap-0">
        <p className="text-[#64748B]">
          © {currentYear}. Tous droits réservés |{" "}
          <a href="/mentions-legales">Mentions légales</a>
        </p>
        <ul className="flex flex-col md:flex-row gap-3 align-center">
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src={linkedin} className="h-10 w-10" alt="Logo Linkedin" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src={facebook} className="h-10 w-10" alt="Logo Facebook" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src={instagram} className="h-10 w-10" alt="Logo Instagram" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src={tiktok} className="h-10 w-10" alt="Logo Tiktok" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src={snapchat} className="h-12 w-12" alt="Logo Snapchat" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
