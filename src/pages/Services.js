import TextDescription from "../components/textDescription/TextDescription";
import ActionOpenPdf from "../components/actionOpenPdf";
import TextDescriptionPrestation from "../components/textDescriptionPrestation";
import {
  contentDescriptionPrestation,
  contentIconPrestation,
  contentDescription,
  contentIconAction,
} from "../data";

const Services = () => {
  return (
    <div>
      <section className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <TextDescriptionPrestation data={contentDescriptionPrestation} />
      </section>
      <section className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <p className="font-medium text-secondary">
          Cliquez sur notre brochure pour visualiser notre offre d’ateliers
          d’Envol.
        </p>
        <div className="pt-20">
          <ActionOpenPdf data={contentIconPrestation} />
        </div>
      </section>
      <section className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <TextDescription data={contentDescription[5]} />
      </section>
      <section className="py-16 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <ActionOpenPdf data={contentIconAction} />
      </section>
    </div>
  );
};

export default Services;
