import styles from "./Input.module.scss";
import search from "../../../assets/images/search.svg";

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
  if (type === "content")
    return (
      <textarea className={styles.contentInput} placeholder={placeholder} />
    );

  if (type === "checkbox")
    return (
      <div className={styles.checkboxWrapper}>
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
