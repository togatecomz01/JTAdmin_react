import styles from "./Popup.module.scss";
import { usePopup } from "../../../contexts/PopupContext";

const Popup = () => {
  const { isOpen, text, closePopup } = usePopup();
  if (!isOpen) return null;

  const onBackgroundClick = () => closePopup();
  const onPopupClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className={styles.popupWrapper} onClick={onBackgroundClick}>
      <div className={styles.popup} onClick={onPopupClick}>
        <div className={styles.text}>{text}</div>
        <button className={styles.button} onClick={closePopup}>
          취소
        </button>
      </div>
    </div>
  );
};

export default Popup;
