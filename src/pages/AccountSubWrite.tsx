import React from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import Table from '../components/common/Table/Table';
import TableRow from '../components/common/Table/TableRow';
import Input from '../components/common/Input/Input';
import Button from '../components/common/Button/Button';
import Checkbox from '../components/common/Checkbox/Checkbox';
import {CheckOptions} from '../components/common/Checkbox/CheckboxData'

const AccountModify = () => {
    return (
        <div>
            {/* 페이지 상단 메인 타이틀 */}
            <h2 className="page-main-title">부관리자</h2>
            
            {/* 흰색 패널 컨테이너 */}
            <div className="content-panel">
                
                {/* 패널 내부 소제목 */}
                <PageTitle title="부관리자 등록" />
                
                {/* 메인 테이블 */}
                <Table>
                    <tbody>
                        {/* 2. TableRow와 Input을 사용해서 각 행을 구성합니다. */}
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

                        <TableRow label="메뉴권한 *">
                            <div className="form-input-wrapper" style={{ display: 'flex', gap: '10px' }}>
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
            
            {/* 하단 버튼 영역 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px', gap: '20px'}}>
                <Button variant="primary" size="large">저장</Button>
                <Button variant="secondary" size="large">목록</Button>
            </div>
        </div>
    );
};

export default AccountModify;



