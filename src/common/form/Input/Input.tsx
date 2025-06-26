import styles from "./Input.module.scss";
type InputProps = {
  type:
    | "text"
    | "password"
    | "number"
    | "tel"
    | "date"
    | "content"
    | "checkbox";
  placeholder?: string;
  value?: string;
  items?: string[];
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Input = ({ type, placeholder, value, items, onChange }: InputProps) => {
  if (type === "content")
    return (
      <textarea className={styles.contentInput} placeholder={placeholder} />
    );

  if (type === "checkbox")
    return (
      <>
        {items?.map(() => (
          <input type={type} />
        ))}
      </>
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
