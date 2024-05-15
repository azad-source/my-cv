import cn from "clsx";
import styles from "./Page.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Page: React.FC<Props> = ({ children, className, id }) => {
  return (
    <section className={cn(styles.root, className)} id={id}>
      {children}
    </section>
  );
};
