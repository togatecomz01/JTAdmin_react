import bg from "../assets/images/bg_main.png";

const Home = () => {
  const today = new Date();
  const formattedDate = today.toLocaleString();
  return (
    <div>
      <h1>JT저축은행 관리자화면입니다.</h1>
      안녕하세요, 민정님
      {formattedDate}접속
      <img src={bg} />
    </div>
  );
};

export default Home;
