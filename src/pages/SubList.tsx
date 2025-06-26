import { Link } from "react-router-dom";
import ButtonContainer from "../common/Button/ButtonContainer/ButtonContainer";
import Container from "../common/layout/Container/Container";
import List from "../common/layout/List/List";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import { ACCOUNT_EXAMPLE_SUB } from "../data/listItems";
import Button from "../common/Button/Button";

const SubList = () => {
  return (
    <Container title={"계정관리"}>
      <Wrapper subTitle={"부관리자 목록"}>
        <List {...ACCOUNT_EXAMPLE_SUB} />
      </Wrapper>

      <ButtonContainer>
        <Link to="/account/sublist/write">
          <Button name="등록" />
        </Link>
        <Link to="/account/sublist/modify">
          <Button name="수정" />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default SubList;
