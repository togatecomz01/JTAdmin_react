import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import FormTable from '../components/common/Table/FormTable';
import Button from '../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_MODIFY_FORM_FIELDS } from '../components/common/Table/TableData';

const AccountModify = () => {
    const navigate = useNavigate();
    const goToList = () => navigate('/account/main');
    const handleSave = () => goToList();
    
    return (
        <>
            <h2 className="page-main-title">메인관리자</h2>
            <div className="content-panel">
                <PageTitle title="관리자 설정" />
                <FormTable fields={ACCOUNT_MODIFY_FORM_FIELDS} />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '20px'}}>
                <Button variant="primary" size="large" onClick={handleSave}>저장</Button>
                <Button variant="secondary" size="large" onClick={goToList}>목록</Button>
            </div>
        </>
    );
};
export default AccountModify;