import { useState } from "react";
import styles from "./Popup.module.scss";

const Popup = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) return null;
  return (
    <div className={styles.popupWrapper} onClick={() => setIsOpen(false)}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.text}>{text}</div>
        <button className={styles.button} onClick={() => setIsOpen(false)}>
          취소
        </button>
      </div>
    </div>
  );
};

export default Popup;
