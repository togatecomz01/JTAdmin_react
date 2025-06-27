import styles from './PageTitle.module.scss';
import React from 'react';

interface PageTitleProps {
    title: React.ReactNode; 
    children?: React.ReactNode;
    className?: string;
}

const PageTitle = ({ title, children, className }: PageTitleProps) => {
    const wrapperClass = `${styles.titleWrapper} ${className || ''}`;

    return (
        <div className={wrapperClass}>
            <h2 className={styles.title}>{title}</h2>
            {children && <div className={styles.controls}>{children}</div>}
        </div>
    );
};

export default PageTitle;