import { Link } from "react-router-dom";
import { usePopup } from "../../contexts/PopupContext";
import Button from "../Button/Button";
import ButtonContainer from "../Button/ButtonContainer/ButtonContainer";
import Container from "../layout/Container/Container";
import Table from "../layout/Table/Table";
import Wrapper from "../layout/Wrapper/Wrapper";
import { ACCOUNT_MENU_MODIFY, ACCOUNT_MENU_SUB } from "../../data/tableItems";

const SubListForm = ({ mode }: { mode: "write" | "modify" }) => {
  const { openPopup } = usePopup();

  const isModify = mode === "modify";
  const tableData = isModify ? ACCOUNT_MENU_MODIFY : ACCOUNT_MENU_SUB;
  const subTitle = isModify ? "부관리자 수정" : "부관리자 등록";

  return (
    <Container title={"부관리자"}>
      <Wrapper subTitle={subTitle}>
        <Table tableData={tableData} />
      </Wrapper>

      <ButtonContainer>
        <Button
          name="저장"
          onClick={() =>
            openPopup({ message: "저장되었습니다", button: "확인" })
          }
        />
        <Link to="/account/sublist">
          <Button name="목록" />
        </Link>
        {isModify && <Button name="삭제" />}
      </ButtonContainer>
    </Container>
  );
};

export default SubListForm;
