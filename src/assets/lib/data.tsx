import htmlicon from "../../assets/icons/htmlicon.svg";
import boostrapicon from "../../assets/icons/boostrapicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import discordapiicon from "../../assets/icons/discordapiicon.png";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import notionapiicon from "../../assets/icons/notionapiicon.jpg"
import slackapiicon from "../../assets/icons/slackapiicon.png"
import medalicon from "../../assets/icons/medalicon.png"
import aboutmeicon from "../../assets/icons/aboutmeicon.png"
import hobbiesicon from "../../assets/icons/hobbiesicon.png"
import blogsicon from "../../assets/icons/blogsicon.png"
import hemangicon2 from "../../assets/img/kevin-ressegaire.png"
import zemprofiles from "../../assets/icons/zemprofiles.png"
import youtubeicon from "../../assets/icons/youtubeicon.png"
import zempostsicon from "../../assets/icons/zemposts.png"
import zemshowcase from "../../assets/icons/zemshowcase.png"
import astroicon from "../../assets/icons/astroicon.png"
import zemdocs from "../../assets/icons/zemdocs.png"
import phpicom from "../../assets/icons/php.png";
import postgresqlicon from "../../assets/icons/postgre.png";
import mysqlicon from "../../assets/icons/mysql.png";

export const headerIntroData = {
  title: {
    fr: "Salut, je suis Kevin",
    en: "Hi, I'm Kevin",
  },
  subtitle: {
    fr: "Un Développeur Passionné",
    en: "A Passionate Developer",
  },
  description: {
    fr: "",
    en: "",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        fr: "Contactez-moi", 
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        fr: "Mes projets", 
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: hemangicon2,
} as const;

export const projectsData = [
  {
    title: "CineMood",
    description:
      "Posten und vernetzen Sie sich mit Entwicklern",
    description_EN:
      "Post & Connect with Developers",
    technologies: [
      { name: "JavaScript", icon: javascripticon },
      { name: "TypeScript", icon: typescripticon},
      { name: "NodeJS", icon: nodejsicon},
      { name: "ReactJS", icon: reacticon},
      { name: "Astro", icon: astroicon}
      ],
      image: zempostsicon,
      deploymenturl: "https://zemposts.vercel.app",
      githuburl: "https://github.com/Zemerik/ZemPosts",
      githubicon: FiGithub,
      deploymenticon: FiLink,
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
    },  
  {
    title: "ZemProfiles",
    description:
      "Entdecken und vernetzen Sie sich mit Entwicklern",
    description_EN:
      "Discover & Conect with Developers",
      technologies: [
        { name: "JavaScript", icon: javascripticon },
        { name: "Typescript", icon: typescripticon },
        { name: "NodeJS", icon: nodejsicon },
        { name: "ReactJS", icon: reacticon},
      ],
      image: zemprofiles,
      deploymenturl: "https://zemprofiles.vercel.app",
      githuburl:
        "https://github.com/Zemerik/zemprofiles",
      githubicon: FiGithub,
      deploymenticon: FiLink,
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#FFD5BD",
      },
    },
    {
      title: "ZemDocs",
      description: 
        "Ihr Leitfaden zum Meistern von Zem-Projekten",
      description_EN:
        "Your Guide to Mastering Zem Projects",
      technologies: [
        { name: "Astro", icon: astroicon},
        { name: "Javascript", icon: javascripticon},
        { name: "Typescript", icon: typescripticon},
        { name: "ReactJS", icon: reacticon},
        { name: "NodeJS", icon: nodejsicon},
      ],
      image: zemdocs,
      deploymenturl: "https://zemdocs.vercel.app",
      githuburl: "https://github.com/Zemerik/ZemDocs",
      githubicon: FiGithub,
      deploymenticon: FiLink,
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#E3964A",
      },
    },
  {
    title: "ZemShowcase",
    description:
      "Vitrine und vernetzen Sie sich mit Entwicklern",
    description_EN:
      "Showcase & Connect with Developers",
      technologies: [
        { name: "Html", icon: htmlicon },
        { name: "CSS", icon: cssicon },
        { name: "JavaScript", icon: javascripticon },
        { name: "ReactJS", icon: reacticon},
      ],
      image: zemshowcase,
      deploymenturl: "https://zemshowcase.vercel.app",
      githuburl: "https://github.com/Zemerik/ZemShowcase",
      githubicon: FiGithub,
      deploymenticon: FiLink,
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#E3964A",
      },
    },
] as const;

export const liveTickerData = {
  content: {
    fr: "Plus de projets sur GitHub",
    en: "More Projects on GitHub",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: boostrapicon,
        color: "#CC6699",
      },
      // Ajouts
      {
        title: "PHP",
        hash: "#PHP",
        icon: phpicom, // pense à importer ton icône PHP
        color: "#777BB3", // bleu PHP [web:97]
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Backend",
    skills: [
      {
        title: "PostgreSQL",
        hash: "#PostgreSQL",
        icon: postgresqlicon, // icône PostgreSQL à ajouter dans tes imports
        color: "#336791", // bleu PostgreSQL [web:104]
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: mysqlicon, // icône MySQL à ajouter dans tes imports
        color: "#00758F", // bleu MySQL [web:102][web:108]
      },
            {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "API",
    skills: [
      {
        title: "Discord API",
        hash: "#Discord API",
        icon: discordapiicon,
        color: "#21759B",
      },
      {
        title: "Notion API",
        hash: "#Notion API",
        icon: notionapiicon,
        color: "#7AB55C",
      },
      {
        title: "Slack API",
        hash: "#Slack API",
        icon: slackapiicon,
        color: "#4353FF",
      },
    ],
  },
] as const;


export const navLinks = [
  { fr: "Accueil", en: "Home", hash: "#home", icon: GoHome },
  { fr: "Compétences", en: "Skills", hash: "#skills", icon: GoStack },
  { fr: "Projets", en: "Projects", hash: "#projects", icon: GoProject },
  { fr: "À propos de moi", en: "About me", hash: "#about-me", icon: GoPerson },
  { fr: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { fr: "Mentions légales", en: "Imprint", hash: "#imprint", data: <Imprint /> }, 
  { fr: "Politique de confidentialité", en: "Privacy", hash: "#privacy", data: <Privacy /> }, 
] as const;


export const sideBarRightMail = {
  link: "mailto:kevin.ressegaire@gmail.com",
  text: "kevin.ressegaire@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/kevin-ressegaire/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/earzalien",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:kevin.ressegaire@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    fr: `"Ce n'est pas important de réussir du premier coup. L'essentiel est de réussir au final."`,
    en: `#Building-in-Public`,
    author: "Kevin Ressegaire",
  },
  {
    fr: `"Le web est comme une toile, et le code est la peinture. Crée ton chef-d'œuvre."`,
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "À propos de moi",
  title_EN: "About me",
  description: "Quelques lignes de code à propos de moi",
  description_EN: "A few code snippets about me",
  paragraphs_FR: [
    {
      title: "À propos de moi",
      description:
        "Développeur web full-stack en formation à la Wild Code School, passionné par la création d’interfaces modernes et d’APIs robustes, avec un fort intérêt pour l’écosystème JavaScript.",
      icon: aboutmeicon,
    },
    {
      title: "Compétences",
      description:
        "Je travaille principalement avec JavaScript/TypeScript, React, Node.js, PostgreSQL, MongoDB et Git, en appliquant les bonnes pratiques vues en bootcamp (revues de code, tests, travail en équipe).",
      icon: hobbiesicon,
    },
    {
      title: "Parcours",
      description:
        "Au bootcamp Wild Code School, je participe à des projets full-stack collaboratifs comme des applications de recommandation de films, des quiz interactifs et des services REST avec intégration d’APIs externes.",
      icon: medalicon,
    },
    {
      title: "Projets & apprentissages",
      description:
        "Je construis régulièrement de nouveaux projets pour expérimenter des libs, améliorer mon architecture front/back et documenter mon raisonnement technique (choix de stack, gestion des erreurs, performances).",
      icon: blogsicon,
    },
    {
      title: "Veille & curiosité",
      description:
        "Je fais une veille active sur les bonnes pratiques front-end et back-end, les nouveautés autour de React, Node.js et TypeScript, ainsi que les outils modernes de développement et de déploiement.",
      icon: youtubeicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "About Me",
      description:
        "Full-stack web developer in training at Wild Code School, passionate about building modern UIs and robust APIs, with a strong focus on the JavaScript ecosystem."
    },
    {
      title: "Skills",
      description:
        "I mainly work with JavaScript/TypeScript, React, Node.js, PostgreSQL, MongoDB and Git, applying best practices from the bootcamp such as code reviews, testing and teamwork.",
      icon: hobbiesicon,
    },
    {
      title: "Background",
      description:
        "During my Wild Code School bootcamp, I contribute to collaborative full-stack projects like movie recommendation apps, interactive quizzes and REST services integrated with external APIs.",
      icon: medalicon,
    },
    {
      title: "Projects & Learning",
      description:
        "I regularly build new projects to try out libraries, refine my front-end and back-end architecture and clearly document my technical decisions, from stack choices to error handling.",
      icon: blogsicon,
    },
    {
      title: "Tech Watch & Curiosity",
      description:
        "I keep an active eye on modern front-end and back-end practices, new tools around React, Node.js and TypeScript, and up-to-date deployment workflows.",
      icon: youtubeicon,
    },
  ],
};


export const contactData = {
  title: {
    fr: "Contact",
    en: "Contact",
  },
  description: {
    fr: "Écrivez-moi un message et je vous répondrai rapidement.",
    en: "Write me a message and I will get back to you shortly.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        fr: "Votre nom",
        en: "Your Name",
      },
      type: "text",
      validation: {
        fr: "Veuillez entrer votre nom",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        fr: "Votre adresse e-mail",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        fr: "Veuillez entrer votre adresse e-mail",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        fr: "Votre sujet",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        fr: "Veuillez entrer un sujet",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      fr: "Votre message",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      fr: "Veuillez entrer votre message",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      fr: "Envoyer",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      fr: "J'accepte que Kevin Ressegaire utilise mes données personnelles (nom et adresse e-mail) pour me contacter.",
      en: "I agree that Kevin Ressegaire may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      fr: "En envoyant cette demande, vous confirmez avoir lu la politique de confidentialité.",
      en: "By submitting this request, you acknowledge that you have read the Privacy Policy.",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    fr: "🦄 La démo en ligne va bientôt s’ouvrir. Démarrage des serveurs...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    fr: "🦄 Merci pour votre email. Je vous répondrai dès que possible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible.",
  },
  failedEmailSent: {
    fr: "🦄 L’envoi de votre email n’a pas fonctionné. Veuillez réessayer plus tard ou écrire à kevin.ressegaire@example.com.",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later or email kevin.ressegaire@example.com.",
  },
  failedValidationName: {
    fr: "Veuillez entrer votre nom",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    fr: "FR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
