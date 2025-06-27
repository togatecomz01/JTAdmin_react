import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import ButtonContainer from "../common/Button/ButtonContainer/ButtonContainer";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import { usePopup } from "../contexts/PopupContext";
import List from "../common/layout/List/List";
import Input from "../common/Input/Input";

const HEADERS = [
  { text: "순서", value: "order" },
  { text: "메뉴명", value: "menuTag" },
  { text: "하위메뉴변경", value: "changeSubmenu" },
];

const LIST_ITEMS = [
  {
    order: <Input type={"text"} />,
    menuTag: <Input type={"text"} />,
    changeSubmenu: (
      <Link to="/menu/2dep">
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

const Menu1dep = () => {
  const { openPopup } = usePopup();

  return (
    <>
      <Wrapper subTitle={"메뉴 관리 > 메뉴"}>
        <List headers={HEADERS} listItems={LIST_ITEMS} />
      </Wrapper>

      <ButtonContainer>
        <Button
          name="저장"
          color="primary"
          onClick={() =>
            openPopup({ message: "저장되었습니다", button: "확인" })
          }
        />
      </ButtonContainer>
    </>
  );
};

export default Menu1dep;
