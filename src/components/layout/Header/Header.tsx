import React from 'react';
import styles from './Header.module.scss';
import Button from '../../common/Button/Button'

const Header = () => {
    const handleLogout = () => {
        console.log('로그아웃 버튼 클릭됨');
        //나중에 로그아웃을 구현하기 위해 생성(현재는 콘솔만 출력)
    };
    return (
        <header className={styles.header}>
            <div className={styles.userInfo}>
                <p>
                    <span>홍길동</span> 님
                </p>
                <Button variant="text" onClick={handleLogout}>
                    로그아웃
                </Button>
            </div>
        </header>
    );
};

export default Header;