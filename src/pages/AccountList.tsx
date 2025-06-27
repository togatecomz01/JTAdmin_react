import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import Table from '../components/common/Table/Table';
import TableHeader from '../components/common/Table/TableHeader';
import TableDataItem from '../components/common/Table/TableDataItem';
import Button from '../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { userList , userListColumns} from '../components/common/Table/TableData'; 
import type { User } from '../components/common/Table/TableData';

const AccountList = () => {
    const navigate = useNavigate();

    const handleModifyClick = () => {
        navigate('/account/modify');
    }

    return (
        <div>
            <h2 className="page-main-title">계정관리</h2>
            <div className="content-panel">
                <PageTitle title="메인관리자 목록" />
                <Table>
                    <TableHeader columns={userListColumns} />
                    <tbody>
                        {userList.map((user: User) => (
                            <TableDataItem key={user.no}>
                                <td>{user.no}</td>
                                <td>{user.id}</td>
                                <td>{user.department}</td>
                                <td>{user.name}</td>
                            </TableDataItem>
                        ))}
                    </tbody>
                </Table>
            </div>
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button variant="primary" size="large" onClick={handleModifyClick}>수정</Button>
            </div>
        </div>
    );
};

export default AccountList;