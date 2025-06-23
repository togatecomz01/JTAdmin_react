import styles from "./Header.module.scss";
import userIcon from "../../../assets/images/user-icon.svg";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      {/* <Link to="/"> */}
      <div className={styles.userInfo}>
        <div className={styles.imageWrapper}>
          <img src={userIcon} alt="User Icon" />
        </div>
        {/* </Link> */}
        <strong>홍길동</strong> 님
      </div>
    </div>
  );
}

export default Header;
