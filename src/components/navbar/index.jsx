import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const burgerIcon = (
    <Menu className="flex text-primary items-center" size={40} />
  );

  const xIcon = <X className="flex text-primary items-end" size={40} />;

  return (
    <>
      <nav className="shadow-md shadow-gray-100 font-poppins">
        <div className="flex flex-row justify-between items-center py-2 px-4 max-w-screen-xl mx-auto">
          <img
            src={require("../../assets/logos/logo_tousAlbatros.png")}
            className="h-20 w-auto"
            alt="Logo TousAbatros"
          />
          <div className="lg:hidden" onClick={openModal}>
            {burgerIcon}
          </div>
          <ul className="hidden lg:flex flex-row gap-5 font-medium text-quaternary">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-tertiary"
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-tertiary"
                }
              >
                A propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-tertiary"
                }
              >
                Prestations
              </NavLink>
            </li>
          </ul>
          <div className="hidden lg:block">
            <button className="bg-primary rounded-full px-6 py-2">
              <Link to="/contact" className="text-sm text-white font-medium">
                Nous contacter
              </Link>
            </button>
          </div>
        </div>
      </nav>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex">
          <div className="bg-white p-4 w-full h-screen">
            <div className="flex justify-end" onClick={closeModal}>
              {xIcon}
            </div>
            <ul className="flex flex-col gap-20 font-medium text-3xl items-center justify-center h-screen text-quaternary">
              <li>
                <Link
                  to="/"
                  className="hover:text-tertiary"
                  onClick={closeModal}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-tertiary"
                  onClick={closeModal}
                >
                  A propos
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-tertiary"
                  onClick={closeModal}
                >
                  Prestations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-tertiary"
                  onClick={closeModal}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
