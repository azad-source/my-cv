import { Tag } from "../Tag/Tag";
import styles from "./TagList.module.scss";
import cx from "clsx";

interface IProps {
  list: string[];
  className?: string;
}

export const TagList: React.FC<IProps> = ({ list, className }) => {
  return (
    <div className={cx(styles.root, className)}>
      {list.map((i) => (
        <Tag key={i} className={styles.skills__item} caption={i} />
      ))}
    </div>
  );
};
