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
import MainPage from './pages/MainPage';
import Layout from './components/layout/Layout';
import './styles/layout.scss';
import LayoutTest from './pages/LayoutTest'; 
function App() {
  return (
    <Layout>
      {/* <MainPage /> */}
      <LayoutTest/>
    </Layout>
  );
}

export default App;