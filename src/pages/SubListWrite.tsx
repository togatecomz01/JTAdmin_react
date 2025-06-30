import SubListForm from "../common/PageComponent/SubListForm";
import { ACCOUNT_MENU_SUB } from "../data/tableItems";

const SubListWrite = () => {
  return <SubListForm type="등록" tableData={ACCOUNT_MENU_SUB} />;
};

export default SubListWrite;
