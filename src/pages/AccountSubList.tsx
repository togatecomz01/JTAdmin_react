import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import Table from '../components/common/Table/Table';
import TableHeader from '../components/common/Table/TableHeader';
import TableDataItem from '../components/common/Table/TableDataItem';
import Button from '../components/common/Button/Button';
import { SubUserList, userListColumns } from '../components/common/Table/TableData'; 
import type { User } from '../components/common/Table/TableData';
import { useNavigate } from 'react-router-dom';

const AccountSubList = () => {
        const navigate = useNavigate();

        const goToWritePage = () => {
            navigate('/account/sub/write');
        };

        const goToModifyPage = () => {
            navigate('/account/sub/modify'); 
        };

    return (
        <div>
            <h2 className="page-main-title">계정관리</h2>
            <div className="content-panel">
                <PageTitle title="부관리자 목록" />
                <Table>
                    <TableHeader columns={userListColumns} />
                    <tbody>
                            {SubUserList.map((user: User) => (
                                <TableDataItem key={user.no}>
                                    <td>{user.no}</td>
                                    <td>{user.id}</td>
                                    <td>{user.department}</td>
                                    <td>{user.name}</td>{/* 여기도 tablerow만들어 놓긴 했는데 그걸 써도 어차피 td반복한거나 비슷한느낌.. */}
                                </TableDataItem>
                            ))}
                    </tbody>
                </Table>
            </div>
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', gap:'20px' }}>{/* 이런 버튼이 모여있는것도 div로 일일히 스타일 주지 말고 버튼 컨테이너같은걸로 묶어서 표현 */}
                <Button variant="primary" size="large"  onClick={goToWritePage}>등록</Button>
                <Button variant="secondary" size="large" onClick={goToModifyPage}>수정</Button>
            </div>
        </div>
    );
};

export default AccountSubList;