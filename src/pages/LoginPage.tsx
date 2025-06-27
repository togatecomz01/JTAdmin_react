// src/pages/LoginPage.tsx

import React from 'react';
import styles from './LoginPage.module.scss';
import LogoImage from '../components/common/img/logo_color.png'; // 컬러 로고 이미지 경로 확인
import Input from '../components/common/Input/Input';
import Button from '../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // form의 기본 동작(새로고침)을 막습니다.
        console.log('로그인 시도...');
        // 4. navigate 함수를 사용해서 '/main' 경로로 이동시킵니다.
        navigate('/main');
    };

    return (

        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <div className={styles.header}>
                    <img src={LogoImage} alt="JT저축은행 로고" className={styles.logo} />
                    <p>안녕하세요, JT저축은행 관리자 홈페이지입니다.</p>
                </div>

                <form className={styles.form}>
                    <Input type="text" placeholder="아이디" width={'70%'}/>
                    <Input type="password" placeholder="비밀번호" width={'70%'} />
                    
                    {/* 에러(나중에 조건부 렌더링) */}
                    <p className={styles.errorMessage}>
                        아이디 또는 비밀번호가 잘못 입력되었습니다.
                    </p>

                    <Button variant="primary" size="large" className={styles.loginButton} onClick={handleLogin}>
                        로그인
                    </Button>
                </form>

                <p className={styles.footerText}>
                    ※ 아이디 / 비밀번호를 분실했을 경우 전산팀으로 연락하시기 바랍니다.
                </p>

            </div>
        </div>
    );
};

export default LoginPage;