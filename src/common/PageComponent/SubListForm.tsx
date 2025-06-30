import { Link } from "react-router-dom";
import { usePopup } from "../../contexts/PopupContext";
import Button from "../Button/Button";
import ButtonContainer from "../Button/ButtonContainer/ButtonContainer";
import Container from "../layout/Container/Container";
import Table from "../layout/Table/Table";
import Wrapper from "../layout/Wrapper/Wrapper";

const SubListForm = ({
  type,
  tableData,
}: {
  type: "등록" | "수정";
  tableData: {
    title: string;
    type: string;
    [key: string]: any;
  }[];
}) => {
  const { openPopup } = usePopup();

  return (
    <Container title={"부관리자"}>
      <Wrapper subTitle={`부관리자 ${type}`}>
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
        {type === "수정" && <Button name="삭제" />}
      </ButtonContainer>
    </Container>
  );
};

export default SubListForm;
