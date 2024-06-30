import cn from "clsx";
import { Page } from "components/layout/Page/Page";
import { data } from "data";
import styles from "./Education.module.scss";

const { education, courses } = data;

export const Education = () => {
  const educationsList = [...education].reverse();
  const coursesList = [...courses].reverse();

  return (
    <Page id="education">
      <h2>Education</h2>
      <div className={styles.root}>
        {educationsList.map(({ establishment, description, degree, date }) => (
          <div key={establishment} className={cn(styles.item)}>
            <h3>{degree}</h3>
            <div className={styles.place}>
              <strong>{establishment} </strong>
              <span className={styles.date}>({date})</span>
            </div>
            <div className={styles.description}>{description}</div>
          </div>
        ))}
        {coursesList.map(({ establishment, degree, date, description }) => (
          <div key={establishment} className={cn(styles.item)}>
            <h3>{degree}</h3>
            <div className={styles.place}>
              <strong>{establishment} </strong>
              {date && <span className={styles.date}>({date})</span>}
            </div>
            <div className={styles.description}>
              <div className={styles.description__title}>
                {description.title}
              </div>
              <ul className={styles.description__list}>
                {description.list.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};
