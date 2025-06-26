import React from 'react';
import styles from './Pagination.module.scss';
import ArrowIcon from '../img/page_arrow_icon.png';
import Button from '../Button/Button';
const Pagination = () => { //기능없음 
    return (
        <div className={styles.pagination}>
            <Button variant="pagination_arrow" className={styles.prev}>
                <img src={ArrowIcon} alt="이전 페이지" />
            </Button>
            <a href="#" className={`${styles.pageNumber} ${styles.active}`}>1</a>
            <a href="#" className={styles.pageNumber}>2</a>
            <a href="#" className={styles.pageNumber}>3</a>
            <Button variant="pagination_arrow">
                <img src={ArrowIcon} alt="다음 페이지" />
            </Button>
        </div>
    );
};

export default Pagination;

        