import { useState } from "react";

import styles from "./LNB.module.scss";
import MENU from "../../../constants/menu";
import arrow from "../../../assets/images/arrow.svg";
import { Link } from "react-router-dom";

function LNB() {
  const [activeMenu, setActiveMenu] = useState("");

  const toggleSubMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? "" : menu));
  };

  return (
    <nav className={styles.Lnb}>
      <Link to="/" className={styles.Logo}>
        <div className={styles.image}></div>
      </Link>

      <div className={styles.Menu}>
        {MENU.map((menu) => (
          <div key={menu.name} className={styles.MenuItem}>
            <div
              className={styles.MenuTitle}
              onClick={() => toggleSubMenu(menu.name)}
            >
              {menu.name}
              <img
                src={arrow}
                alt="arrow"
                className={`${styles.arrow} ${
                  activeMenu === menu.name ? styles.active : ""
                }`}
              />
            </div>

            <ul
              className={`${styles.SubMenu} ${
                activeMenu === menu.name ? styles.SubMenuOpen : ""
              }`}
            >
              {menu.children.map((child) => (
                <Link
                  key={child.name}
                  to={child.path}
                  className={styles.SubMenuItem}
                >
                  {child.name}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default LNB;
