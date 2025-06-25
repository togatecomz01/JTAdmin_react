import styles from "./Header.module.scss";
import userIcon from "../../../assets/images/user-icon.svg";

function Header({ name }: { name: string }) {
  return (
    <div className={styles.header}>
      <div className={styles.userInfo}>
        <div className={styles.imageWrapper}>
          <img src={userIcon} alt="User Icon" />
        </div>
        <div>
          <strong>{name}</strong> 님
        </div>
      </div>
    </div>
  );
}

export default Header;
