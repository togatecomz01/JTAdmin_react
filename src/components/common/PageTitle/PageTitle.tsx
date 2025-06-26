import styles from './PageTitle.module.scss';
import React from 'react';

interface PageTitleProps {
    title: string;
    children?: React.ReactNode; 
}

const PageTitle = ({ title, children }: PageTitleProps) => {
    return (
        <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{title}</h2>
            {children && <div className={styles.controls}>{children}</div>}
        </div>
    );
};

export default PageTitle;