import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Page } from "components/layout/Page/Page";
import { Button } from "components/layout/Button/Button";
import { data } from "data";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.scss";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CvPdfView } from "components/CvPdfView/CvPdfView";

const { avatar, name, positionTitle: position, contacts, about } = data;

const socials = contacts.filter(({ title }) =>
  ["e-mail", "telegram", "whatsapp", "facebook", "linkedin"].includes(title)
);

export const About = () => {
  const navigate = useNavigate();

  const goToCvPage = () => {
    navigate("/cv-pdf");
  };

  return (
    <Page className={styles.root} id="about">
      <div className={styles.block_1}>
        <h1>{name}</h1>
        <div className={styles.position}>{position}</div>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className={styles.block_2}>
        <div className={styles.socials}>
          <ul>
            {socials.map(({ href, value, icon }) => (
              <li key={href}>
                {!!href && !!icon && (
                  <a href={href} title={value} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={icon}
                      className={styles.soicalIcon}
                      size="2x"
                    />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.text}>
          <p>{about}</p>
        </div>
        <div className={styles.btnWrapper}>
          <PDFDownloadLink
            document={<CvPdfView />}
            fileName={`CV_${name.replace(" ", "_")}`}
            className={styles.pdfDownloadLink}
          >
            {({ loading }) => (loading ? "Loading..." : "Download CV")}
          </PDFDownloadLink>
          <Button id="open_pdv" onClick={goToCvPage}>
            Open CV Page
          </Button>
        </div>
      </div>
    </Page>
  );
};
