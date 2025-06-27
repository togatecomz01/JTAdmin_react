import styles from "./Button.module.scss";

type ButtonProps = {
  name: string;
  color?: "primary" | "disabled" | "cancel";
  onClick?: () => void;
  className?: string;
};

function Button({ name, color = "primary", onClick, className }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[color]} ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
