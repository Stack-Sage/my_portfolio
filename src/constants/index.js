import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
 listly,
 keetmd,
  

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front - end  React - Next ",
    icon: mobile,
  },
  {
    title: "Backend (node.js) ",
    icon: backend,
  },
  {
    title: "Python (AI & ML)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Internshalla",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - July 2024",
    points: [
      "Learning Some latest Technologies of Web , like next js and three js ",
      "Developing and maintaining web applications using React.js and other related technologies.",
     
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Adarsh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },

];

const projects = [
  {
    name: "Keet-20",
    description:
      "Web-based platform that allows users to search copyright free images and allows user to download it for their use without any restrictions or copyright issues.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: keetmd,
    source_code_link: "https://github.com/Stack-Sage/image-search-dark",
  },
  {
    name: "ListLy-v20",
    description:
      "Web application that enables users to List their todo's of the day and perform their task more effectively and be more productive ...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: listly,
    source_code_link: "https://github.com/Stack-Sage/listly",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
