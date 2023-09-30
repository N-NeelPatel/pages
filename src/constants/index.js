import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  django,
  svelte,
  cpp,
  postgres,
  fastapi,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ONBO,
  cds,
  carrent,
  jobit,
  videochain,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "BlockChain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Svelte",
    icon: svelte,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Fastapi",
    icon: fastapi,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Crest Data Systems",
    icon: cds, // crest icon
    iconBg: "#E6DEDD",
    date: "January 2021 - April 2022",
    points: [
      "Developed an automated test framework using WebDriverIO and incorporated it into the application's Jenkins pipeline which resulted in the decrease of client reported bugs by 17% quarter on quarter.",
      "Built 40+ Splunk dashboards for use cases in IT/Security monitoring. Developed a company-wide CI/CD pipeline for Splunk 3rd-party projects.",
      "Migrated UI framework used in building 100+ Splunk add-ons to ReactJS",
      "Developed and maintained splunk apps using React.js, Python and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "TechLead",
    company_name: "ONBO",
    icon: ONBO, // onbo icon
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Developed a fullstack application from scratch using Svelte, React in the frontend and created a fully functional backend architecture from scratch using Django, Postgres.",
      "Revamped vital features of the proposed solution partnering with design to target increased product adoption.",
      "Led a team of 4 engineers and facilitated the effective project execution and delivery.",
      "Directed the product roadmap and used agile methodologies to facilitate the development of MVP within 4 months from ideation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Video Chain",
    description:
      "A blockchain based Decentralised video application to stream, upload, manage videos on Blockchain. A Solidity Smart Contract is responsible for managing these functionalities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: videochain,
    source_code_link: "https://github.com/N-NeelPatel/VideoChain",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
