// src/pages/MainPage.tsx
import React from 'react';
import styles from './MainPage.module.scss';
import PageTitle from '../components/common/PageTitle/PageTitle';
import WelcomeImage from '../components/common/img/bg_main.png';

const MainPage = () => {
    const userName = "홍길동";
    const lastLoginDate = "2022년 00월 00일 00시 00분 접속";
    const mainTitle = <>JT저축은행<br />관리자화면입니다.</>;

    return (
        <div className={styles.mainPage}>
            <div className={styles.welcomeTextSection}>
                <PageTitle title={mainTitle} className={styles.mainPageTitle} />
                <div className={styles.loginInfo}>
                    <p>안녕하세요, {userName}님</p>
                    <p>{lastLoginDate}</p>
                </div>
            </div>

            <div className={styles.welcomeImageSection}>
                <img src={WelcomeImage} alt="관리자 페이지 환영 이미지" />
            </div>
            
        </div>
    );
};

export default MainPage;