import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import LNB from "./LNB/LNB";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header name={"홍길동"} />
      <LNB />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
