import { NAME } from "../../data/userInfo";
import styles from "./Home.module.scss";

const Home = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분`;

  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        <h1>{`JT저축은행\n관리자화면입니다.`}</h1>
        {`안녕하세요, ${NAME}님\n${formattedDate} 접속`}
      </div>
    </div>
  );
};

export default Home;
