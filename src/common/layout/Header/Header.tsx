import styles from "./Header.module.scss";
import userIcon from "../../../assets/images/user-icon.svg";
import { NAME } from "../../../data/userInfo";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.userInfo}>
        <div className={styles.imageWrapper}>
          <img src={userIcon} alt="User Icon" />
        </div>
        <div>
          <strong>{NAME}</strong> 님
        </div>
      </div>
    </div>
  );
}

export default Header;
