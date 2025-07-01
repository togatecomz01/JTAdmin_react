import React, { useState, useEffect } from 'react';
import PageTitle from '../components/common/PageTitle/PageTitle';
import Table, { type ColumnDef } from '../components/common/Table/Table';
import Input from '../components/common/Input/Input';
import Radio from '../components/common/Radio/Radio';
import Button from '../components/common/Button/Button';
import Popup from '../components/common/Popup/Popup';
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

    const dummyRowCount = depth < 2 ? 7 : (depth < 3 ? 2 : 5);
    const tableData: MenuRowData[] = Array.from({ length: dummyRowCount }, (_, i) => ({ id: i }));

    const [isPopupOpen, setIsPopupOpen] = useState(false);//popup 띄우기용 상태관리

    const handleGoToNextDepth = () => {
        if (depth < 4) {
            const newPathName = NEXT_PATH_NAME[depth];
            setDepth(prevDepth => prevDepth + 1);
            setPath(prevPath => [...prevPath, newPathName]);
        }
    };

    useEffect(() => {//popup띄울 depth체크하는 useEffect, 일단 팝업을 띄울만한 조건이 4depth일 떄 하위메뉴 없다라는 것을 보여주기 위한 느낌으로 일단 첨부 
            if (depth === 4) {
                setIsPopupOpen(true);
            }
        }, [depth]);

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


    return (
        <>
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
            {isPopupOpen && (
                <Popup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    actions={<Button variant="primary" className="popup-button" onClick={() => setIsPopupOpen(false)}>확인</Button>}
                >
                    관리하실 하위 메뉴가 존재하지 않습니다.
                </Popup>
            )}
        </>
    );
};

export default MenuManagement;