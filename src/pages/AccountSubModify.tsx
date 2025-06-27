import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import Table from '../components/common/Table/Table';
import TableRow from '../components/common/Table/TableRow';
import Input from '../components/common/Input/Input';
import Button from '../components/common/Button/Button';
import Checkbox from '../components/common/Checkbox/Checkbox';
import {CheckOptions} from '../components/common/Checkbox/CheckboxData'
import { useNavigate } from 'react-router-dom';

const AccountSubModify = () => {
    const navigate = useNavigate();

    const goToListPage = () => {
            navigate('/account/sub/');
        };
    return (
        <div>
            <h2 className="page-main-title">부관리자</h2>
            <div className="content-panel">
                <PageTitle title="부관리자 수정" />
                <Table>
                    <tbody>
                        <TableRow label="ID * ">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                수정불가
                            </div>
                        </TableRow>

                        <TableRow label="비밀번호 *">
                            <Input type="password" width="33%" placeholder='********' />
                        </TableRow>

                        <TableRow label="비밀번호 확인 *">
                            <Input type="password" width="33%" placeholder='********' />
                        </TableRow>

                        <TableRow label="부서명 *">
                            <Input type="text" width="33%" placeholder='영업추진부' />
                        </TableRow>

                        <TableRow label="성명 *">
                            <Input type="text" width="33%" placeholder='홍길동' />
                        </TableRow>

                        <TableRow label="연락처 *">
                            <Input type="text" width="33%" placeholder='010-1234-5678' />
                        </TableRow>

                        <TableRow label="메뉴권한 *">
                            <div className="form-input-wrapper" style={{ display: 'flex', gap: '10px'}}>
                                {CheckOptions.map((option) => (
                                    <Checkbox
                                        key={option.id}
                                        label={option.label}
                                    />
                                ))}
                            </div>
                        </TableRow>
                        
                    </tbody>
                </Table>
            </div>
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '20px'}}>
                <Button variant="primary" size="large" onClick={goToListPage}>저장</Button>
                <Button variant="secondary" size="large" onClick={goToListPage}>목록</Button>
            </div>
        </div>
    );
};

export default AccountSubModify;



