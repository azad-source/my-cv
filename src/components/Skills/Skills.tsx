import cn from "clsx";
import { Page } from "components/layout/Page/Page";
import { data } from "data";
import { capitalize } from "helpers/stringHelper";
import react_logo from "images/stack/react.png";
import redux_logo from "images/stack/redux.png";
import storybook_logo from "images/stack/storybook.png";
import jest_logo from "images/stack/jest.png";
import typescript_logo from "images/stack/typescript.png";
import node_logo from "images/stack/node.png";
import js_logo from "images/stack/javascript.png";
import html_logo from "images/stack/html.png";
import css_logo from "images/stack/css.png";
import sass_logo from "images/stack/sass.png";
import less_logo from "images/stack/less.png";
import webpack_logo from "images/stack/webpack.png";
import babel_logo from "images/stack/babel.png";
import git_logo from "images/stack/git.png";
import linux_logo from "images/stack/linux.png";
import mongo_logo from "images/stack/mongo.png";
import styles from "./Skills.module.scss";

const { skills } = data;

export const Skills = () => {
  return (
    <Page id="skills">
      <h2>Skills</h2>
      <div className={styles.stackList}>
        <div className={styles.stackItem}>
          <img
            src={js_logo}
            alt="javascript"
            className={styles.stackItem_img}
          />
        </div>
        <div className={styles.stackItem}>
          <img src={html_logo} alt="html" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img src={css_logo} alt="css" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img src={react_logo} alt="react" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img src={redux_logo} alt="redux" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img
            src={typescript_logo}
            alt="typescript"
            className={styles.stackItem_img}
          />
        </div>
        <div className={styles.stackItem}>
          <img
            src={storybook_logo}
            alt="storybook"
            className={styles.stackItem_img}
          />
        </div>
        <div className={styles.stackItem}>
          <img src={jest_logo} alt="jest" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img src={mongo_logo} alt="mongo" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img src={sass_logo} alt="sass" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img src={less_logo} alt="less" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img src={node_logo} alt="node" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img
            src={webpack_logo}
            alt="webpack"
            className={styles.stackItem_img}
          />
        </div>
        <div className={styles.stackItem}>
          <img src={babel_logo} alt="babel" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img src={git_logo} alt="git" className={styles.stackItem_img} />
        </div>
        <div className={styles.stackItem}>
          <img src={linux_logo} alt="linux" className={styles.stackItem_img} />
        </div>
      </div>
      <div className={styles.root}>
        {skills.map(({ title, items }, index) => (
          <div
            key={title}
            className={cn(styles.block, styles[`block-${index + 1}`])}
          >
            <h4>{capitalize(title)}</h4>

            {items.map(({ name, progress }) => (
              <div className={styles.item}>
                <div className={styles.item__title}>
                  <span className={styles.item__title__percent}>
                    {progress}
                  </span>
                  <span className={styles.item__title__item}>{name}</span>
                </div>
                <div className={styles.item__max} />
                <div
                  className={styles.item__current}
                  style={{ width: progress }}
                >
                  <div className={styles.item__current__inner} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Page>
  );
};
