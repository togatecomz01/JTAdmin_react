import React from 'react';
import styles from './Popup.module.scss';
import ReactDOM from 'react-dom';

interface PopupProps {
    isOpen: boolean; //팝업이 열렸는지 T/F
    onClose: () => void; //팝업닫기
    children: React.ReactNode; //팝업 메시지 props
    actions?: React.ReactNode;
}

const Popup = ({ isOpen, onClose, children , actions}: PopupProps) => {
    //isOpen이 false -> 렌더링 x
    if (!isOpen) {
        return null;
    }

    //React Portal == root DOM 트리 바깥에 렌더링 하는 함수
    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popupBox} onClick={(e) => e.stopPropagation()}>
                <div className={styles.content}>
                    {children}
                </div>
                {actions && (
                    <div className={styles.actions}>
                        {actions}
                    </div>
                )}
            </div>
        </div>,
        document.getElementById('popup-root')! // public/index.html에 <div id="popup-root"></div> 추가 필요
    );
};

export default Popup;