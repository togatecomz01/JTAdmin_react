import styles from "./Header.module.scss";
import userIcon from "../../../assets/images/user-icon.svg";
import { NAME } from "../../../data/userInfo";
import { Link } from "react-router-dom";

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
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
}

export default Header;
