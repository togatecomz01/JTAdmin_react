import React from 'react';
import styles from './Pagination.module.scss';
import ArrowIcon from '../img/page_arrow_icon.png';
import Button from '../Button/Button';
import { NavLink } from "react-router-dom";
const Pagination = () => { //기능없음 
    const baseUrl = "/account/board"; 
    return (
        <div className={styles.pagination}>
            <Button variant="pagination_arrow" className={styles.prev}>
                <img src={ArrowIcon} alt="이전 페이지" />
            </Button>
            <NavLink to={`${baseUrl}?page=1`} className={styles.pageNumber}>1</NavLink>
            <NavLink to={`${baseUrl}?page=2`} className={styles.pageNumber}>2</NavLink>
            <NavLink to={`${baseUrl}?page=3`} className={styles.pageNumber}>3</NavLink>
            <Button variant="pagination_arrow">
                <img src={ArrowIcon} alt="다음 페이지" />
            </Button>
        </div>
    );
};

export default Pagination;

        