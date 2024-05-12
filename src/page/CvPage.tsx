import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "clsx";
import { faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import styles from "./CvPage.module.scss";
import { data } from "data";
import { Button } from "components/layout/Button/Button";

export const CvPage = () => {
  const {
    avatar,
    name,
    positionTitle,
    contacts,
    experience,
    education,
    courses,
    skills,
    langs,
  } = data;

  const socials = contacts.filter(({ title }) =>
    ["e-mail", "linkedin", "location", "phone"].includes(title)
  );

  const handleGeneratePdf = () => {
    // const options = { format: "A4" };
    // const file = { url: "/" };
    // generatePdf(file, options);
    console.log("asd");
  };

  return (
    <div className={styles.root}>
      <div className={styles.backLink}>
        <a href="/">Назад</a>
      </div>
      <Button className={styles.generatePdfBtn} onClick={handleGeneratePdf}>
        Generate PDF
      </Button>
      <div className={styles.page}>
        <div className={styles.head}>
          <div className={styles.info}>
            <div className={styles.info__name}>{name}</div>
            <div className={styles.info__position}>{positionTitle}</div>
            <div className={styles.info__contacts}>
              {socials.map(({ href, value, icon }) => (
                <div key={href} className={styles.contactItem}>
                  <FontAwesomeIcon
                    icon={icon}
                    className={styles.soicalIcon}
                    size="2x"
                  />
                  {href ? (
                    <a
                      href={href}
                      title={value}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {value}
                    </a>
                  ) : (
                    <div>{value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.avatar}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <div className={cx(styles.section, styles.experience)}>
              <div className={styles.title}>Expirence</div>
              <div className={styles.list}>
                {experience.map(
                  ({ company, date, position, location, shortDescription }) => (
                    <div className={styles.list__item}>
                      <div className={styles.itemTitle}>{position}</div>
                      <div className={styles.itemPlace}>{company}</div>
                      <div className={styles.itemDateLocation}>
                        <div className={styles.date}>
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className={styles.icon}
                          />
                          {date}
                        </div>
                        <div className={styles.location}>
                          <FontAwesomeIcon
                            icon={faLocationArrow}
                            className={styles.icon}
                          />
                          {location}
                        </div>
                      </div>
                      <div className={styles.itemDescription}>
                        {shortDescription}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={cx(styles.section, styles.education)}>
              <div className={styles.title}>Education</div>
              <div className={styles.list}>
                {education.map(
                  ({ date, degree, description, establishment, location }) => (
                    <div className={styles.list__item}>
                      <div className={styles.itemTitle}>{degree}</div>
                      <div className={styles.itemPlace}>{establishment}</div>
                      <div className={styles.itemDateLocation}>
                        <div className={styles.date}>
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className={styles.icon}
                          />
                          {date}
                        </div>
                        <div className={styles.location}>
                          <FontAwesomeIcon
                            icon={faLocationArrow}
                            className={styles.icon}
                          />
                          {location}
                        </div>
                      </div>
                      <div className={styles.itemDescription}>
                        {description}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <div className={cx(styles.section, styles.training)}>
              <div className={styles.title}>Training / Courses</div>
              <div className={styles.list}>
                {courses.map(
                  ({
                    date,
                    degree,
                    shortDescription,
                    establishment,
                    location,
                  }) => (
                    <div className={styles.list__item}>
                      <div className={styles.itemTitle}>{degree}</div>
                      <div className={styles.itemPlace}>{establishment}</div>
                      <div className={styles.itemDateLocation}>
                        <div className={styles.date}>
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className={styles.icon}
                          />
                          {date}
                        </div>
                        <div className={styles.location}>
                          <FontAwesomeIcon
                            icon={faLocationArrow}
                            className={styles.icon}
                          />
                          {location}
                        </div>
                      </div>
                      <div className={styles.itemDescription}>
                        {shortDescription}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={cx(styles.section, styles.skills)}>
              <div className={styles.title}>Skills</div>
              <div className={styles.list}>
                {skills.map((section) => (
                  <div key={section.title} className={styles.subSection}>
                    <div className={styles.subSection__title}>
                      {section.title}
                    </div>
                    <div className={styles.subSection__list}>
                      {section.items.map((i) => (
                        <div key={i.name} className={styles.listItem}>
                          {i.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx(styles.section, styles.languages)}>
              <div className={styles.title}>Languages</div>
              <div className={styles.list}>
                {langs.map((l) => (
                  <div key={l.language}>
                    {l.language} - {l.level}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
