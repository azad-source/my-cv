import cn from "clsx";
import { Page } from "components/layout/Page/Page";
import { data } from "data";
import { capitalize } from "helpers/stringHelper";
import styles from "./Skills.module.scss";

const { skills } = data;

export const Skills = () => {
  return (
    <Page id="skills">
      <h2>Skills</h2>
      <div className={styles.root}>
        {skills.map(({ title, items }) => (
          <div key={title} className={cn(styles.skillSection)}>
            <div className={styles.skillSection__title}>
              {capitalize(title)}
            </div>
            <ul className={styles.skillSection__list}>
              {items.map(({ name }) => (
                <li key={name} className={styles.skillItem}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Page>
  );
};
