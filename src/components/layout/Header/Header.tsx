import styles from './Header.module.scss';
import React from 'react';
import UserIcon from '../../common/img/user_icon.png';

const Header = () => {
    return (
        <header className={styles.header}>
        <div className={styles.userInfo}>
            <a href="#" className={styles.avatar}>
            <img src={UserIcon} alt="" />{/* 의미가 없는 이미지는 백그라운드로 두기 */}
            </a>
            <p>
            <span>홍길동</span>님
            </p>
        </div>
        </header>
    );
};

export default Header;