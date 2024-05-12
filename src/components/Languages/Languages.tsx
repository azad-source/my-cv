import { Page } from "components/layout/Page/Page";
import { data } from "data";
import { capitalize } from "helpers/stringHelper";
import styles from "./Languages.module.scss";

const { langs } = data;

export const Languages = () => {
  return (
    <Page id="languages">
      <h2>Languages</h2>
      <ul className={styles.list}>
        {langs.map(({ language, level, description }) => (
          <li key={language} className={styles.item}>
            <span className={styles.item__name}>{capitalize(language)}:</span>
            <span className={styles.item__value}>
              {level} {description}
            </span>
          </li>
        ))}
      </ul>
    </Page>
  );
};
