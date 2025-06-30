import { Link } from "react-router-dom";
import { usePopup } from "../../contexts/PopupContext";
import {
  ACCOUNT_MENU_NOTICE_MODIFY,
  ACCOUNT_MENU_NOTICE_WRITE,
} from "../../data/tableItems";
import Button from "../Button/Button";
import ButtonContainer from "../Button/ButtonContainer/ButtonContainer";
import Container from "../layout/Container/Container";
import Table from "../layout/Table/Table";
import Wrapper from "../layout/Wrapper/Wrapper";

const NoticeListForm = ({ mode }: { mode: "write" | "modify" }) => {
  const { openPopup } = usePopup();

  const isModify = mode === "modify";

  return (
    <Container title={"계정관리"}>
      <Wrapper subTitle={isModify ? "게시판 수정" : "게시판 등록"}>
        <Table
          tableData={
            isModify ? ACCOUNT_MENU_NOTICE_MODIFY : ACCOUNT_MENU_NOTICE_WRITE
          }
        />
        {isModify && (
          <span>
            첨부파일을 등록하실 경우에는 기존첨부파일은 모두 삭제되오니
            유의하시기 바랍니다.
          </span>
        )}
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

export default NoticeListForm;
