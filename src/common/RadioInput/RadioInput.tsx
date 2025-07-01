import styles from "./RadioInput.module.scss";

const RadioInput = ({ items, name }: { items: string[]; name: string }) => {
  return (
    <div className={styles.itemsWrapper}>
      {items?.map((item) => (
        <div className={styles.radio}>
          <input type="radio" name={name} value={item} />
          {item}
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
