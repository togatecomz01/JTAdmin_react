export interface User {
    no: number;
    id: string;
    department: string;
    name: string;
}
export interface BoardPost {
    no: number;
    title: string;
    postDate: string;
    baseDate: string;
    author: string;
    createdDate: string;
    modifier: string;
    modifiedDate: string;
}
export const userList: User[] = [
    { no: 1, id: 'jtadmin1', department: '고객지원팀', name: '홍길동' },
    { no: 2, id: 'user01', department: '개발팀', name: '김철수' },
    { no: 3, id: 'design01', department: '디자인팀', name: '이영희' },
];
export const SubUserList: User[] = [
    { no: 1, id: 'jtadmin1', department: '영업지원부', name: '홍길동' },
    { no: 2, id: 'jtadmin2', department: '리테일근무팀', name: '홍길서' },
    { no: 3, id: 'jtadmin3', department: '디지털추진부', name: '홍길남' },
    { no: 4, id: 'jtadmin4', department: '고객지원팀', name: '홍길북' },
];
export const NoticeList: BoardPost[] = [
    { no: 6, title: '게시판제목', postDate: '2022.01.06', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
    { no: 5, title: '게시판제목', postDate: '2022.01.05', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
    { no: 4, title: '게시판제목', postDate: '2022.01.04', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
    { no: 3, title: '게시판제목', postDate: '2022.01.03', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
    { no: 2, title: '게시판제목', postDate: '2022.01.02', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
    { no: 1, title: '게시판제목', postDate: '2022.01.01', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
];

export const userListColumns: string[] = ['No', 'ID', '부서', '이름'];
export const NoticeListColumns: string[] = ['제목', '게시일', '기준일', '작성자', '작성일', '수정자', '수정일'];
