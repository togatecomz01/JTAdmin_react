export interface Option {
    value: string | number;
    label: string;
}

export const statusOptions: Option[] = [
    { value: '', label: '선택' },
    { value: 'op1', label: '옵션1' },
    { value: 'op2', label: '옵션2' }
];


/* export const categoryOptions: Option[] = [
    { value: '', label: '전체' },
    { value: 'notice', label: '공지사항' },
    { value: 'event', label: '이벤트' },
    { value: 'faq', label: '자주묻는질문' },
    ]; */

//다른 종류의 Select 옵션 데이터를 계속해서 추가 ...