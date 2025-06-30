import React from 'react';
import type { ColumnDef } from './Table';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Textarea from '../Textarea/Textarea';
import FileUploader from '../FileUploader/FileUploader';
import { CheckOptions } from '../Checkbox/CheckboxData';


//Interfaces
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


//임시 데이터(데이터를 받아왔을 때 어떻게 보이나 임시로 추가한 데이터)
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
    { no: 1, title: '게시판제목', postDate: '2022.01.06', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
    { no: 2, title: '게시판제목', postDate: '2022.01.06', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
    { no: 3, title: '게시판제목', postDate: '2022.01.06', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
    { no: 4, title: '게시판제목', postDate: '2022.01.06', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
    { no: 5, title: '게시판제목', postDate: '2022.01.06', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
    { no: 6, title: '게시판제목', postDate: '2022.01.06', baseDate: '2022.01.01', author: '홍길동', createdDate: '2022.01.01', modifier: '홍길동', modifiedDate: '2022.01.01' },
];


//계정 관리 (Account)

//관리자
export const USER_LIST_COLUMNS: ColumnDef<User>[] = [
    { accessorKey: 'no', header: 'No' },
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'department', header: '부서명' },
    { accessorKey: 'name', header: '성명' },
];

export const ACCOUNT_MODIFY_FORM_FIELDS = [
    { label: "ID *", content: <Input type="text" width="33%" /> },
    { label: "비밀번호 *", content: <Input type="password" width="33%" /> },
    { label: "비밀번호 확인 *", content: <Input type="password" width="33%" /> },
    { label: "부서명 *", content: <Input type="text" width="33%" /> },
    { label: "성명 *", content: <Input type="text" width="33%" /> },
    { label: "연락처 *", content: <Input type="text" width="33%" /> },
    { label: "이메일 *", content: <Input type="text" width="33%" /> },
];

//부관리자
export const ACCOUNT_SUB_WRITE_FORM_FIELDS = [
    { label: "ID *", content: <Input type="text" width="33%" /> },
    { label: "비밀번호 *", content: <Input type="password" width="33%" /> },
    { label: "비밀번호 확인 *", content: <Input type="password" width="33%" /> },
    { label: "부서명 *", content: <Input type="text" width="33%" /> },
    { label: "성명 *", content: <Input type="text" width="33%" /> },
    { label: "연락처 *", content: <Input type="text" width="33%" /> },
    {
        label: "메뉴권한 *",
        content: (
            <div style={{ display: 'flex', gap: '10px' }}>
                {CheckOptions.map((option) => (
                    <Checkbox key={option.id} label={option.label} />
                ))}
            </div>
        )
    }
];

export const ACCOUNT_SUB_MODIFY_FORM_FIELDS = [
    { label: "ID * ", content: <div>수정불가</div> },
    { label: "비밀번호 *", content: <Input type="password" width="33%" placeholder='********' /> },
    { label: "비밀번호 확인 *", content: <Input type="password" width="33%" placeholder='********' /> },
    { label: "부서명 *", content: <Input type="text" width="33%" placeholder='영업추진부' /> },
    { label: "성명 *", content: <Input type="text" width="33%" placeholder='홍길동' /> },
    { label: "연락처 *", content: <Input type="text" width="33%" placeholder='010-1234-5678' /> },
    {
        label: "메뉴권한 *",
        content: (
            <div style={{ display: 'flex', gap: '10px' }}>
                {CheckOptions.map((option) => (
                    <Checkbox key={option.id} label={option.label} />
                ))}
            </div>
        )
    }
];


// 게시판 관리 (Notice)
export const NOTICE_LIST_COLUMNS: ColumnDef<BoardPost>[] = [
    { accessorKey: 'title', header: '제목' },
    { accessorKey: 'postDate', header: '게시일' },
    { accessorKey: 'author', header: '작성자' },
    { accessorKey: 'createdDate', header: '작성일' },
];

export const getNoticeWriteFormFields = (authorName: string, today: string) => [
    { label: "작성자", content: <p>{authorName}</p> },
    { label: "작성일", content: <p>{today}</p> },
    { label: "제목 *", content: <Input type="text" width="33%" /> },
    { label: "게시일 *", content: <Input type="date" width="180px" /> },
    { label: "기준일 *", content: <Input type="date" width="180px" /> },
    { label: "내용 *", content: <Textarea /> },
    { label: "이미지파일", content: <FileUploader /> },
    { label: "이미지 alt값", content: <Input type="text" placeholder="신속한 처리, 친절한 안내..." /> },
    { 
        label: "첨부파일",
        content: (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FileUploader />
                <FileUploader />
                <FileUploader />
            </div>
        )
    }
];

export const getNoticeModifyFormFields = (authorName: string, today: string, files: {id: number, name: string}[]) => {
    return [
        { label: "수정자", content: <p>{authorName}</p> },
        { label: "수정일", content: <p>{today}</p> },
        { label: "제목 *", content: <Input type="text" width="33%" /> },
        { label: "게시일 *", content: <Input type="date" width="180px" /> },
        { label: "기준일 *", content: <Input type="date" width="180px" /> },
        { label: "내용 *", content: <Textarea /> },
        { label: "적용이미지 *", content: <p>img 노출</p> },
        { label: "적용이미지파일 *", content: <p>이미지파일명.jpg</p> },
        { label: "이미지파일", content: <FileUploader /> },
        { label: "이미지 alt값", content: <Input type="text" placeholder="신속한 처리, 친절한 안내..." /> },
        {
            label: "첨부파일명",
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {files.map(file => (
                        <div key={file.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>{file.name}</span>
                            <Button variant="primary" size="small">삭제</Button>
                        </div>
                    ))}
                </div>
            )
        },
        {
            label: "첨부파일",
            content: (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <FileUploader />
                    <FileUploader />
                    <FileUploader />
                </div>
            )
        }
    ];
};