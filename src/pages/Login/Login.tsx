import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import styles from "./Login.module.scss";
import logo from "../../assets/images/logo_color.png";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle1}></div>
      <div className={styles.login}>
        <div className={styles.introWrapper}>
          <img src={logo} />
          <div>안녕하세요, JT저축은행 관리자 홈페이지입니다.</div>
        </div>
        <div className={styles.inputWrapper}>
          <Input type="text" placeholder="아이디" className={styles.input} />
          <Input
            type="password"
            placeholder="비밀번호"
            className={styles.input}
          />
          <div>아이디 또는 비밀번호가 잘못 입력되었습니다.</div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button name="로그인" className={styles.button} />
          <div>
            ※ 아이디 / 비밀번호를 분실했을 경우 전산팀으로 연락하시기 바랍니다.
          </div>
        </div>
      </div>
      <div className={styles.circle2}></div>
    </div>
  );
};

export default Login;
