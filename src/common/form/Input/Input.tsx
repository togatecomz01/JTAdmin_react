import styles from "./Input.module.scss";
type InputProps = {
  type: "text" | "password" | "number" | "date" | "content";
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  if (type === "content")
    return (
      <textarea className={styles.contentInput} placeholder={placeholder} />
    );

  return (
    <input
      className={styles.textInput}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
