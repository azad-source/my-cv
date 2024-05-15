import { Page } from "components/layout/Page/Page";
import { data } from "data";
import styles from "./Portfolios.module.scss";

const { portfolios } = data;

export const Portfolios = () => {
  return (
    <Page id="portfolios">
      <h2>Portfolios</h2>
      <div className={styles.root}>
        {portfolios.map(({ title, items }) => (
          <div key={title}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.list}>
              {items.map(({ name, link, image }) => (
                <div key={name} className={styles.list__item}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <div className={styles.list__item__img}>
                      <img src={image} alt={name} />
                    </div>
                    <div className={styles.list__item__name}>{name}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};
