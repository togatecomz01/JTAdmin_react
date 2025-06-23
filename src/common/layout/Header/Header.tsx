import styles from "./Header.module.scss";
import userIcon from "../../../assets/images/user-icon.svg";

function Header() {
  return (
    <div className={styles.header}>
      <img src={userIcon} alt="User Icon" className={styles.userIcon} />
      <strong>홍길동</strong> 님
    </div>
  );
}

export default Header;
