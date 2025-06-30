import styles from "./LoginButton.module.scss";

const LoginButton = ({ name = "로그인" }) => {
  return <button className={styles.button}>{name}</button>;
};

export default LoginButton;
