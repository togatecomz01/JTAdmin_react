import { Link } from "react-router-dom";
import Container from "../common/layout/Container/Container";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import List from "../common/layout/List/List";
import ButtonContainer from "../common/Button/ButtonContainer/ButtonContainer";
import Button from "../common/Button/Button";
import { ACCOUNT_EXAMPLE_NOTICE } from "../data/listItems";
import Input from "../common/Input/Input";

const NoticeList = () => {
  return (
    <Container title={"계정관리"}>
      <Wrapper subTitle={"게시판"}>
        <Input type={"search"} />
        <List {...ACCOUNT_EXAMPLE_NOTICE} />
      </Wrapper>

      <ButtonContainer>
        <Link to="/account/noticelist/write">
          <Button name="등록" />
        </Link>
        <Link to="/account/noticelist/modify">
          <Button name="수정" color="disabled" />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default NoticeList;
