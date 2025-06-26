import styles from './TableHeader.module.scss';
import React from 'react';

//['No', 'ID', '이름'] 같은 문자열 배열을 props로 받음
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

export default TableHeader; /* 세로 기준 테이블 - 첫줄에 header가 있고 그 밑으로는 데이터를 넣는 테이블 ex) userdata*/