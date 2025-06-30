import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import AccountList from './pages/AccountList';
import AccountModify from './pages/AccountModify';
import AccountSubWrite from './pages/AccountSubWrite';
import AccountSubModify from './pages/AccountSubModify';
import AccountSubList from './pages/AccountSubList';
import NoticeList from './pages/NoticeList';
import NoticeModify from './pages/NoticeModify';
import NoticeWrite from './pages/NoticeWrite';
import MenuManagement from './pages/MenuManagement'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      
      <Route 
        path="/main" 
        element={<Layout mainClassName="bgcFFF"><MainPage /></Layout>} 
      />
      <Route 
        path="/account/main" 
        element={<Layout><AccountList /></Layout>} 
      />
      <Route 
        path="/account/modify" 
        element={<Layout><AccountModify /></Layout>} 
      />

      <Route 
        path="/account/sub" 
        element={<Layout><AccountSubList /></Layout>} 
      />
      <Route 
        path="/account/sub/modify" 
        element={<Layout><AccountSubModify /></Layout>} 
      />
      <Route 
        path="/account/sub/write" 
        element={<Layout><AccountSubWrite /></Layout>} 
      />

      <Route 
        path="/account/board" 
        element={<Layout><NoticeList /></Layout>} 
      />
      <Route 
        path="/account/board/write" 
        element={<Layout><NoticeWrite /></Layout>} 
      />
      <Route 
        path="/account/board/modify" 
        element={<Layout><NoticeModify /></Layout>} 
      />

      <Route 
        path="/menu/menu" 
        element={<Layout><MenuManagement /></Layout>} 
      />
    </Routes>
  );
}

export default App;