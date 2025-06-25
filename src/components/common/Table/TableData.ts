// src/data/dummyData.ts

// 1. 데이터의 타입을 export하여 다른 파일에서도 이 타입을 참조할 수 있게 합니다.
export interface User {
    no: number;
    id: string;
    department: string;
    name: string;
}

// 2. 사용자 목록 데이터를 export 합니다.
export const userList: User[] = [
    { no: 1, id: 'jtadmin1', department: '고객지원팀', name: '홍길동' },
    { no: 2, id: 'user01', department: '개발팀', name: '김철수' },
    { no: 3, id: 'design01', department: '디자인팀', name: '이영희' },
];

// 3. 사용자 목록 테이블의 헤더(컬럼) 정보도 여기서 함께 관리하면 좋습니다.
export const userListColumns: string[] = ['No', 'ID', '부서', '이름'];