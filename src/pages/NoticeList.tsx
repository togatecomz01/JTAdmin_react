import React from 'react';
import List from '../components/common/List/List';
import Table from '../components/common/Table/Table';
import Button from '../components/common/Button/Button';
import SearchInput from '../components/common/Searchinput/Searchinput';
import Pagination from '../components/common/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { NoticeList as noticeData, NOTICE_LIST_COLUMNS } from '../components/common/Table/TableData';

const NoticeList = () => {
    const navigate = useNavigate();
    const handleWriteClick = () => navigate('/account/board/write');
    const handleModifyClick = () => navigate('/account/board/modify');

    return (
        <>
            <h2 className="page-main-title">계정관리</h2>
            <div className="content-panel">
                <List
                    title="게시판"
                    searchArea={<div style={{ width: '300px' }}><SearchInput placeholder="검색" /></div>}
                    table={<Table data={noticeData} columns={NOTICE_LIST_COLUMNS} />}
                    pagination={<Pagination />}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', gap:'20px'}}>
                <Button variant="primary" size="large" onClick={handleWriteClick}>등록</Button>
                <Button variant="secondary" size="large" onClick={handleModifyClick}>수정</Button>
            </div>
        </>
    );
};
export default NoticeList;