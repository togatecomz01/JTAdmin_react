import { Link } from "react-router-dom";
import List from "../common/layout/List/List";
import { ACCOUNT_EXAMPLE } from "../data/listItems";
import Button from "../common/button/Button";

const AccountList = () => {
  return (
    <>
      <List {...ACCOUNT_EXAMPLE} />
      <Link to="/account/list/modify">
        <Button name="수정" />
      </Link>
    </>
  );
};

export default AccountList;
