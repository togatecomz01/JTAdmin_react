import { Link } from "react-router-dom";
import { usePopup } from "../contexts/PopupContext";
import Container from "../common/layout/Container/Container";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import Table from "../common/layout/Table/Table";
import ButtonContainer from "../common/button/ButtonContainer/ButtonContainer";
import Button from "../common/button/Button";
import Input from "../common/form/Input/Input";
import { ACCOUNT_TABLE_EXAMPLE } from "../data/tableItems";

const AccountListModify = () => {
  const { openPopup } = usePopup();

  return (
    <Container title={"메인관리자"}>
      <Wrapper subTitle={"관리자 설정"}>
        <Table>
          <tbody>
            {ACCOUNT_TABLE_EXAMPLE.headers.map((header) => {
              const shouldUseTextInput = [
                "id",
                "department",
                "name",
                "email",
              ].includes(header.value);
              const shouldUsePasswordInput = [
                "password",
                "passwordCheck",
              ].includes(header.value);
              const shouldUseNumberInput = ["contact"].includes(header.value);
              return (
                <tr>
                  <th>{header.text}</th>
                  <td>
                    {shouldUseTextInput && <Input type="text" />}
                    {shouldUsePasswordInput && <Input type="password" />}
                    {shouldUseNumberInput && <Input type="number" />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Wrapper>

      <ButtonContainer>
        <Button
          name="저장"
          color="primary"
          onClick={() =>
            openPopup({ message: "저장되었습니다", button: "확인" })
          }
        />
        <Link to="/account/list">
          <Button name="목록" color="disabled" />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default AccountListModify;
