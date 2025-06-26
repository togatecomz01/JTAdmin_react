/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage></MainPage>
    </>
  )
}

export default App */
/* import './styles/reset.scss';
import './styles/form.scss'; */
/* import MainPage from './pages/MainPage'; */
import Layout from './components/layout/Layout';
import './styles/layout.scss';
/* import LayoutTest from './pages/LayoutTest'; */
import AccountList from './pages/AccountList' 
import AccountModify from './pages/AccountModify';
import AccountSubList from './pages/AccountSubList';
import AccountSubWrite from './pages/AccountSubWrite';
import AccountSubModify from './pages/AccountSubModify';
import NoticeList from './pages/NoticeList';
function App() {
  return (
    <Layout>
      {/* <MainPage /> */}
      {/* <LayoutTest/> */}
      <AccountList/>
      <AccountModify/>
      <AccountSubList/>
      <AccountSubWrite/>
      <AccountSubModify/>
      <NoticeList/>
    </Layout>
  );
}

export default App;