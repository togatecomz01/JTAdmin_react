import React, { useState } from 'react';

import PageTitle from '../components/common/PageTitle/PageTitle';
import SearchInput from '../components/common/Searchinput/Searchinput';
import Table from '../components/common/Table/Table';
import TableRow from '../components/common/Table/TableRow';
import Input from '../components/common/Input/Input';
import Button from '../components/common/Button/Button';
import Radio from '../components/common/Radio/Radio';
import Pagination from '../components/common/Pagination/Pagination';
import Select from '../components/common/Selectinput/Selectinput';
import { statusOptions } from '../components/common/Selectinput/optionData';

const LayoutTest = () => {
    const [selectedStatus, setSelectedStatus] = useState(statusOptions[0].value);

    //Select의 값이 변경 -> 호출될 함수생성핸들러
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('선택된 값:', event.target.value);
        setSelectedStatus(event.target.value);
    };

    return (
        <div className="content-panel">
            <PageTitle title="부관리자 등록"/>
                <div className="control-panel">
                    {/* 왼쪽 컨트롤 */}
                    <div style={{ width: '30%' }}>
                    <Select options={statusOptions} />
                    </div>

                    {/* 오른쪽 컨트롤 */}
                    <div style={{ width: '20%' }}>
                    <SearchInput placeholder="검색" />
                    </div>
                </div>
            {/*메인 테이블*/}
            <Table>
                <tbody>
                <TableRow label="ID">
                    <Input type="text" width="30%" />
                </TableRow>

                <TableRow label="비밀번호">
                    <Input type="password" width="30%" />
                </TableRow>

                <TableRow label="상태">
                    <div style={{ width: '30%' }}>
                    <Select options={statusOptions} value={selectedStatus} onChange={handleStatusChange}/>
                    </div>
                </TableRow>

                <TableRow label="처리일자">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width:'14%'}}>
                    <Input type="date" />
                    <span>~</span>
                    <Input type="date" />
                    </div>
                </TableRow>

                <TableRow label="검색">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '35%'}}>
                    <Input type="text" />
                    <Button variant="primary" size="small">검색</Button>
                    </div>
                </TableRow>

                <TableRow label="라디오 선택">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Radio name="menu-type" label="메인관리" />
                    <Radio name="menu-type" label="메뉴관리" />
                    <Radio name="menu-type" label="회사관리" />
                    <Radio name="menu-type" label="금융소비자" />
                    </div>
                </TableRow>
                </tbody>
            </Table>
            
            <Pagination />
            
        </div>
    );
};

export default LayoutTest;