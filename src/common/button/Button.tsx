import styles from "./Button.module.scss";

type ButtonProps = {
  name: string;
  color?: "primary" | "disabled" | "cancel";
  onClick?: () => void;
};

function Button({ name, color = "primary", onClick }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
