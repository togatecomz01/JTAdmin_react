import Button from "../common/Button/Button";
import ButtonContainer from "../common/Button/ButtonContainer/ButtonContainer";
import Wrapper from "../common/layout/Wrapper/Wrapper";
import { usePopup } from "../contexts/PopupContext";
import List from "../common/layout/List/List";
import Input from "../common/Input/Input";

const HEADERS = [
  { text: "순서", value: "order" },
  { text: "메뉴명", value: "menuTag" },
  { text: "URL", value: "url" },
  { text: "활성", value: "active" },
];

const LIST_ITEMS = [
  {
    order: <Input type={"text"} />,
    menuTag: <Input type={"text"} />,
    url: <Input type={"text"} />,
    active: <Input type={"radio"} items={["예", "아니요"]} />,
  },
  {
    order: <Input type={"text"} />,
    menuTag: <Input type={"text"} />,
    url: <Input type={"text"} />,
    active: <Input type={"radio"} items={["예", "아니요"]} />,
  },
  {
    order: <Input type={"text"} />,
    menuTag: <Input type={"text"} />,
    url: <Input type={"text"} />,
    active: <Input type={"radio"} items={["예", "아니요"]} />,
  },
];

const Menu4dep = () => {
  const { openPopup } = usePopup();

  return (
    <>
      <Wrapper subTitle={"메뉴 > 대출 > 대출상품 > 신용대출"}>
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

export default Menu4dep;
