import React , { useState } from 'react';
import Table from '../components/common/Table/Table';
import Button from '../components/common/Button/Button';
import PageTitle from '../components/common/PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';
import { SubUserList, USER_LIST_COLUMNS } from '../components/common/Table/TableData';

const AccountSubList = () => {
    const navigate = useNavigate();
    const goToWritePage = () => navigate('/account/sub/write');
    const goToModifyPage = () => navigate('/account/sub/modify'); 

    return (
        <>
            <h2 className="page-main-title">계정관리</h2>
            <div className="content-panel">
                <PageTitle title="부관리자 목록" />
                <Table data={SubUserList} columns={USER_LIST_COLUMNS} />
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', gap:'20px' }}>
                <Button variant="primary" size="large" onClick={goToWritePage}>등록</Button>
                <Button variant="secondary" size="large" onClick={goToModifyPage}>수정</Button>
            </div>
        </>
    );
};
export default AccountSubList;