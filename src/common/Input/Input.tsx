import styles from "./Input.module.scss";
import search from "../../assets/images/search.svg";

type InputProps = {
  type: string;
  placeholder?: string;
  value?: string;
  items?: string[];
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Input = ({ type, placeholder, value, items, onChange }: InputProps) => {
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
        <form className={styles.searchBar}>
          <input type={type} id="user-search" />
          <button>
            <img src={search} />
          </button>
        </form>
      </div>
    );

  if (type === "radio")
    return (
      <div className={styles.itemsWrapper}>
        {items?.map((item) => (
          <div className={styles.radio}>
            <input type={type} name="radio" value={item} />
            {item}
          </div>
        ))}
      </div>
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
