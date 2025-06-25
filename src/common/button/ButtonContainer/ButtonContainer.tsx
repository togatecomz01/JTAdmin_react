import styles from "./ButtonContainer.module.scss";

const ButtonContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.buttonContainer}>{children}</div>;
};

export default ButtonContainer;
