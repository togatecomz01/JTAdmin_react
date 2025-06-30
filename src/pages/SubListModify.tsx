import SubListForm from "../common/PageComponent/SubListForm";
import { ACCOUNT_MENU_MODIFY } from "../data/tableItems";

const SubListModify = () => {
  return <SubListForm type="등록" tableData={ACCOUNT_MENU_MODIFY} />;
};

export default SubListModify;
