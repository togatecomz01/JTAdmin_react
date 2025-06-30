import styles from './TableRow.module.scss';
import React from 'react';

interface TableRowProps {
    label?: string; //label을 선택사항으로
    children: React.ReactNode;
}

const TableRow = ({ label, children }: TableRowProps) => {
    return (
        <tr className={styles.tableRow}>
            {label && <th className={styles.labelCell}>{label}</th>}
            <td className={styles.contentCell} colSpan={label ? 1 : 2}>
                {children}
            </td>
        </tr>
    );
};

export default TableRow;