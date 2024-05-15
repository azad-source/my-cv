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
    "I have more than 5 years of experience in web development and I really like to work with customers and provide high-quality service and quick responses. I like to discover new technologies, search out for effective decisions, and grow as a professional. Working with a variety of technologies and tools helps me to use proven best practices for existing challenges, predict application behavior and prevent bugs and incidents. Contact me if you want to work with a reliable and experienced developer. Lets get the job done!",
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
      degree: "Frontend developer",
      establishment: "EPAM courses",
      date: "09/2020 - 12/2020",
      location: "Samara, Russia",
      shortDescription: {
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
      description:
        "JS Core, Event Loop, JavaScript Asynchronous, features of es6/7/8, ReactJS",
    },
  ],
  experience: [
    {
      position: "Mechanical Engineer",
      company: "Safran SMARTEC - Samara",
      date: "02/2014 – 12/2018",
      location: "Samara, Russia",
      shortDescription: {
        title:
          "During my five-year tenure at Safran SMARTEC, I played a key role in structural analysis of engine components. Responsibilities included:",
        list: [
          "Conducting thorough linear and nonlinear analyses to assess mechanical behaviors under different conditions.",
          "Developing intricate finite element models with accurate material properties for real-world simulations.",
          "Collaborating with material experts to specify critical material properties for accurate simulations.",
          "Executing complex simulations and compiling detailed reports on structural integrity and performance.",
          "Contributing to informed decision-making and advancements in engine component design.",
        ],
      },
      description: `As an integral member of the Safran SMARTEC team for five years, my primary responsibilities revolved around performing structural linear and nonlinear analysis on engine components. Throughout my tenure, I have effectively contributed to the following key tasks:
                Linear and Nonlinear Analysis: I conducted comprehensive structural linear and nonlinear analysis on intricate engine nodes, meticulously assessing their mechanical behaviors and responses under varying operational conditions. This involved utilizing advanced analysis techniques to ensure the reliability and robustness of engine components.
                Finite Element Modeling: I was tasked with developing intricate finite element models, incorporating accurate material properties and load distributions. These models were pivotal in simulating real-world scenarios, allowing us to predict how engine nodes would perform and react under different stress factors.
                Material Property Determination: Collaborating closely with material experts, I assisted in identifying and specifying material properties critical for accurate simulations. This process ensured that the simulations closely mirrored the actual behavior of the engine components, enhancing the precision of our analysis.
                Calculation Execution: I successfully executed complex simulations by launching the finite element models on specified operating conditions. This step involved setting up and configuring the simulations to accurately represent real-world scenarios, capturing both expected and unexpected performance nuances.
                Results Reporting: Post-simulation, I compiled comprehensive and detailed reports highlighting the outcomes of our analyses. These reports encompassed vital insights into the structural integrity, stress distribution, and overall performance of the engine nodes under various loads and conditions. Clear and concise visualization of results helped guide engineering decisions and optimizations.
                In summary, my role at Safran SMARTEC involved a diverse range of responsibilities, from crafting intricate finite element models to conducting thorough linear and nonlinear analyses of engine nodes. The culmination of these efforts was the creation of insightful reports that facilitated informed decision-making and further advancements in engine component design and performance. My five-year journey at Safran SMARTEC has deepened my expertise in structural analysis and solidified my commitment to contributing to cutting-edge engineering solutions.`,
      languages: null,
      tools: "Software: ICEM, Patran, Ansys Workbench, Samcef, Abaqus",
    },
    {
      position: "Web Developer",
      company: "Plusmedia - Samara",
      date: "01/2019 – 02/2021",
      location: "Samara, Russia",
      shortDescription: {
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
      description: `During my enriching two-year tenure at Plusmedia, my role primarily encompassed website development and optimization. I adeptly managed a diverse set of responsibilities, contributing significantly to the growth and success of the company's digital presence. My key responsibilities included:
                Website Design and Development: I played an integral role in the design and development of visually appealing and user-friendly websites. Leveraging my proficiency in HTML, CSS, and JavaScript, I crafted engaging and responsive web layouts that resonated with the target audience, enhancing user experience.
                Website Optimization: As part of the optimization process, I meticulously analyzed and fine-tuned existing websites to enhance their speed, performance, and overall user satisfaction. Implementing techniques such as image compression, code minification, and caching, I ensured seamless browsing experiences for site visitors.
                CMS Expertise: I demonstrated expertise in various content management systems (CMS) including Bitrix, MODX, Joomla, and WordPress. This proficiency allowed me to seamlessly navigate these platforms, customize functionalities, and create engaging and dynamic web content.
                Site Deployment and Migration: I successfully managed the deployment and seamless migration of websites across different environments. This involved meticulous planning, testing, and execution to ensure that the transition was smooth and free of disruptions.
                Server Configuration: I skillfully configured servers using technologies like Nginx and Apache, optimizing them for website hosting and performance. My responsibilities included setting up virtual hosts, SSL certificates, and other server-related configurations.
                Package Installation: I took charge of installing and configuring essential software packages required for website operation. This included database management systems, scripting languages, and other server-side components necessary for the seamless functioning of websites.
                Throughout my tenure, I continuously collaborated with cross-functional teams, including designers, developers, and content creators, to ensure the successful execution of projects. My commitment to delivering high-quality websites, optimizing user experiences, and mastering a range of CMS platforms has greatly contributed to Plusmedia's reputation as a leading digital solutions provider.
                In summary, my two-year journey at Plusmedia has honed my skills in website design, optimization, CMS management, and server configuration. My ability to deploy, optimize, and maintain websites has played a pivotal role in enhancing Plusmedia's online presence and delivering exceptional digital experiences to clients and end-users alike.`,
      languages: "Languages: HTML5, CSS3, Jquery, PHP7.x, Mysql",
      tools: "Git, Photoshop, Figma, Sublime Text",
    },
    {
      position: "Frontend developer",
      company: "SKB Kontur",
      date: "03/2021 – to Present",
      location: "remote",
      shortDescription: {
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
      description: `As a Frontend Developer at SKB Kontur, I would embrace the following roles and responsibilities to contribute effectively to the team:
                Building Interactive User Interfaces: Leveraging my expertise in ReactJs, Typescript, and JavaScript, I would be responsible for creating captivating and responsive user interfaces that deliver an exceptional user experience.
                State Management and Data Flow: Utilizing Redux, including TK, TK Query, Saga, and Thunk, I would manage state and data flow within the application, ensuring efficient communication between components and seamless application behavior.
                Testing and Quality Assurance: Employing Playwright and Jest, I would design and implement comprehensive unit tests and end-to-end tests, validating the functionality and performance of the application to maintain high code quality and stability.
                Component Library Development: Using Storybook, I would create and maintain a well-organized and visually appealing component library, facilitating seamless collaboration and enhancing the development process.
                CSS Styling and Adaptation: Implementing SCSS, I would design adaptable layouts that ensure cross-browser compatibility and optimal performance across various devices, maintaining a consistent and visually pleasing user interface.
                Collaboration and Communication: Engaging in regular communication with cross-functional teams, I would actively participate in discussions, share insights, and contribute to decision-making processes to achieve project goals effectively.
                Code Optimization and Performance: Continuously optimizing and refining the codebase to enhance application performance, I would apply best practices and explore innovative solutions to create a faster and more efficient frontend experience.
                Problem Solving and Troubleshooting: Addressing technical challenges and bugs, I would analyze and resolve issues promptly, ensuring a smooth user experience and minimizing disruptions.
                By embracing these responsibilities and utilizing my skills in ReactJs, Typescript, Redux, Playwright, Jest, SCSS, and more, I am dedicated to driving SKB Kontur's frontend development to new heights, delivering top-tier web applications that align with the company's goals and values.`,
      languages:
        "Languages/Frameworks/Libraries: HTML5, CSS3, SASS/SCSS, JavaScript, TypeScript, ReactJS, RTK, RTK Query, Redux Thunk, Redux Saga, Mobx",
      tools:
        "Tools: VS Code, Gitlab, Gitlab CI/CD, Webpack, Storybook, Creevey, Jest, Playwright, Figma, YouTrack",
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
        { name: "playwright", progress: "60%", start: new Date("01.10.2022") },
        { name: "jest", progress: "30%", start: new Date("01.02.2021") },
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
