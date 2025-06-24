import styles from './Table.module.scss';
import React from 'react';

interface TableProps {
    children: React.ReactNode;
    className?: string;
}

const Table = ({ children, className }: TableProps) => {
    return (
        <div className={`${styles.tableWrapper} ${className || ''}`}>
        <table className={styles.table}>
            {children}
        </table>
        </div>
    );
};

export default Table;