import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import Table from '../components/common/Table/Table';
import TableHeader from '../components/common/Table/TableHeader';
import TableDataItem from '../components/common/Table/TableDataItem';
import Button from '../components/common/Button/Button';
import { SubUserList, userListColumns } from '../components/common/Table/TableData'; 
import type { User } from '../components/common/Table/TableData';

const AccountMainPage = () => {
    return (
        <div>
            <h2 className="page-main-title">계정관리</h2>
            <div className="content-panel">
                <PageTitle title="부관리자 목록" />
                <Table>
                    <TableHeader columns={userListColumns} />
                    <tbody>
                        {SubUserList.map((user: User) => (
                        <TableDataItem key={user.no} item={user} />
                        ))}
                    </tbody>
                </Table>
            </div>
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', gap:'20px' }}>
                <Button variant="primary" size="large">등록</Button>
                <Button variant="secondary" size="large">수정</Button>
            </div>
        </div>
    );
};

export default AccountMainPage;