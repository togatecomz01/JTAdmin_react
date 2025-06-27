import Button from "../common/Button/Button";

export const ACCOUNT_MENU = [
  {
    title: "ID",
    type: "text",
  },
  {
    title: "비밀번호",
    type: "password",
  },
  {
    title: "비밀번호 확인",
    type: "password",
  },
  {
    title: "부서명",
    type: "text",
  },
  {
    title: "성명",
    type: "text",
  },
  {
    title: "연락처",
    type: "number",
  },
];

export const ACCOUNT_MENU_MAIN = [
  ...ACCOUNT_MENU,
  {
    title: "이메일",
    type: "email",
  },
];

export const ACCOUNT_MENU_SUB = [
  {
    title: "ID",
    type: "text",
  },
  {
    title: "비밀번호",
    type: "password",
  },
  {
    title: "비밀번호 확인",
    type: "password",
  },
  {
    title: "부서명",
    type: "text",
  },
  {
    title: "성명",
    type: "text",
  },
  {
    title: "연락처",
    type: "number",
  },
  {
    title: "메뉴권한",
    type: "checkbox",
    items: ["메인관리", "메뉴관리", "회사관리", "금융소비자", "자료실"],
  },
];

export const ACCOUNT_MENU_MODIFY = [
  {
    title: "ID",
    type: "constant",
    constant: "jt + 사번",
  },
  {
    title: "비밀번호",
    type: "password",
    placeholder: "password",
  },
  {
    title: "비밀번호 확인",
    type: "password",
    placeholder: "password",
  },
  {
    title: "부서명",
    type: "text",
    placeholder: "영업추진부",
  },
  {
    title: "성명",
    type: "text",
    placeholder: "홍길동",
  },
  {
    title: "연락처",
    type: "number",
    placeholder: "01012345678",
  },
  {
    title: "메뉴권한",
    type: "checkbox",
    items: ["메인관리", "메뉴관리", "회사관리", "금융소비자", "자료실"],
  },
];

export const ACCOUNT_MENU_NOTICE_WRITE = [
  {
    title: "작성자",
    type: "constant",
    constant: "홍길동",
  },
  {
    title: "작성일",
    type: "constant",
    constant: "2025.06.25",
  },
  {
    title: "제목",
    type: "text",
  },
  {
    title: "게시일",
    type: "date",
  },
  {
    title: "기준일",
    type: "date",
  },
  {
    title: "내용",
    type: "textarea",
  },
  {
    title: "이미지파일",
    type: "image",
  },
  {
    title: "이미지 alt값",
    type: "text",
  },
  {
    title: "첨부파일",
    type: "file",
  },
];

export const ACCOUNT_MENU_NOTICE_MODIFY = [
  {
    title: "수정자",
    type: "constant",
    constant: "홍길동",
  },
  {
    title: "수정일",
    type: "constant",
    constant: "2025.06.25",
  },
  {
    title: "제목",
    type: "text",
  },
  {
    title: "게시일",
    type: "date",
  },
  {
    title: "기준일",
    type: "date",
  },
  {
    title: "내용",
    type: "textarea",
  },
  {
    title: "적용이미지",
    type: "constant",
    constant: "img 노출",
  },
  {
    title: "적용이미지파일",
    type: "constant",
    constant: "이미지 파일명",
  },
  {
    title: "이미지파일",
    type: "image",
  },
  {
    title: "이미지 alt값",
    type: "text",
  },
  {
    title: "첨부파일명",
    type: "constant",
    constant: (
      <>
        <span>보이스피싱_사기예방_안내문.hwp</span>
        <Button name="삭제" />
      </>
    ),
  },
  {
    title: "첨부파일",
    type: "file",
  },
];
