import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import Table from '../components/common/Table/Table';
import TableRow from '../components/common/Table/TableRow';
import Input from '../components/common/Input/Input';
import Button from '../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

const AccountModify = () => {
    const navigate = useNavigate();

    //목록 버튼 클릭 시 AccountList 페이지로 이동
    const goToList = () => {
        navigate('/account/main');
    };

    const handleSave = () => {
        //여기에 나중에 저장로직 추가
        goToList();
    };
    
    return (
        <div>
            <h2 className="page-main-title">메인관리자</h2>
            <div className="content-panel">
                <PageTitle title="관리자 설정" />
                <Table>
                    <tbody>
                        
                        <TableRow label="ID *">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Input type="text" width="33%" />
                            </div>
                        </TableRow>

                        <TableRow label="비밀번호 *">
                            <Input type="password" width="33%" />
                        </TableRow>

                        <TableRow label="비밀번호 확인 *">
                            <Input type="password" width="33%" />
                        </TableRow>

                        <TableRow label="부서명 *">
                            <Input type="text" width="33%" />
                        </TableRow>

                        <TableRow label="성명 *">
                            <Input type="text" width="33%" />
                        </TableRow>

                        <TableRow label="연락처 *">
                            <Input type="text" width="33%" />
                        </TableRow>

                        <TableRow label="이메일 *">
                            <Input type="text" width="33%" />
                        </TableRow>
                        
                    </tbody>
                </Table>
            </div>
            
            {/* 하단 버튼 영역 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '20px'}}>
                <Button variant="primary" size="large" onClick={handleSave}>저장</Button>
                <Button variant="secondary" size="large" onClick={goToList}>목록</Button>
            </div>
        </div>
    );
};

export default AccountModify;



