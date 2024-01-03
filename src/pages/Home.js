import { Link } from "react-router-dom";
import Icon from "../components/Icon/Icon";
import TextDescription from "../components/textDescription/TextDescription";
import AvisClient from "../components/avisClient/avisClient";
import Carousel from "../components/carousel/carousel";
import { contentIcon, contentDescription } from "../data/index";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="flex">
          <img
            src={require("../assets/images/home/background_header.png")}
            className="w-full h-full top-0"
            alt="Background header"
          />
        </div>
        <div className="flex flex-col w-max items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" font-bold items-center text-secondary text-center">
            <h1 className="text-xl md:text-2xl lg:text-5xl">
              <strong className="text-primary text-xl md:text-3xl lg:text-7xl">
                Tous Albatros
              </strong>
              <br /> Pour l'envol de la jeunesse
            </h1>
          </div>
          <div className="flex flex-row gap-10 pt-6 md:pt-20">
            <button className="bg-primary rounded-full px-6 py-2 w-auto h-auto">
              <Link
                to="/contact"
                className="text-xs md:text-sm text-white font-medium"
              >
                Nous contacter
              </Link>
            </button>
            <button className="bg-white rounded-full px-6 py-2 w-auto h-auto">
              <Link
                to="/services"
                className="text-xs md:text-sm text-secondary font-medium"
              >
                Prestations
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-20 flex content-center justify-center">
        <Icon data={contentIcon} />
      </div>
      <section className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <TextDescription data={contentDescription[0]} />
      </section>
      <section className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <TextDescription data={contentDescription[1]} />
      </section>
      <section className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <ul className="flex flex-col flex-wrap md:flex-row gap-10 mx-auto">
          <li>
            <AvisClient />
          </li>
          <li>
            <AvisClient />
          </li>
          <li>
            <AvisClient />
          </li>
        </ul>
      </section>
      <section className="pt-32 py-10 px-10 md:px-0 flex flex-col relative max-w-screen-xl mx-auto">
        <Carousel />
      </section>
    </div>
  );
};

export default Home;
