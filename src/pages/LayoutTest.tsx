import React from 'react';
import Table from '../components/common/Table/Table';
import TableRow from '../components/common/Table/TableRow';
import TableHeader from '../components/common/Table/TableHeader';
import TableDataItem from '../components/common/Table/TableDataItem';
import Input from '../components/common/Input/Input';
import Button from '../components/common/Button/Button';
import Radio from '../components/common/Radio/Radio';
import SearchInput from '../components/common/Searchinput/Searchinput';
import FileUploader from '../components/common/FileUploader/FileUploader';
import Checkbox from '../components/common/Checkbox/Checkbox';

const LayoutTest = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                {/* 페이지 제목 */}
                <h2>관리자 설정</h2>
                {/* 오른쪽 영역 */}
                <div>
                    <div style={{width: '300px'}}>
                        <SearchInput placeholder="검색" />
                    </div>
                </div>
            </div>

            <Table>
                <tbody>
                <TableRow label="ID">
                    <Input type="text" />
                </TableRow>

                <TableRow label="비밀번호">
                    <Input type="password" />
                </TableRow>

                <TableRow label="상태">
                    <Input type="text" /> {/* 모르고 select를 안만듬 (추가예정) */}
                </TableRow>

                <TableRow label="처리일자">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Input type="date" />
                    <span>~</span>
                    <Input type="date" />
                    </div>
                </TableRow>

                <TableRow label="검색">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
        </div>
    );
};

export default LayoutTest;