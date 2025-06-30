import React, { useState } from 'react';

import PageTitle from '../components/common/PageTitle/PageTitle';
import Table from '../components/common/Table/Table';
import TableHeader from '../components/common/Table/TableHeader';
import Input from '../components/common/Input/Input';
import Radio from '../components/common/Radio/Radio';
import Button from '../components/common/Button/Button';
import styles from './MenuManagement.module.scss';

const NEXT_PATH_NAME: { [key: number]: string } = {
    1: '대출',
    2: '대출상품',
    3: '신용대출',
};

const MenuManagement = () => {
    const [depth, setDepth] = useState(1);
    const [path, setPath] = useState<string[]>(['메뉴관리 > 메뉴']); //초기 경로

    const handleGoToNextDepth = () => {
        if (depth < 4) {
            const newPathName = NEXT_PATH_NAME[depth];

            setDepth(prevDepth => prevDepth + 1);
            setPath(prevPath => [...prevPath, newPathName]);
        }
    };

    let columns: string[];
    let columnWidths: string[];

    switch (depth) {
        case 1:
        case 2:
            columns = ['순서', '메뉴명', '하위메뉴 변경'];
            columnWidths = ['11%', '69%', '20%'];
            break;
        case 3:
            columns = ['순서', '메뉴명', 'URL', '활성', '하위메뉴 변경'];
            columnWidths = ['10%', '25%', '25%', '20%', '20%'];
            break;
        case 4:
        default:
            columns = ['순서', '메뉴명', 'URL', '활성'];
            columnWidths = ['10%', '25%', '45%', '20%'];
            break;
    }

    const breadcrumbTitle = path.join(' > ');
    const dummyRowCount = depth < 2 ? 7 : (depth < 3 ? 2 : 5);

    return (
        <div>
            <h2 className="page-main-title">메뉴관리</h2>
            <div className="content-panel">
                <PageTitle title={breadcrumbTitle} />
                <Table layout="fixed">
                    <colgroup>
                        {columnWidths.map((width, index) => (
                            <col key={index} style={{ width: width }} />
                        ))}
                    </colgroup>
                    <TableHeader columns={columns} />
                    <tbody>
                        {Array.from({ length: dummyRowCount }).map((_, index) => (
                            <tr key={`${depth}-${index}`} className={styles.menuRow}>
                                <td><Input type="text"/></td>
                                <td><Input type="text"/></td>

                                {/* URL, 활성 */}
                                {depth >= 3 && (
                                    <>
                                        <td><Input type="text" width="100%" /></td>
                                        <td className={depth === 4 ? styles.noBorderRight : ''}>
                                            <div className={styles.radioContainer}>
                                                <Radio name={`active-${index}`} label="예" />
                                                <Radio name={`active-${index}`} label="아니오" />
                                            </div>
                                        </td>
                                    </>
                                )}
                                
                                {/* 하위메뉴 변경 */}
                                {depth !== 4 && (
                                    <td className={styles.noBorderRight}>
                                        <Button
                                            variant="primary"
                                            size="xlarge" 
                                            onClick={handleGoToNextDepth}
                                        >
                                            바로가기
                                        </Button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            {/* 하단 저장 버튼 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button variant="primary" size="large">저장</Button>
            </div>
        </div>
    );
};

export default MenuManagement;