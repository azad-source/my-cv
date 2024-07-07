import { Page } from "components/layout/Page/Page";
import { data } from "data";
import { capitalize } from "helpers/stringHelper";
import styles from "./Contacts.module.scss";

const { contacts, avatar } = data;

export const Contacts = () => {
  return (
    <Page id="contacts">
      <h2>Contacts</h2>
      <div className={styles.root}>
        <ul className={styles.items}>
          {contacts.map(({ title, value, href }) => (
            <li key={title} className={styles.item}>
              <span className={styles.item__name}>{capitalize(title)}: </span>
              {href ? (
                <a className={styles.item__value} href={href}>
                  {value}
                </a>
              ) : (
                <span className={styles.item__value}>{value}</span>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </Page>
  );
};
