import { Link } from "react-router-dom";
import { usePopup } from "../contexts/PopupContext";
import Container from "../common/layout/Container/Container";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import Table from "../common/layout/Table/Table";
import ButtonContainer from "../common/Button/ButtonContainer/ButtonContainer";
import Button from "../common/Button/Button";
import { ACCOUNT_MENU_MAIN } from "../data/tableItems";

const AccountListModify = () => {
  const { openPopup } = usePopup();

  return (
    <Container title={"메인관리자"}>
      <Wrapper subTitle={"관리자 설정"}>
        <Table tableData={ACCOUNT_MENU_MAIN} />
      </Wrapper>

      <ButtonContainer>
        <Button
          name="저장"
          onClick={() =>
            openPopup({ message: "저장되었습니다", button: "확인" })
          }
        />
        <Link to="/account/list">
          <Button name="목록" />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default AccountListModify;
