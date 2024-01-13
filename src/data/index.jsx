import {
  TrendingUp,
  Users,
  BadgeCheck,
  Lightbulb,
  File,
  MessageSquare,
  Home,
  Presentation,
  UserCog,
  HeartHandshake,
  Smile,
  UserCheck,
  Bird,
  SlidersHorizontal,
  Puzzle,
  Library,
} from "lucide-react";

const TrendingUpIcon = (
  <div className="flex bg-orange/10 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <TrendingUp className="flex text-orange items-center mx-auto" size={30} />
  </div>
);

const UsersIcon = (
  <div className="flex bg-green/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Users className="flex text-green items-center mx-auto" size={30} />
  </div>
);

const BadgeCheckIcon = (
  <div className="flex bg-turquoise/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <BadgeCheck
      className="flex text-turquoise items-center mx-auto"
      size={30}
    />
  </div>
);

const LightbulbIcon = (
  <div className="flex bg-primary/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Lightbulb className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

const FileIcon = (
  <div className="flex bg-orange/20 w-12 h-12 md:w-16 md:h-16 rounded-lg p-4 content-center items-center">
    <File className="flex text-orange items-center mx-auto" size={30} />
  </div>
);

const MessageIcon = (
  <div className="flex bg-green/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <MessageSquare className="flex text-green items-center mx-auto" size={30} />
  </div>
);

const LibrairieIcon = (
  <div className="flex bg-primary/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Library className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

const HomeIcon = (
  <div className="flex bg-orange/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Home className="flex text-orange items-center mx-auto" size={30} />
  </div>
);

const Prestation = (
  <div className="flex bg-green/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Presentation className="flex text-green items-center mx-auto" size={30} />
  </div>
);

const UserCogIcon = (
  <div className="flex bg-orange/10 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <UserCog className="flex text-orange items-center mx-auto" size={30} />
  </div>
);

const HeartHandIcon = (
  <div className="flex bg-orange/10 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <HeartHandshake
      className="flex text-orange items-center mx-auto"
      size={30}
    />
  </div>
);

const UserCheckIcon = (
  <div className="flex bg-orange/10 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <UserCheck className="flex text-orange items-center mx-auto" size={30} />
  </div>
);

const BirdIcon = (
  <div className="flex bg-green/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Bird className="flex text-green items-center mx-auto" size={30} />
  </div>
);

const SliderHorizontalIcon = (
  <div className="flex bg-green/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <SlidersHorizontal
      className="flex text-green items-center mx-auto"
      size={30}
    />
  </div>
);

const PuzzlePieceIcon = (
  <div className="flex bg-primary/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Puzzle className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

const SmileIcon = (
  <div className="flex bg-primary/20 w-12 h-12 md:w-16 md:h-16 p-4 rounded-lg content-center items-center">
    <Smile className="flex text-primary items-center mx-auto" size={30} />
  </div>
);

const contentIcon = [
  {
    id: 0,
    icon: TrendingUpIcon,
    title: "+ 8 ans",
    subtitle: "Expérience",
    color: "yellow",
  },
  {
    id: 1,
    icon: UsersIcon,
    title: "100 %",
    subtitle: "Engagés",
    color: "green",
  },
  {
    id: 2,
    icon: BadgeCheckIcon,
    title: "100 %",
    subtitle: "Réactifs",
    color: "turquoise",
  },
  {
    id: 3,
    icon: LightbulbIcon,
    title: "∞",
    subtitle: "Projets innovants",
    color: "primary",
  },
];

const contentDescription = [
  {
    id: 0,
    tag: "Qui sommes-nous ?",
    title: "L’Histoire de trois femmes",
    description:
      "Tous Albatros, c’est d’abord l’histoire de trois femmes qui s’associent pour créer une méthode croisant leurs différentes spécialités : l’accompagnement social, l’animation socio-éducative et le coaching.\n\nParce que construire son futur implique de comprendre sa propre histoire. Tous Albatros conçoit des projets visant à transmettre aux jeunes des clefs d’introspection et de projection.\n\nL’association utilise tous les outils nécessaires au développement de l’autodétermination, de l’épanouissement et de la capacité d’agir des adolescents.",
  },
  {
    id: 1,
    tag: "The Choice",
    title: "Coup de ceur The Choice",
    description:
      "Tous Albatros est un projet « Coup de Cœur »​ de la saison 1 de Make The Choice (UPE13), coaché par Erilia France et accompagné par Inter-Made.",
  },
  {
    id: 2,
    tag: "Notre Histoire",
    title: "NOTRE HISTOIRE",
    description:
      "Tous Albatros, c’est d’abord l’histoire de trois femmes qui s’associent pour créer une méthode croisant leurs différentes spécialités : l’accompagnement social, l’animation socio-éducative et le coaching. Parce que construire son futur implique de comprendre sa propre histoire, Tous Albatros conçoit des projets visant à transmettre aux jeunes des clefs d’introspection et de projection. L’association utilise tous les outils nécessaires au développement de l’autodétermination, de l’épanouissement et de la capacité d’agir des adolescents. Chaque Albatros a un potentiel qui attend d’être révélé !",
  },
  {
    id: 3,
    tag: "Expertise",
    title: "DES EXPERTISES COMMUNES ET COMPLEMENTAIRES",
    description:
      "Conception et gestions de projets sociaux, socioculturels et socioéducatifs. Interventions en milieu scolaire, en pieds d’immeubles ainsi qu’en centres sociaux et culturels. Accompagnement de personnes en situation de précarité. Coaching scolaire, orientation et coaching à l’emploi",
  },
  {
    id: 4,
    tag: "Education",
    title: "GOUVERNANCE DE NOTRE ASSOCIATION",
    description:
      "Tous Albatros est une association loi 1901 dont le but est de promouvoir l’autodétermination des jeunes, notamment grâce à la stimulation de leur curiosité, à l’apprentissage de l’autodidaxie, au développement de l’esprit critique et de l’autonomie ainsi qu’à la révélation de leurs potentiels propres. L’administration de Tous Albatros s’inspire de la méthode de gouvernance sociocratique afin de garantir : La libre expression de tous les administrateurs et la prise en compte de leurs avis. La complémentarité des regards et des expertises pour bonifier les décisions. La justesse dans la conception de projets adaptés au public adolescent. Une vision globale des enjeux du territoire et sur la mise en œuvre de projets",
  },
  {
    id: 5,
    tag: "Gouvernance",
    title: "ACTIONS ÉDUCATIVES",
    description:
      "Le département des Bouches-du-Rhône en lien avec les services départementaux de l’Éducation Nationale soutient et organise des actions éducatives. Vous faites partie d’une équipe éducative et vous souhaitez en savoir plus sur nos ateliers : cliquez sur notre brochure pour visualiser nos ateliers d’Envol.",
  },
];

const contentDescriptionPrestation = [
  {
    id: 0,
    icon: HomeIcon,
    description:
      "Tous Albatros intervient dans toute structure accueillant un public âgé de 11 à 25 ans : établissements scolaires et d’enseignements supérieurs, centres sociaux, maisons pour tous, missions locales, foyers, etc. Ces interventions, nommées « ateliers d’Envol », visent à répondre aux caractéristiques des adolescents accueillis, aux besoins et aux axes pédagogiques des structures d’accueil. Elles varient en durée et en nombre selon le format de programme souhaité par les structures.",
  },
  {
    id: 1,
    icon: Prestation,
    description:
      "Les ateliers animés par Tous Albatros utilisent l’expérience, le jeu et l’interactivité pour stimuler l’intérêt, la curiosité et la participation des jeunes, favoriser l’expression de soi et l’émergence de la parole du groupe et transmettre des clés de compréhension de soi, de l’autre et de son environnement. Ils portent sur de nombreuses thématiques autour de la connaissance de soi, de la relation à l’autre et de la vision du monde. N’hésitez pas à nous contacter pour plus de renseignements.",
  },
];

const contentIconPrestation = [
  {
    id: 0,
    icon: FileIcon,
    title: "Brochure web",
    subtitle:
      "Pour télécharger et imprimer la brochure de nos ateliers d'envol",
    linkPdf: require("../assets/documents/test.pdf"),
  },
  {
    id: 1,
    icon: MessageIcon,
    title: "Contact",
    subtitle: "Pour recevoir une proposition d'ateliers sur mesure",
    linkPdf: "/contact",
  },
  {
    id: 2,
    icon: LibrairieIcon,
    title: "Actions éducatives",
    subtitle: "Cliquer pour visualiser la brochure",
    linkPdf: require("../assets/documents/test.pdf"),
  },
];

const team = [
  {
    id: 0,
    name: "Mylène",
    role: "Intervenante",
    image: require("../assets/images/home/Mylene.png"),
  },
];

const valuesTop = [
  {
    id: 0,
    icon: UserCogIcon,
    title: "Principe d'inperfection",
    subtitle:
      "J’ai le droit de ne pas savoir, de ne pas comprendre, de questionner, de demander conseils, de me tromper, d’être maladroit·e et d’être excusé·e.",
  },
  {
    id: 1,
    icon: HeartHandIcon,
    title: "Principe de confiance",
    subtitle:
      "J’accueille la différence et l’histoire de chacun, j’accorde une confiance a priori en dépassant mes propres préjugés.",
  },
  {
    id: 2,
    icon: UserCheckIcon,
    title: "Principe de disponibilité",
    subtitle:
      "Je me rends disponible et ouvert·e à l’échange, j’adopte une posture d’écoute et j’accorde du temps à l’autre pour répondre à ses interrogations et incompréhensions.",
  },
];

const valuesMiddle = [
  {
    id: 0,
    icon: BirdIcon,
    title: "Principe de douceur",
    subtitle:
      "J’essaie de ne pas crier et de garder mon calme, je fais preuve de lenteur, je regarde avec tendresse, je réponds aux demandes d’aide et je cherche la réconciliation.",
  },
  {
    id: 1,
    icon: SliderHorizontalIcon,
    title: "Principe d'adaptabilité",
    subtitle:
      "D’une part j’adapte mon discours, ma posture et mes contenus pour que l’autre m’accueille et me comprenne, d’autre part je rends accessibles les services de l’association sans discrimination.",
  },
];

const valuesBottom = [
  {
    id: 0,
    icon: PuzzlePieceIcon,
    title: "Principe d'auto-réalisation",
    subtitle:
      "Je n’assiste pas mais j’accompagne l’autre vers sa propre réalisation, en valorisant le positif et en transmettant des clefs, et je ne me rends pas indispensable.",
  },
  {
    id: 1,
    icon: SmileIcon,
    title: "Principe de complémentarité",
    subtitle:
      "J’admets la compétence d’autres personnes, intérieures ou extérieures à l’association, et je n’hésite pas à orienter.",
  },
];

const reviews = [
  {
    id: 0,
    name: "Jeune participant·e",
    description:
      "« Vous nous permettez de nous découvrir chaque jour et de découvrir des moyens d’agir autrement grâce aux idées des autres. »",
  },
  {
    id: 1,
    name: "Adulte présent·e",
    description:
      "« Très bien mené, dynamique positive et constructive. Intervention rythmée, contenu pertinent, activités variées. La progression de la séance est bien pensée et bien orchestrée. La gestion du groupe est maîtrisée et adaptée selon les classes. Intervention de qualité. »",
  },
  {
    id: 2,
    name: "Stagiaire de troisième",
    description:
      "« Tous Albatros est une association qui aide les jeunes à avoir confiance en soi, à réaliser que rien n’est impossible. On peut parler sans se faire juger. »",
  },
  {
    id: 3,
    name: "Jeune participant·e",
    description:
      "« J’ai aimé qu’on puisse se tutoyer tout de suite. Votre façon de nous parler est respectueuse, vous nous traitez d’égal à égal »",
  },
  {
    id: 4,
    name: "Jeune participant·e",
    description:
      "« Une séance de bien-être avec des personnes qui ne sont pas dans le jugement mais dans l’écoute »",
  },
  {
    id: 5,
    name: "Adulte présent·e",
    description:
      "« Très bien mené. Les élèves sont acteurs de leur apprentissage et réalisent au fur et à mesure l’impact de leurs diverses actions »",
  },
  {
    id: 6,
    name: "Jeune participant·e",
    description:
      "« Cet atelier a répondu à certaines questions que je pense me poser. Les intervenantes étaient très bienveillantes et dynamiques. »",
  },
  {
    id: 7,
    name: "Jeune participant·e",
    description:
      "« Ça m’a fait du bien de parler car j’ai tendance à être très silencieuse et ne pas exprimer ce que je ressens par peur du jugement. Merci beaucoup <3 »",
  },
  {
    id: 8,
    name: "Adulte présent",
    description:
      "« C’était vraiment bien, interactif et ludique tout en abordant des sujets complexes et profonds »",
  },
  {
    id: 10,
    name: "Jeune participant·e",
    description:
      "« On ne s’est pas ennuyés, c’est bien structuré. Il y a tout : on joue, on parle. »",
  },
];

const Project = [
  {
    id: 0,
    name: "Le Stage d’Envol : à la Découverte de Soi – pour l’insertion des jeunes",
    description:
      "Programme de 5 à 10 ateliers pour découvrir son potentiel et gagner confiance en soi, pour identifier ses intelligences et retrouver l’envie d’apprendre, pour rêver et se projeter dans l’avenir, pour découvrir sa citoyenneté et se saisir de sa liberté.",
    image: [
      {
        id: 0,
        image: require("../assets/logos/supports/1.png"),
      },
      {
        id: 1,
        image: require("../assets/logos/supports/2.png"),
      },
      {
        id: 2,
        image: require("../assets/logos/supports/3.png"),
      },
    ],
  },
  {
    id: 1,
    name: "Les Sentinelles – pour prévenir la dépression et le suicide des jeunes",
    description:
      "Programme de 4 ateliers pour devenir gardien·ne de sa santé mentale et de celle des autres : prendre conscience de soi et de ses ressources intérieures, libérer sa parole et pratiquer l’écoute, apprendre à faire confiance et à demander de l’aide.",
    image: [
      {
        id: 0,
        image: require("../assets/logos/supports/3.png"),
      },
      {
        id: 1,
        image: require("../assets/logos/supports/4.png"),
      },
    ],
  },
  {
    id: 2,
    name: "De soi dans chaque média – pour éduquer à l'image et aux médias",
    description:
      "Programme de 3 ateliers pour comprendre l'origine de l'information, mesurer le poids de la subjectivité, stimuler l’esprit critique et le repérage des fake news, prévenir les rumeurs et le cyberharcèlement ainsi que développer sa créativité citoyenne.",
    image: [
      {
        id: 0,
        image: require("../assets/logos/supports/1.png"),
      },
      {
        id: 1,
        image: require("../assets/logos/supports/2.png"),
      },
      {
        id: 2,
        image: require("../assets/logos/supports/3.png"),
      },
    ],
  },
];

const reviewsWithImages = reviews.map((review) => ({
  ...review,
  image: `https://avatar.iran.liara.run/public/${Math.floor(
    Math.random() * (100 - 1 + 1) + 1
  )}`,
}));

export {
  contentIcon,
  contentDescription,
  contentDescriptionPrestation,
  contentIconPrestation,
  team,
  valuesTop,
  valuesBottom,
  valuesMiddle,
  reviewsWithImages as reviews,
  Project,
};
