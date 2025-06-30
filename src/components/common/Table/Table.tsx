import styles from './Table.module.scss';
import React from 'react';

interface TableProps {
    children: React.ReactNode;
    className?: string;
    layout?: 'auto' | 'fixed'; //layout prop 추가
}

const Table = ({ children, className, layout = 'auto' }: TableProps) => {
    const tableClasses = [styles.table, layout === 'fixed' ? styles.fixedLayout : '', className].filter(Boolean).join(' ');
    
    return (
        <div className={`${styles.tableWrapper} ${className || ''}`}>
        <table className={tableClasses}>
            {children}
        </table>
        </div>
    );
};

export default Table;