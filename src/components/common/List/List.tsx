// src/components/common/List/List.tsx (새 파일)

import React from 'react';
import PageTitle from '../PageTitle/PageTitle';

interface ListProps {
    title: string;
    searchArea?: React.ReactNode;
    table: React.ReactNode;
    pagination?: React.ReactNode;
}

const List = ({ title, searchArea, table, pagination }: ListProps) => {
    return (
        <>
            <PageTitle title={title}>{searchArea}</PageTitle>
            {table}
            {pagination && <div style={{ marginTop: '40px' }}>{pagination}</div>}
        </>
    );
};

export default List;