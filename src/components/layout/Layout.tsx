/* 헤더+lnb 조립 */
import React from 'react';
import Header from './Header/Header';
import LNB from './LNB/LNB';

const Layout = ({ children, mainClassName }: { children: React.ReactNode, mainClassName?: string }) => {
    return (
        <div className="layoutContainer">
        <LNB />
            <div className="contentWrapper">
                <Header />
                <main className={`mainContent ${mainClassName || ''}`}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;