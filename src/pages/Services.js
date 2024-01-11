import ActionOpenPdf from "../components/actionOpenPdf";
import TextDescriptionPrestation from "../components/textDescriptionPrestation";
import ScrollReveal from "scrollreveal";
import { contentDescriptionPrestation, contentIconPrestation } from "../data";
import { useEffect, useRef } from "react";

const Services = () => {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  const box4Ref = useRef();
  const box5Ref = useRef();

  useEffect(() => {
    const config = {
      origin: "left",
      duration: 1000,
      delay: 200,
      distance: "300px",
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
      <section
        className="pt-16 md:pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto"
        ref={box1Ref}
      >
        <TextDescriptionPrestation data={contentDescriptionPrestation} />
      </section>
      <section
        className="py-32 px-10 flex flex-col relative max-w-screen-xl mx-auto"
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
    </div>
  );
};

export default Services;
