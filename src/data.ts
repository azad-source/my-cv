import { faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCity, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import avatar from "./images/avatar.png";
import portfolio_webdev from "./images/portfolios/webdev.png";
import portfolio_calculator from "./images/portfolios/calculator.png";
import portfolio_momentum from "./images/portfolios/momentum.png";
import portfolio_virtualKeyboard from "./images/portfolios/virtual-keyboard.png";
import portfolio_pureWater from "./images/portfolios/pure-water.png";
import portfolio_timelineDashboard from "./images/portfolios/timeline-dashboard.png";
import portfolio_achord from "./images/portfolios/achord.png";
import portfolio_notes from "./images/portfolios/notes.png";
import portfolio_recipes from "./images/portfolios/recipes.png";

export const contactsInfo = {
  post: "",
  city: "Dubai",
  region: "Dubai",
  country: "United Arab Emirates",
  email: "azad.63.mamedov@gmail.com",
  phone: "+971 582315416",
  linkedin: "azad-mamedov",
  facebook: "azad.mamedov.338",
  telegram: "azad_63_mamedov",
};

export const data = {
  avatar,
  name: "Azad MAMEDOV",
  positionTitle: "Frontend Developer",
  contacts: [
    {
      title: "location",
      href: null,
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
      title: "linkedin",
      href: `https://www.linkedin.com/in/${contactsInfo.linkedin}/`,
      value: `https://linkedin.com/in/${contactsInfo.linkedin}/`,
      icon: faLinkedin,
    },
  ],
  about:
    `I have more than ${
      new Date().getFullYear() - 2019
    } years of experience in web development and I really like to work with customers and provide high\u2011quality service and quick responses. ` +
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
      company: "Plusmedia - Samara",
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
      title: "Java Script",
      items: [
        {
          name: "Webdev",
          link: "https://azad-source.github.io/webdev/",
          image: portfolio_webdev,
        },
        {
          name: "Calculator",
          link: "https://azad-source.github.io/calculator/",
          image: portfolio_calculator,
        },
        {
          name: "Momentum",
          link: "https://azad-source.github.io/momentum/",
          image: portfolio_momentum,
        },
        {
          name: "Virtual keyboard",
          link: "https://azad-source.github.io/virtual-keyboard/",
          image: portfolio_virtualKeyboard,
        },
        {
          name: "Pure water",
          link: "https://azad-source.github.io/pure-water/",
          image: portfolio_pureWater,
        },
        {
          name: "Timeline dashboard",
          link: "https://azad-source.github.io/timeline-dashboard/",
          image: portfolio_timelineDashboard,
        },
      ],
    },
    {
      title: "React.js",
      items: [
        {
          name: "Achord",
          link: "https://achord.ru/",
          image: portfolio_achord,
        },
      ],
    },
    {
      title: "Vue.js",
      items: [
        {
          name: "Task manager",
          link: "https://azad-source.github.io/notes/dist/",
          image: portfolio_notes,
        },
      ],
    },
    {
      title: "MEVN (Vue Vuex Node Express MongoDB)",
      items: [
        {
          name: "Recipe manager",
          link: "https://azad-source.github.io/recipes/dist/",
          image: portfolio_recipes,
        },
      ],
    },
  ],
  skills: [
    {
      title: "languages",
      items: [
        { name: "JavaScript", progress: "75%", start: new Date("01.01.2019") },
        { name: "TypeScript", progress: "60%", start: new Date("01.01.2019") },
        { name: "HTML", progress: "90%", start: new Date("01.01.2019") },
        { name: "CSS", progress: "90%", start: new Date("01.01.2019") },
        { name: "SASS/SCSS", progress: "90%", start: new Date("01.01.2019") },
      ],
    },
    {
      title: "Frmwks / lib",
      items: [
        { name: "ReactJS", progress: "80%", start: new Date("02.01.2020") },
        { name: "Next.js", progress: "40%", start: new Date("03.01.2022") },
        { name: "Vue.js", progress: "20%", start: new Date("04.01.2022") },
        { name: "RTK", progress: "80%", start: new Date("02.01.2020") },
        { name: "RTK Query", progress: "80%", start: new Date("02.01.2020") },
        { name: "Redux Thunk", progress: "75%", start: new Date("02.01.2020") },
        { name: "Redux Saga", progress: "55%", start: new Date("02.01.2021") },
        { name: "Mobx", progress: "25%", start: new Date("02.01.2021") },
      ],
    },
    {
      title: "tools",
      items: [
        { name: "webpack", progress: "60%", start: new Date("01.10.2022") },
        { name: "vite", progress: "60%", start: new Date("01.10.2022") },
        { name: "playwright", progress: "60%", start: new Date("01.10.2022") },
        { name: "jest", progress: "30%", start: new Date("01.02.2021") },
        { name: "vitest", progress: "30%", start: new Date("01.02.2021") },
        { name: "storybook", progress: "75%", start: new Date("05.01.2021") },
        { name: "creevey", progress: "70%", start: new Date("01.11.2021") },
        { name: "git", progress: "80%", start: new Date("05.01.2019") },
        {
          name: "ci/cd gitlab",
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
