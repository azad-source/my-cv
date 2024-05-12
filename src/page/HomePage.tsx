import { About } from "components/About/About";
import { Contacts } from "components/Contacts/Contacts";
import { Education } from "components/Education/Education";
import { Experience } from "components/Experience/Experience";
import { Languages } from "components/Languages/Languages";
import { Portfolios } from "components/Portfolios/Portfolios";
import { Skills } from "components/Skills/Skills";
import { Footer } from "components/layout/Footer/Footer";
import { Header } from "components/layout/Header/Header";
import mainBg from "images/main-bg.png";

export const HomePage = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${mainBg})` }}>
      <Header />
      <div className="main-wrapper">
        <About />
        <Experience />
        <Education />
        <Portfolios />
        <Skills />
        <Languages />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
};
