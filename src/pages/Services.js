import ActionOpenPdf from "../components/actionOpenPdf";
import TextDescriptionPrestation from "../components/textDescriptionPrestation";
import ImgWithCarousel from "../components/imageWithCarousel";
import ScrollReveal from "scrollreveal";
import {
  contentDescriptionPrestation,
  contentIconPrestation,
  Project,
} from "../data";
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const Services = () => {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();

  useEffect(() => {
    const config = {
      origin: "left",
      duration: 1000,
      delay: 200,
      distance: "300px",
      scale: 1,
      easing: "ease",
      reset: true,
    };

    ScrollReveal().reveal(box1Ref.current, config);
    ScrollReveal().reveal(box2Ref.current, config);
    ScrollReveal().reveal(box3Ref.current, config);
  }, []);

  const [active, setActive] = React.useState(0);
  const handleShow = (index) => {
    setActive(index);
  };

  return (
    <div>
      <Helmet>
        <title>Nos Services - Tous Albatros</title>
        <meta
          name="description"
          content="Explorez les services proposés par Tous Albatros, y compris nos programmes d'ateliers les plus demandés. Consultez notre brochure pour visualiser notre offre d'ateliers d'Envol."
        />
      </Helmet>
      <section
        className="pt-16 md:pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box1Ref}
      >
        <TextDescriptionPrestation data={contentDescriptionPrestation} />
      </section>
      <section
        className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box2Ref}
      >
        <p className="font-medium text-sm text-secondary">
          Cliquez sur notre brochure pour visualiser notre offre d’ateliers
          d’Envol.
        </p>
        <div className="pt-10">
          <ActionOpenPdf data={contentIconPrestation} />
        </div>
      </section>
      <section
        className="py-32 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box3Ref}
      >
        <div className="bg-primary/20 w-max rounded-full">
          <p className="text-primary px-3 py-2 w-auto text-xs">Ateliers</p>
        </div>
        <h1 className="text-2xl md:text-4xl text-secondary font-bold mt-4">
          Nos programmes d’ateliers les plus demandés
        </h1>
        <div className="flex items-center mt-20 justify-center bg-white">
          <div className="z-10 max-w-7xl gap-10 flex flex-col md:flex-row w-full items-center justify-between h-[560px]">
            <div className="md:w-5/12 space-y-3">
              {Project.map((item, index) => (
                <div
                  key={index}
                  className={`border border-slate-300 rounded-lg p-4 shadow-sm cursor-pointer duration-300 
            ${active === index ? "bg-primary/10 w-full" : "bg-white w-11/12"}
            `}
                  onMouseEnter={() => handleShow(index)}
                >
                  <h1 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h1>
                  {active === index && "active" && (
                    <p className="text-sm text-gray-600 mt-5">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="md:w-7/12 rounded-3xl overflow-hidden bg-white h-96 flex flex-col border border-slate-200">
              {Project.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-full shrink-0 flex items-center justify-center p-4 duration-300"
                  style={{
                    transform: `translateY(-${active * 100}%)`,
                  }}
                >
                  <ImgWithCarousel data={item.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
