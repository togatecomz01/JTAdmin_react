import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import FormTable from '../components/common/Table/FormTable';
import Button from '../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_SUB_WRITE_FORM_FIELDS } from '../components/common/Table/TableData';

const AccountSubWrite = () => {
    const navigate = useNavigate();
    const goToListPage = () => navigate('/account/sub/');

    return (
        <div>
            <h2 className="page-main-title">부관리자</h2>
            <div className="content-panel">
                <PageTitle title="부관리자 등록" />
                <FormTable fields={ACCOUNT_SUB_WRITE_FORM_FIELDS} />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '20px'}}>
                <Button variant="primary" size="large" onClick={goToListPage}>저장</Button>
                <Button variant="secondary" size="large" onClick={goToListPage}>목록</Button>
            </div>
        </div>
    );
};
export default AccountSubWrite;