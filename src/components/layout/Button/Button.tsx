import cn from "clsx";
import styles from "./Button.module.scss";

type ButtonUse = "link" | "default" | "transparent";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  disabled?: boolean;
  use?: ButtonUse;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export const Button: React.FC<Props> = ({
  className,
  id,
  children,
  use = "default",
  disabled,
  icon,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        styles.root,
        styles[use],
        disabled && styles.disabled,
        className
      )}
      id={id}
      onClick={onClick}
      type="button"
    >
      <div className={styles.icon}>{icon}</div>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: undefined,
  id: undefined,
  disabled: false,
  use: undefined,
  icon: undefined,
  onClick: undefined,
};
