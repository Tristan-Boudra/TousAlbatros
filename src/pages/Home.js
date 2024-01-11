import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import TextDescription from "../components/textDescription";
import AvisClient from "../components/avisClient";
import Carousel from "../components/carousel";
import { contentIcon, contentDescription } from "../data/index";
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const Home = () => {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  const box4Ref = useRef();
  const box5Ref = useRef();

  useEffect(() => {
    const config = {
      origin: "left",
      duration: 1000,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };

    ScrollReveal().reveal(box1Ref.current, config);
    ScrollReveal().reveal(box2Ref.current, config);
    ScrollReveal().reveal(box3Ref.current, config);
    ScrollReveal().reveal(box4Ref.current, config);
    ScrollReveal().reveal(box5Ref.current, config);
  }, []);

  return (
    <div>
      <section className="relative pt-52 md:pt-0 px-10 md:px-0 flex flex-col max-w-screen-xl md:max-w-full mx-auto">
        <div className="hidden md:block">
          <img
            src={require("../assets/images/home/background_header.png")}
            className="w-full h-full top-0"
            alt="Background header"
          />
        </div>
        <div className="flex flex-col w-max items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="font-bold items-center text-secondary text-center">
            <h1 className="text-xl md:text-2xl lg:text-5xl text-secondary">
              <strong className="text-primary text-xl md:text-3xl lg:text-7xl">
                Tous Albatros
              </strong>
              <br /> Pour l'envol de la jeunesse
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 pt-6 md:pt-20">
            <button className="bg-primary rounded-full px-3 md:px-6 md:py-2 w-32 md:w-auto h-8 md:h-auto">
              <Link
                to="/contact"
                className="flex text-xs md:text-sm text-white font-medium justify-center items-center"
              >
                Nous contacter
              </Link>
            </button>
            <button className="bg-transparent md:bg-white rounded-full px-3 md:px-6 md:py-2 w-32 md:w-auto h-8 md:h-auto border border-primary md:border-none">
              <Link
                to="/services"
                className="flex text-xs md:text-sm text-secondary font-medium justify-center items-center"
              >
                Prestations
              </Link>
            </button>
          </div>
        </div>
      </section>
      <div className="pt-20 flex content-center justify-center" ref={box1Ref}>
        <Icon data={contentIcon} />
      </div>
      <section
        className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box2Ref}
      >
        <TextDescription data={contentDescription[0]} />
      </section>
      <section
        className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box3Ref}
      >
        <TextDescription data={contentDescription[1]} />
      </section>
      <section
        className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box4Ref}
      >
        <ul className="flex flex-col flex-wrap md:flex-row gap-20 md:gap-10 mx-auto">
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
      <section
        className="pt-32 py-10 px-10 md:px-0 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box5Ref}
      >
        <Carousel />
      </section>
    </div>
  );
};

export default Home;
