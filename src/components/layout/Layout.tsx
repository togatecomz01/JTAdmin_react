/* 헤더+lnb 조립 */
import React from 'react';
import Header from './Header/Header';
import LNB from './LNB/LNB';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="layoutContainer">
        <LNB />
        <div className="contentWrapper">
            <Header />
            <main className="mainContent">
            {children}
            </main>
        </div>
        </div>
    );
};

export default Layout;