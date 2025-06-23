import Header from "./common/layout/Header/Header";
import LNB from "./common/layout/LNB/LNB";

const menuItems = [
  { label: "Dashboard", path: "/" },
  { label: "Users", path: "/users" },
  { label: "Settings", path: "/settings" },
];

function App() {
  return (
    <>
      <Header />
      <LNB menuItems={menuItems} />
      JT 저축은행
    </>
  );
}

export default App;
