import { Outlet } from "react-router-dom";
import Container from "../common/layout/Container/Container";

const Menu = () => {
  return (
    <Container title={"메뉴관리"}>
      <Outlet />
    </Container>
  );
};

export default Menu;
