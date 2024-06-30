import styles from "./Tag.module.scss";
import cx from "clsx";

interface IProps {
  caption: string;
  className?: string;
}

export const Tag: React.FC<IProps> = ({ caption, className }) => {
  return <div className={cx(styles.root, className)}>{caption}</div>;
};
