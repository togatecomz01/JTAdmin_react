import styles from "./Button.module.scss";

type ButtonProps = {
  name: string;
  onClick?: () => void;
  className?: string;
};

function Button({ name, onClick, className }: ButtonProps) {
  const resolvedColor = () => {
    if (name === "목록" || name === "수정") return "disabled";
    if (name === "취소" || name === "삭제") return "cancel";
    return "primary";
  };

  return (
    <button
      className={`${styles.button} ${styles[resolvedColor()]} ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
