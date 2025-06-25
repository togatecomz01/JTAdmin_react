import Router from "./router/Router";
import { PopupProvider } from "./contexts/PopupContext";
import Popup from "./common/layout/Popup/Popup";

function App() {
  return (
    <PopupProvider>
      <Router />
      <Popup />
    </PopupProvider>
  );
}

export default App;
