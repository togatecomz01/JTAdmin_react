import styles from "./Header.module.scss";
import userIcon from "../../../assets/images/user-icon.svg";
// import { Link } from "react-router-dom";

function Header({ name }: { name: string }) {
  return (
    <div className={styles.header}>
      {/* <Link to="/"> */}
      <div className={styles.userInfo}>
        <div className={styles.imageWrapper}>
          <img src={userIcon} alt="User Icon" />
        </div>
        {/* </Link> */}
        <div>
          <strong>{name}</strong> 님
        </div>
      </div>
    </div>
  );
}

export default Header;
