import { Link } from "react-router-dom";
import Container from "../common/layout/Container/Container";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import List from "../common/layout/List/List";
import ButtonContainer from "../common/Button/ButtonContainer/ButtonContainer";
import Button from "../common/Button/Button";
import { ACCOUNT_EXAMPLE } from "../data/listItems";

const AccountList = () => {
  return (
    <Container title={"계정관리"}>
      <Wrapper subTitle={"메인관리자 목록"}>
        <List {...ACCOUNT_EXAMPLE} />
      </Wrapper>

      <ButtonContainer>
        <Link to="/account/list/modify">
          <Button name="수정" />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default AccountList;
