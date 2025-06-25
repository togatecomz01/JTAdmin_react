import styles from './TableDataItem.module.scss';
import React from 'react';

//실제 데이터 구조에 맞게 수정해야함 -> 예정
interface UserData {
    no: number;
    id: string;
    department: string;
    name: string;
}

interface TableDataItemProps {
    item: UserData;
}

const TableDataItem = ({ item }: TableDataItemProps) => {
    return (
        <tr className={styles.dataRow}>
            <td>{item.no}</td>
            <td>{item.id}</td>
            <td>{item.department}</td>
            <td>{item.name}</td>
        </tr>
    );
};

export default TableDataItem;