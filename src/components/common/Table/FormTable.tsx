import React from 'react';
import TableRow from './TableRow'; 
import styles from './Table.module.scss'; 

interface FieldDef {
    label?: string;
    content: React.ReactNode;
}

interface FormTableProps {
    fields: FieldDef[];
}

const FormTable = ({ fields }: FormTableProps) => {
    const tableClasses = `${styles.table} ${styles.fixedLayout}`;

    return (
        <div className={styles.tableWrapper}>
            <table className={tableClasses}>
                <colgroup>
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '80%' }} />
                </colgroup>
                <tbody>
                    {fields.map((field, index) => (
                        <TableRow key={index} label={field.label}>
                            {field.content}
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FormTable;