import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import ButtonContainer from "../common/Button/ButtonContainer/ButtonContainer";
import Container from "../common/layout/Container/Container";
import Table from "../common/layout/Table/Table";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import { ACCOUNT_MENU_NOTICE_WRITE } from "../data/tableItems";
import { usePopup } from "../contexts/PopupContext";

const NoticeListWrite = () => {
  const { openPopup } = usePopup();

  return (
    <Container title={"계정관리"}>
      <Wrapper subTitle={"게시판 등록"}>
        <Table tableData={ACCOUNT_MENU_NOTICE_WRITE} />
      </Wrapper>

      <ButtonContainer>
        <Button
          name="등록"
          onClick={() =>
            openPopup({ message: "저장되었습니다", button: "확인" })
          }
        />
        <Link to="/account/noticelist">
          <Button name="목록" />
        </Link>
        <Button name="취소" />
      </ButtonContainer>
    </Container>
  );
};

export default NoticeListWrite;
