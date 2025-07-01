import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import ButtonContainer from "../common/Button/ButtonContainer/ButtonContainer";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import { usePopup } from "../contexts/PopupContext";
import List from "../common/layout/List/List";
import Input from "../common/Input/Input";

const HEADERS = [
  { text: "순서", value: "order", className: "narrow" },
  { text: "메뉴명", value: "menuTag" },
  { text: "하위메뉴변경", value: "changeSubmenu", className: "middle" },
];

const LIST_ITEMS = [
  {
    order: <Input type={"text"} />,
    menuTag: <Input type={"text"} />,
    changeSubmenu: (
      <Link to="/menu/3dep">
        <Button name="바로가기" />
      </Link>
    ),
  },
  {
    order: <Input type={"text"} />,
    menuTag: <Input type={"text"} />,
    changeSubmenu: <Button name="바로가기" />,
  },
  {
    order: <Input type={"text"} />,
    menuTag: <Input type={"text"} />,
    changeSubmenu: <Button name="바로가기" />,
  },
];

const Menu2dep = () => {
  const { openPopup } = usePopup();

  return (
    <>
      <Wrapper subTitle={"메뉴 > 대출"}>
        <List headers={HEADERS} listItems={LIST_ITEMS} />
      </Wrapper>

      <ButtonContainer>
        <Button
          name="저장"
          onClick={() =>
            openPopup({ message: "저장되었습니다", button: "확인" })
          }
        />
      </ButtonContainer>
    </>
  );
};

export default Menu2dep;
