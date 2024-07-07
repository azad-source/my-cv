import {
  faTelegram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCity, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import avatar from "./images/avatar.png";
import avatarV2 from "./images/avatar_transparent.png";
import portfolio_webdev from "./images/portfolios/webdev.png";
import portfolio_calculator from "./images/portfolios/calculator.png";
import portfolio_momentum from "./images/portfolios/momentum.png";
import portfolio_virtualKeyboard from "./images/portfolios/virtual-keyboard.png";
import portfolio_pureWater from "./images/portfolios/pure-water.png";
import portfolio_furniro from "./images/portfolios/furniro.png";
import portfolio_timelineDashboard from "./images/portfolios/timeline-dashboard.png";
import portfolio_achord from "./images/portfolios/achord.png";
import portfolio_notes from "./images/portfolios/notes.png";
import { IData } from "models";

export const contactsInfo = {
  post: "",
  city: "Dubai",
  region: "Dubai",
  country: "United Arab Emirates",
  email: "azad.63.mamedov@gmail.com",
  phone: "+971582315416",
  linkedin: "azad-mamedov",
  facebook: "azad.mamedov.338",
  telegram: "azad_63_mamedov",
};

const yearsOfExperience = new Date().getFullYear() - 2019;

export const data: IData = {
  avatar,
  avatarV2,
  name: "Azad MAMEDOV",
  positionTitle: "Frontend Developer",
  contacts: [
    {
      title: "location",
      value: `${contactsInfo.city}, ${contactsInfo.region}, ${contactsInfo.country}`,
      icon: faCity,
    },
    {
      title: "e-mail",
      href: `mailto:${contactsInfo.email}`,
      value: contactsInfo.email,
      icon: faEnvelope,
    },
    {
      title: "phone",
      href: `tel:${contactsInfo.phone.replace(/\s/g, "")}`,
      value: contactsInfo.phone,
      icon: faPhone,
    },
    {
      title: "telegram",
      href: `https://t.me/${contactsInfo.telegram}`,
      value: `@${contactsInfo.telegram}`,
      icon: faTelegram,
    },
    {
      title: "whatsapp",
      href: `https://wa.me/${contactsInfo.phone.replace("+", "")}`,
      value: contactsInfo.phone,
      icon: faWhatsapp,
    },
    {
      title: "linkedin",
      href: `https://www.linkedin.com/in/${contactsInfo.linkedin}/`,
      value: `https://linkedin.com/in/${contactsInfo.linkedin}/`,
      icon: faLinkedin,
    },
  ],
  shortAbout:
    `Hi! I'am a frontend developer with over ${yearsOfExperience} years of experience. ` +
    "Seeking an opportunity to work in a challenging environment to " +
    "prove my skills and utilize my knowledge & intelligence in the " +
    "growth of the organization.",
  about:
    `I have more than ${yearsOfExperience} years of experience in web development and I really like to work with customers and provide high\u2011quality service and quick responses. ` +
    "I like to discover new technologies, search out for effective decisions, and grow as a professional. " +
    "Working with a variety of technologies and tools helps me to use proven best practices for existing challenges, predict application behavior and prevent bugs and incidents. " +
    "Contact me if you want to work with a reliable and experienced developer. " +
    "Lets get the job done!",
  education: [
    {
      degree: "Bachelor Of Engineering",
      fieldTitle: "Aircraft engines and power plants",
      establishment: "Samara State Aerospace University",
      date: "09/2008 - 07/2011",
      location: "Samara, Russia",
      description: "",
    },
    {
      degree: "Master Of Engineering",
      fieldTitle: "Aircraft Engine",
      establishment: "Samara State Aerospace University",
      date: "09/2011 - 07/2014",
      location: "Samara, Russia",
      description: "",
    },
  ],
  courses: [
    {
      degree: "",
      establishment: "EPAM courses",
      date: "",
      location: "",
      description: {
        title: "The main topics covered in the course:",
        list: [
          "JS Core",
          "JavaScript Asynchronous / Event Loop",
          "Callback, HOC",
          "Closure",
          "Proto / Prototype",
          "Classes",
        ],
      },
    },
    {
      degree: "",
      establishment: "frontendmasters.com",
      date: "",
      location: "",
      description: {
        title: "",
        list: [
          "JavaScript: The Hard Parts (Will Sentance)",
          "Deep JavaScript Foundations (Kyle Simpson)",
          "Web Performance Fundamentals (Todd Gardner)",
          "Full Stack for Front-End Engineers (Jem Young)",
        ],
      },
    },
  ],
  experience: [
    {
      position: "Web Developer",
      company: "Plusmedia",
      date: "01/2019 – 02/2021",
      location: "Samara, Russia",
      description: {
        title:
          "I focused on website development and optimization, contributing significantly to the company's digital growth.",
        list: [
          "Design and develop visually appealing, user-friendly websites using HTML, CSS, and JavaScript.",
          "Optimize website speed and performance through techniques like image compression and code minification.",
          "Manage website deployment and migration across different environments.",
          "Configure servers with Nginx and Apache for optimal hosting performance.",
          "Install and configure essential software packages for website operation.",
        ],
      },
      skills: [
        "HTML5",
        "CSS3",
        "Jquery",
        "php",
        "mysql",
        "git",
        "photoshop",
        "figma",
      ],
    },
    {
      position: "Frontend developer",
      company: "SKB Kontur",
      date: "03/2021 – to Present",
      location: "remote",
      description: {
        title:
          "As a Frontend Developer at SKB Kontur, I'd take on the following responsibilities:",
        list: [
          "Build Interactive User Interfaces: Use React, Redux, and Typescript to craft engaging, responsive interfaces for an outstanding user experience.",
          "Manage State and Data Flow: Implement Redux Toolkit Query to efficiently handle state and data flow, ensuring seamless communication between components.",
          "Conduct Testing: Employ Playwright and Jest for comprehensive unit and end-to-end testing, maintaining high code quality and stability.",
          "Develop Component Library: Utilize Storybook to create and maintain a visually appealing component library, streamlining collaboration and development.",
          "Style with SCSS: Design adaptable layouts with SCSS for cross-browser compatibility and optimal performance on diverse devices.",
          "Foster Collaboration: Communicate regularly with cross-functional teams, contributing insights and aiding decision-making for project success.",
          "Troubleshoot: Address technical challenges and bugs promptly to maintain a smooth user experience.",
        ],
      },
      skills: [
        "HTML5",
        "SASS/SCSS",
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "webpack",
        "vite",
        "Redux Tool Kit",
        "RTK Query",
        "Redux Thunk",
        "Redux Saga",
        "gitlab",
        "gitlab ci/cd",
        "Storybook",
        "Playwright",
        "Jest",
        "figma",
        "YouTrack",
      ],
    },
  ],
  portfolios: [
    {
      name: "Achord",
      demoLink: "https://achord.ru/",
      image: portfolio_achord,
      description:
        "Achord is a comprehensive resource for piano sheet music, " +
        "organized by genre and alphabetically. Users can easily search " +
        "for sheet music by title or author, making it an ideal destination " +
        "for pianists of all levels",
      repoLink: "https://github.com/azad-source/achord.ru",
      stackList: [
        "ReactJs",
        "Typescript",
        "Webpack",
        "RTK Query",
        "SASS",
        "Axios",
      ],
    },
    {
      name: "Furniro",
      demoLink: "https://azad-source.github.io/furniro/",
      image: portfolio_furniro,
      description:
        "Furniro is an online store where you can order furniture, explore " +
        "interior designs, and choose your preferred style. " +
        "It offers a seamless shopping experience with a wide " +
        "range of options to fit any aesthetic.",
      repoLink: "https://github.com/azad-source/furniro",
      stackList: [
        "ReactJs",
        "Typescript",
        "Vite",
        "Zustand",
        "Styled-components",
      ],
    },
    {
      name: "Pure water",
      demoLink: "https://azad-source.github.io/pure-water/",
      image: portfolio_pureWater,
      description:
        "Pure Water simplifies the water ordering process by allowing " +
        "users to specify delivery date, time, volume, address, " +
        "and recipient details in a straightforward form. This service " +
        "ensures a seamless and convenient water delivery experience. ",
      repoLink: "https://github.com/azad-source/pure-water",
      stackList: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Virtual keyboard",
      demoLink: "https://azad-source.github.io/virtual-keyboard/",
      image: portfolio_virtualKeyboard,
      description:
        "This virtual keyboard component allows you to perform nearly " +
        "all the same actions as a regular physical keyboard. " +
        "Enjoy the convenience and flexibility of typing and " +
        "inputting commands virtually.",
      repoLink: "https://github.com/azad-source/virtual-keyboard",
      stackList: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Calculator",
      demoLink: "https://azad-source.github.io/calculator/",
      image: portfolio_calculator,
      description:
        "This page features a versatile calculator capable " +
        "of performing addition, subtraction, multiplication, " +
        "division, exponentiation, root extraction, and percentage calculations. " +
        "Enjoy a pleasant animated space background while you compute.",
      repoLink: "https://github.com/azad-source/calculator",
      stackList: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Momentum",
      demoLink: "https://azad-source.github.io/momentum/",
      image: portfolio_momentum,
      description:
        "This page displays the current time, an input field " +
        "for your name, and a task list for today. You can change " +
        "the background, view inspirational quotes, and check the weather " +
        "for your selected city.",
      repoLink: "https://github.com/azad-source/momentum",
      stackList: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Timeline dashboard",
      demoLink: "https://azad-source.github.io/timeline-dashboard/",
      image: portfolio_timelineDashboard,
      description:
        "This dashboard component displays employee schedules, " +
        "including work attendance and break times. It allows " +
        "viewing by departments and individual employees for a specified date.",
      repoLink: "https://github.com/azad-source/timeline-dashboard",
      stackList: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Webdev",
      demoLink: "https://azad-source.github.io/webdev/",
      image: portfolio_webdev,
      description:
        "Service for providing a comprehensive web " +
        "development learning plan, designed to guide " +
        "you from beginner to expert. Start your journey " +
        "today and master the skills needed for a successful " +
        "career in web development.",
      repoLink: "https://github.com/azad-source/webdev",
      stackList: ["HTML", "CSS"],
    },
    {
      name: "Notes",
      demoLink: "https://azad-source.github.io/notes/dist/",
      image: portfolio_notes,
      description:
        "Notes is a task management application designed " +
        "as a to-do list for planning and organizing tasks efficiently. " +
        "Keep track of your tasks, prioritize them, and stay productive with ease.",
      repoLink: "https://github.com/azad-source/notes",
      stackList: ["Vue", "Typescript", "SASS"],
    },
  ],
  skills: [
    {
      title: "Programming Languages and Web Technologies",
      items: [
        { name: "JavaScript", progress: "75%", start: new Date("01.01.2019") },
        { name: "TypeScript", progress: "60%", start: new Date("01.01.2019") },
        { name: "HTML", progress: "90%", start: new Date("01.01.2019") },
        { name: "CSS", progress: "90%", start: new Date("01.01.2019") },
        { name: "SASS/SCSS", progress: "90%", start: new Date("01.01.2019") },
      ],
    },
    {
      title: "Frameworks and Libraries",
      items: [
        { name: "ReactJS", progress: "80%", start: new Date("02.01.2020") },
        { name: "Next.js", progress: "40%", start: new Date("03.01.2022") },
        { name: "Vue.js", progress: "20%", start: new Date("04.01.2022") },
      ],
    },
    {
      title: "State Management",
      items: [
        { name: "RTK", progress: "80%", start: new Date("02.01.2020") },
        { name: "RTK Query", progress: "80%", start: new Date("02.01.2020") },
        { name: "Redux Thunk", progress: "75%", start: new Date("02.01.2020") },
        { name: "Redux Saga", progress: "55%", start: new Date("02.01.2021") },
        { name: "Mobx", progress: "25%", start: new Date("02.01.2021") },
        { name: "Zustand", progress: "25%", start: new Date("02.01.2021") },
      ],
    },
    {
      title: "Testing and Documentation",
      items: [
        { name: "Playwright", progress: "60%", start: new Date("01.10.2022") },
        { name: "Jest", progress: "30%", start: new Date("01.02.2021") },
        { name: "Vitest", progress: "30%", start: new Date("01.02.2021") },
        { name: "Storybook", progress: "75%", start: new Date("05.01.2021") },
        { name: "Creevey", progress: "70%", start: new Date("01.11.2021") },
      ],
    },
    {
      title: "Build and Styling Tools",
      items: [
        { name: "Webpack", progress: "60%", start: new Date("01.10.2022") },
        { name: "Vite", progress: "60%", start: new Date("01.10.2022") },
        {
          name: "Styled-components",
          progress: "45%",
          start: new Date("02.01.2021"),
        },
      ],
    },
    {
      title: "Version Control and CI/CD",
      items: [
        { name: "Git", progress: "80%", start: new Date("05.01.2019") },
        {
          name: "CI/CD gitlab",
          progress: "40%",
          start: new Date("01.01.2022"),
        },
      ],
    },
  ],
  langs: [
    {
      language: "english",
      level: "B1",
      description: "intermediate, conversational, competent",
    },
    {
      language: "russian",
      level: "native speaker",
      description: "intermediate, conversational, competent",
    },
  ],
};
