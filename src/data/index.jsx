import {
  TrendingUp,
  Users,
  BadgeCheck,
  Lightbulb,
  File,
  Printer,
  Home,
  Presentation,
  UserCog,
  HeartHandshake,
  Smile,
  UserCheck,
  Bird,
  SlidersHorizontal,
  Puzzle,
} from "lucide-react";

const TrendingUpIcon = (
  <TrendingUp className="flex text-primary items-center mx-auto" size={40} />
);
const UsersIcon = (
  <Users className="flex text-primary items-center mx-auto" size={40} />
);
const BadgeCheckIcon = (
  <BadgeCheck className="flex text-primary items-center mx-auto" size={40} />
);
const LightbulbIcon = (
  <Lightbulb className="flex text-primary items-center mx-auto" size={40} />
);
const FileIcon = (
  <File className="flex text-primary items-center mx-auto" size={40} />
);
const PrinterIcon = (
  <Printer className="flex text-primary items-center mx-auto" size={40} />
);
const HomeIcon = (
  <Home className="flex text-primary items-center mx-auto" size={40} />
);
const Prestation = (
  <Presentation className="flex text-primary items-center mx-auto" size={40} />
);

const UserCogIcon = (
  <UserCog className="flex text-primary items-center mx-auto" size={40} />
);

const HeartHandIcon = (
  <HeartHandshake
    className="flex text-primary items-center mx-auto"
    size={40}
  />
);

const UserCheckIcon = (
  <UserCheck className="flex text-primary items-center mx-auto" size={40} />
);

const BirdIcon = (
  <Bird className="flex text-primary items-center mx-auto" size={40} />
);

const SliderHorizontalIcon = (
  <SlidersHorizontal
    className="flex text-primary items-center mx-auto"
    size={40}
  />
);

const PuzzlePieceIcon = (
  <Puzzle className="flex text-primary items-center mx-auto" size={40} />
);

const SmileIcon = (
  <Smile className="flex text-primary items-center mx-auto" size={40} />
);

const contentIcon = [
  {
    id: 0,
    icon: TrendingUpIcon,
    title: "+ 8 ans",
    subtitle: "Expérience",
  },
  {
    id: 1,
    icon: UsersIcon,
    title: "100 %",
    subtitle: "Engagés",
  },
  {
    id: 2,
    icon: BadgeCheckIcon,
    title: "100 %",
    subtitle: "Réactifs",
  },
  {
    id: 3,
    icon: LightbulbIcon,
    title: "∞",
    subtitle: "Projets innovants",
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
    subtitle: "Cliquer pour visualiser la brochure numérique",
    linkPdf: require("../assets/documents/test.pdf"),
  },
  {
    id: 1,
    icon: PrinterIcon,
    title: "Brochure imprimable",
    subtitle: "Cliquer pour imprimer la brochure papier",
  },
];

const contentIconAction = [
  {
    id: 0,
    icon: FileIcon,
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
    title: "Imperfection",
    subtitle:
      "S’autoriser l’erreur, avoir le droit de se tromper et de poser des questions",
  },
  {
    id: 1,
    icon: HeartHandIcon,
    title: "Confiance",
    subtitle:
      "Accorder sa confiance à priori en tentant de dépasser ses propres préjugés",
  },
  {
    id: 2,
    icon: UserCheckIcon,
    title: "Disponibilité",
    subtitle: "Adopter une posture d’écoute et accorder du temps à l’autre",
  },
];

const valuesMiddle = [
  {
    id: 0,
    icon: BirdIcon,
    title: "Douceur",
    subtitle: "Regarder avec tendresse et accorder du temps à l’autre",
  },
  {
    id: 1,
    icon: SliderHorizontalIcon,
    title: "Adaptabilité",
    subtitle:
      "Accueillir et rendre accessible les services de l’association à tous",
  },
];

const valuesBottom = [
  {
    id: 0,
    icon: PuzzlePieceIcon,
    title: "Complémentarité",
    subtitle: "Admettre la compétence d’autrui et orienter",
  },
  {
    id: 1,
    icon: SmileIcon,
    title: "Auto-réalisation",
    subtitle: "Accompagner l’autre vers sa propre réalisation",
  },
];

export {
  contentIcon,
  contentDescription,
  contentDescriptionPrestation,
  contentIconPrestation,
  contentIconAction,
  team,
  valuesTop,
  valuesBottom,
  valuesMiddle,
};
