import TextDescription from "../components/textDescription";
import Team from "../components/team";
import Values from "../components/values";
import ValuesWithImage from "../components/valuesWithImage";
import {
  contentDescription,
  team,
  valuesBottom,
  valuesMiddle,
  valuesTop,
} from "../data/index";

const About = () => {
  return (
    <div>
      <section className="pt-16 md:pt-32 px-10 flex flex-col md:flex-row items-center relative max-w-screen-xl mx-auto">
        <div>
          <p className="text-secondary text-3xl font-bold">
            <span className="text-primary text-4xl">"</span>Tout le monde est un
            génie. Mais si on juge un poisson sur sa capacité à grimper à un
            arbre, il passera sa vie à croire qu’il est stupide.
            <span className="text-primary text-4xl">"</span>
          </p>
          <p className="text-sm mt-5">Albert Einstein</p>
        </div>
        <img
          src={require("../assets/images/about/quote.png")}
          className="w-96 h-64 top-0"
          alt="Background header"
        />
      </section>
      <section className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <TextDescription data={contentDescription[2]} />
      </section>
      <section className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <TextDescription data={contentDescription[3]} />
      </section>
      <section className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <div className="bg-primary/20 w-max rounded-full">
          <p className="text-primary px-3 py-2 w-auto text-xs">Nos valeurs</p>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl text-secondary font-bold mt-4">
            Nos valeurs
          </h1>
          <div className="flex flex-col gap-10 mt-10 items-center">
            <Values data={valuesTop} />
            <div className="flex flex-col lg:flex-row">
              <ValuesWithImage data={valuesMiddle[0]} />
              <img
                src={require("../assets/images/about/value.png")}
                className="w-64 h-42 mx-auto md:mx-0 py-10 md:py-0 md:w-96 md:h-64 top-0"
                alt="Background header"
              />
              <ValuesWithImage data={valuesMiddle[1]} />
            </div>
            <Values data={valuesBottom} />
          </div>
        </div>
      </section>
      <section className="pt-32 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <TextDescription data={contentDescription[4]} />
      </section>
      <section className="pt-32 pb-10 px-10 flex flex-col relative max-w-screen-xl mx-auto">
        <div className="bg-primary/20 w-max rounded-full">
          <p className="text-primary px-3 py-2 w-auto text-xs">Equipe</p>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl text-secondary font-bold mt-4">
            Notre équipe de passionés
          </h1>
          <Team data={team} />
        </div>
      </section>
    </div>
  );
};

export default About;
