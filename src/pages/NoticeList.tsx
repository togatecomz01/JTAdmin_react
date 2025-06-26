import { Link } from "react-router-dom";
import Container from "../common/layout/Container/Container";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import List from "../common/layout/List/List";
import ButtonContainer from "../common/button/ButtonContainer/ButtonContainer";
import Button from "../common/button/Button";
import { ACCOUNT_EXAMPLE_NOTICE } from "../data/listItems";
import Input from "../common/form/Input/Input";

const NoticeList = () => {
  return (
    <Container title={"계정관리"}>
      <Wrapper subTitle={"게시판"}>
        <Input type={"search"} />
        <List {...ACCOUNT_EXAMPLE_NOTICE} />
      </Wrapper>

      <ButtonContainer>
        <Link to="/account/list/modify">
          <Button name="등록" />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default NoticeList;
