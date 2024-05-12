import cn from "clsx";
import { Page } from "components/layout/Page/Page";
import { CircleIcon } from "components/layout/CircleIcon/CircleIcon";
import { data } from "data";
import styles from "./Education.module.scss";

const Circle = () => <CircleIcon className={styles.circle} />;

const { education } = data;

export const Education = () => {
  return (
    <Page id="education">
      <h2>Education</h2>
      <div className={styles.root}>
        {education.map(
          ({ establishment, description, degree, date }, index) => (
            <div
              className={cn(
                styles.block,
                styles[`block_${(index + 1) % 2 === 0 ? "right" : "left"}`]
              )}
            >
              <h3>{degree}</h3>
              <div className={styles.block__text}>
                <div>
                  <strong>{establishment} </strong>
                  <em>({date})</em>
                  <p>{description}</p>
                </div>
              </div>
              <Circle />
            </div>
          )
        )}
      </div>
    </Page>
  );
};
