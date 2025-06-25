import styles from './TableRow.module.scss';
import React from 'react';

interface TableRowProps {
    label: string;
    children: React.ReactNode;
}

const TableRow = ({ label, children }: TableRowProps) => {
    return (
        <tr className={styles.tableRow}>
            <th className={styles.labelCell}>{label}</th>
            <td className={styles.contentCell}>{children}</td>
        </tr>
    );
};

export default TableRow; /* 테이블 행 관련 테이블 -> 라벨 - Input 구조 테이블 작성할 떄 사용*/