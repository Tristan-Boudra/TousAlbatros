/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="shadow-md shadow-gray-100 font-poppins">
        <div className="flex flex-row justify-between items-center py-2 max-w-screen-xl mx-auto">
          <div>
            <img
              src={require("../../assets/logos/logo_tousAlbatros.png")}
              className="h-16 w-auto"
              alt="Logo TousAbatros"
            />
          </div>
          <ul className="flex flex-row gap-5 font-medium text-quaternary">
            <li>
              <Link to="/" className="hover:text-tertiary">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-tertiary">
                A propos
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-tertiary">
                Prestations
              </Link>
            </li>
          </ul>
          <div>
            <button className="bg-primary rounded-full px-6 py-2">
              <Link to="/contact" className="text-sm text-white font-medium">
                Nous contacter
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
