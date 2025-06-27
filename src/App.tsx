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
    </Routes>
  );
}

export default App;