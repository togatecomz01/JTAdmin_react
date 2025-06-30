import React from 'react';
import styles from './Table.module.scss'; 

export interface ColumnDef<T> {
    accessorKey: keyof T | 'actions' | string;
    header: string;
    width?: string;
    cell?: (row: T) => React.ReactNode; 
}

interface TableProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
    layout?: 'auto' | 'fixed';
}

function Table<T extends object>({ data, columns, layout = 'auto' }: TableProps<T>) {
    const tableClasses = [styles.table, layout === 'fixed' ? styles.fixedLayout : ''].join(' ');

    return (
        <div className={styles.tableWrapper}>
            <table className={tableClasses}>
                {layout === 'fixed' && (
                    <colgroup>
                        {columns.map((col, index) => (
                            <col key={index} style={{ width: col.width }} />
                        ))}
                    </colgroup>
                )}
                <thead>
                    <tr className={styles.tableHeaderRow}>
                        {columns.map((col, index) => (
                            <th key={index}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={styles.dataRow}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>
                                    {col.cell 
                                        ? col.cell(row) 
                                        : String(row[col.accessorKey as keyof T] ?? '')}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;