import styles from './TableHeader.module.scss';
import React from 'react';

// ['No', 'ID', '이름'] 같은 문자열 배열을 props로 받음
interface TableHeaderProps {
    columns: string[];
}

const TableHeader = ({ columns }: TableHeaderProps) => {
    return (
        <thead className={styles.tableHeader}>
        <tr>
            {columns.map((column, index) => (
            <th key={index}>{column}</th>
            ))}
        </tr>
        </thead>
    );
};

export default TableHeader;