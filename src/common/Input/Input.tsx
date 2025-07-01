import styles from "./Input.module.scss";

type InputProps = {
  type: string;
  placeholder?: string;
  value?: string;
  items?: string[];
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
};

const Input = ({
  type,
  placeholder,
  value,
  items,
  onChange,
  className,
}: InputProps) => {
  if (type === "textarea")
    return (
      <textarea className={styles.contentInput} placeholder={placeholder} />
    );

  if (type === "checkbox")
    return (
      <div className={styles.itemsWrapper}>
        {items?.map((item, index) => (
          <div className={styles.checkbox}>
            <input type={type} id={`check${index}`} />
            <label htmlFor={`check${index}`}>{item}</label>
          </div>
        ))}
      </div>
    );

  if (type === "search")
    return (
      <div className={styles.searchBarWrapper}>
        <form>
          <input type={type} id="user-search" />
          <button>
            <div className={styles.image}></div>
          </button>
        </form>
      </div>
    );

  return (
    <input
      className={`${styles.textInput} ${className || ""}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
