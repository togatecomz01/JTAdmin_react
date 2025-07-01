import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import FormTable from '../components/common/Table/FormTable';
import Button from '../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { getNoticeWriteFormFields } from '../components/common/Table/TableData';

const NoticeWrite = () => {
    const navigate = useNavigate();
    const goToListPage = () => navigate('/account/board/');
    
    const authorName = "홍길동";
    const today = new Date().toISOString().split('T')[0];

    const formFields = getNoticeWriteFormFields(authorName, today);

    return (
        <>
            <h2 className="page-main-title">계정관리</h2>
            <div className="content-panel">
                <PageTitle title="게시판 등록" />
                <FormTable fields={formFields} />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '20px'}}>
                <Button variant="primary" size="large" onClick={goToListPage}>저장</Button>
                <Button variant="secondary" size="large" onClick={goToListPage}>목록</Button>
                <Button variant="neutral" size="large" onClick={goToListPage}>취소</Button>
            </div>
        </>
    );
};
export default NoticeWrite;