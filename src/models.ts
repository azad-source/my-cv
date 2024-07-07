import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IPortfolio {
  name: string;
  description: string;
  image: string;
  repoLink: string;
  demoLink: string;
  stackList: string[];
}

interface IContact {
  title: string;
  href?: string;
  value: string;
  icon: IconDefinition;
}

interface IEducation {
  degree: string;
  fieldTitle: string;
  establishment: string;
  date: string;
  location: string;
  description: string;
}

interface ICourse {
  degree: string;
  establishment: string;
  date: string;
  location: string;
  description: {
    title: string;
    list: string[];
  };
}

interface IExperience {
  position: string;
  company: string;
  date: string;
  location: string;
  description: {
    title: string;
    list: string[];
  };
  skills: string[];
}

interface ISkillItem {
  name: string;
  progress: string;
  start: Date;
}

interface ISkill {
  title: string;
  items: ISkillItem[];
}

interface ILang {
  language: string;
  level: string;
  description: string;
}

export interface IData {
  avatar: string;
  name: string;
  positionTitle: string;
  contacts: IContact[];
  about: string;
  education: IEducation[];
  courses: ICourse[];
  experience: IExperience[];
  portfolios: IPortfolio[];
  skills: ISkill[];
  langs: ILang[];
}
