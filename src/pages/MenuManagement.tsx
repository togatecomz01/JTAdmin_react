import React, { useState } from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import Table, { type ColumnDef } from '../components/common/Table/Table';
import Input from '../components/common/Input/Input';
import Radio from '../components/common/Radio/Radio';
import Button from '../components/common/Button/Button';

const NEXT_PATH_NAME: { [key: number]: string } = {
    1: '대출',
    2: '대출상품',
    3: '신용대출',
};

interface MenuRowData {
    id: number;
}

const MenuManagement = () => {
    const [depth, setDepth] = useState(1);
    const [path, setPath] = useState<string[]>(['메뉴관리 > 메뉴']);

    const handleGoToNextDepth = () => {
        if (depth < 4) {
            const newPathName = NEXT_PATH_NAME[depth];
            setDepth(prevDepth => prevDepth + 1);
            setPath(prevPath => [...prevPath, newPathName]);
        }
    };

    const columns: ColumnDef<MenuRowData>[] = [
        {
            header: '순서',
            accessorKey: 'order',
            width: '11%',
            cell: () => <Input type="text" />,
        },
        {
            header: '메뉴명',
            accessorKey: 'name',
            width: depth === 4 ? '25%' : (depth === 3 ? '25%' : '69%'),
            cell: () => <Input type="text" />,
        },
    ];

    if (depth >= 3) {
        columns.push(
            {
                header: 'URL',
                accessorKey: 'url',
                width: depth === 4 ? '45%' : '25%',
                cell: () => <Input type="text" />,
            },
            {
                header: '활성',
                accessorKey: 'status',
                width: '20%',
                cell: ({ id }) => (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                        <Radio name={`active-${id}`} label="예" />
                        <Radio name={`active-${id}`} label="아니오" />
                    </div>
                )
            }
        );
    }
    
    if (depth !== 4) {
        columns.push({
            header: '하위메뉴 변경',
            accessorKey: 'actions',
            width: '20%',
            cell: () => (
                <Button
                    variant="primary"
                    size="xlarge"
                    onClick={handleGoToNextDepth}
                >
                    바로가기
                </Button>
            ),
        });
    }

    const dummyRowCount = depth < 2 ? 7 : (depth < 3 ? 2 : 5);
    const tableData: MenuRowData[] = Array.from({ length: dummyRowCount }, (_, i) => ({ id: i }));

    return (
        <div>
            <h2 className="page-main-title">메뉴관리</h2>
            <div className="content-panel">
                <PageTitle title={path.join(' > ')} />
                <Table<MenuRowData>
                    layout="fixed"
                    data={tableData}
                    columns={columns}
                />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button variant="primary" size="large">저장</Button>
            </div>
        </div>
    );
};

export default MenuManagement;