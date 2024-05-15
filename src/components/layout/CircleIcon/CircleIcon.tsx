import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "clsx";
import styles from "./CircleIcon.module.scss";

interface Props {
  className?: string;
}

export const CircleIcon: React.FC<Props> = ({ className }) => (
  <FontAwesomeIcon icon={faCircle} className={cn(styles.root, className)} />
);
