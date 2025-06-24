import { useState } from "react";

import styles from "./LNB.module.scss";
import MENU from "../../../constants/menu";
import logo from "../../../assets/images/logo_fff.png";
import arrow from "../../../assets/images/arrow.svg";

function LNB() {
  const [activeMenu, setActiveMenu] = useState("");

  const toggleSubMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? "" : menu));
  };

  return (
    <nav className={styles.Lnb}>
      <div className={styles.Logo}>
        <img src={logo} alt="Logo" />
      </div>
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
                <a
                  key={child.name}
                  href={child.path}
                  className={styles.SubMenuItem}
                >
                  {child.name}
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default LNB;
