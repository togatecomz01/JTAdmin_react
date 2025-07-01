import React from 'react';
import Table from '../components/common/Table/Table';
import Button from '../components/common/Button/Button';
import PageTitle from '../components/common/PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';
import { userList, USER_LIST_COLUMNS } from '../components/common/Table/TableData';

const AccountList = () => {
    const navigate = useNavigate();
    const handleModifyClick = () => navigate('/account/modify');

    return (
        <>
            <h2 className="page-main-title">계정관리</h2>
            <div className="content-panel">
                <PageTitle title="메인관리자 목록" />
                <Table data={userList} columns={USER_LIST_COLUMNS} />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button variant="primary" size="large" onClick={handleModifyClick}>수정</Button>
            </div>
        </>
    );
};
export default AccountList;