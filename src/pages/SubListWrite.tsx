import { Link } from "react-router-dom";
import Button from "../common/button/Button";
import ButtonContainer from "../common/button/ButtonContainer/ButtonContainer";
import Container from "../common/layout/Container/Container";
import Table from "../common/layout/Table/Table";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import { ACCOUNT_MENU_SUB } from "../data/tableItems";
import { usePopup } from "../contexts/PopupContext";

const SubListWrite = () => {
  const { openPopup } = usePopup();

  return (
    <Container title={"부관리자"}>
      <Wrapper subTitle={"부관리자 등록"}>
        <Table tableData={ACCOUNT_MENU_SUB} />
      </Wrapper>

      <ButtonContainer>
        <Button
          name="저장"
          color="primary"
          onClick={() =>
            openPopup({ message: "저장되었습니다", button: "확인" })
          }
        />
        <Link to="/account/sublist">
          <Button name="목록" color="disabled" />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default SubListWrite;
