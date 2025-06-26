import styles from './TableDataItem.module.scss';
import React from 'react';

interface TableDataItemProps {
    children: React.ReactNode;
}

const TableDataItem = ({ children }: TableDataItemProps) => {
    return (
        <tr className={styles.dataRow}>
            {children}
        </tr>
    );
};

export default TableDataItem;