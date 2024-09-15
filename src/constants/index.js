import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  php,
  wordpress,
  tailwind,
  nodejs,
  figma,
  mksVtc,
  ralphlauren,
  fendi,
  fromfuture,
  teamwork,
  autonome,
  creatif,
  ecouteactive,
  perseverant,
  proactif,
  aoa,
  mks_vtc,
  netfilm,
  linkedin,
  github_rsx,
  seo,
  logique,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const reseaux = [
  {
    title: "Linkedin",
    icon: linkedin,
    href : "https://linkedin.com/in/menes-makiese-dev",
  },
  {
    title: "Github",
    icon: github_rsx,
    href : "https://github.com/Menes-Makiese",
  }
]

const services = [
  {
    title: "Développeur Javascript",
    icon: web,
  },
  {
    title: "Développeur PHP",
    icon: backend,
  },
  {
    title: "Développeur Wordpress",
    icon: mobile,
  },
  {
    title: "Store Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "SEO",
    icon: seo,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
];

const comportments = [
  {
    name: "Team Work",
    icon:teamwork,
  },
  {
    name: "Autonomie",
    icon:autonome,
  },
  {
    name: "Creatif",
    icon:creatif,
  },
  {
    name: "Perseverant",
    icon:perseverant,
  },
  {
    name: "Proactif",
    icon:proactif,
  },
  {
    name: "Ecoute Active",
    icon:ecouteactive,
  },
  {
    name: "Logique",
    icon: logique,
  },
  
]

const experiences = [
  {
    title: "Intégrateur Web",
    company_name: "MKS VTC Nantes",
    icon: mksVtc,
    iconBg: "#383E56",
    date: "Octobre 2023 - Decembre 2023",
    points: [
      "Realisation du cahier des charges,",
      "Intégration des contenus et des effets graphiques,",
      "Responsive Design,",
      "Collaboration avec l'equipe GNB Media pour la maintenance et la sécurite du site.",
    ],
  },
  {
    title: "Conseiller de Vente",
    company_name: "Fendi",
    icon: fendi,
    iconBg: "#E6DEDD",
    date: "Décembre 2022 - Mai 2023",
    points: [
      "Ouverture et fermeture du stand,",
      "Relation client,",
      "Implémentation des nouveaux produits,",
      "Commande de produit,",
      "Encaissement.",
    ],
  },
  {
    title: "Responsable Adjoint",
    company_name: "Ralph Lauren",
    icon: ralphlauren,
    iconBg: "#383E56",
    date: "Mai 2021 - Octobre 2022",
    points: [
      "Ouverture et fermeture du magasin,",
      "Analyse des indicateurs de performances,",
      "Mise en place des actions correctrices,",
      "Implementation des produits,",
      "Gestion des stocks,",
      "Gestion des caisses.",
    ],
  },
  {
    title: "Responsable Adjoint",
    company_name: "From Future",
    icon: fromfuture,
    iconBg: "#E6DEDD",
    date: "Septembre 2020 - Avril 2021",
    points: [
      "Ouverture et fermeture du magasin,",
      "Analyse des indicateurs de performances,",
      "Mise en place des actions correctrices,",
      "Implementation des produits,",
      "Gestion des stocks,",
      "Gestion des caisses.",
    ],
  },
];



const projects = [
  {
    name: "Réservation de VTC",
    description:
      "Une application web réalisée pour un membre de ma famille permet, si vous êtes à Nantes, de réserver un chauffeur VTC ainsi que de choisir la voiture adaptée à votre voyage.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Suite Adode",
        color: "pink-text-gradient",
      },
    ],
    image: mks_vtc,
    source_code_link: "https://github.com/",
  },
  {
    name: "Guide de Voyage",
    description:
      "Une application web aide à trouver la destination idéale, à sauvegarder les pays que vous avez déjà visités, et propose des suggestions correspondant à vos habitudes de voyage.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aoa,
    source_code_link: "https://github.com/",
  },
  {
    name: "Film & Serie",
    description:
      "Passionné de cinéma, j'ai commencé le developpement d'une application de streaming, inspirée de modèles tels que Netflix et Prime Video. Elle permettra de se diriger sur les films et series du moment.",
    tags: [
      {
        name: "Jquery",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: netfilm,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, comportments, experiences, projects, reseaux };