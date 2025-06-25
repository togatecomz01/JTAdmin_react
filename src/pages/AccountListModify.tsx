import Button from "../common/button/Button";
import Container from "../common/layout/Container/Container";
import Table from "../common/layout/Table/Table";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import { usePopup } from "../contexts/PopupContext";
import { TABLE_EXAMPLE } from "../data/tableItems";

const AccountListModify = () => {
  const { openPopup } = usePopup();

  return (
    <Container title={"제목"}>
      <Wrapper subTitle={"부제"}>
        <Table {...TABLE_EXAMPLE} />
        <div>
          <Button
            name="등록"
            color="primary"
            onClick={() => openPopup("등록하실거여?")}
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default AccountListModify;
