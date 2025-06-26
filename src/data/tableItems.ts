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
  ...ACCOUNT_MENU,
  {
    title: "메뉴권한",
    type: "checkbox",
    items: ["메인관리", "메뉴관리", "회사관리", "금융소비자", "자료실"],
  },
];

export const ACCOUNT_MENU_NOTICE_WRITE = [
  {
    title: "작성자",
    type: "",
  },
  {
    title: "작성일",
    type: "",
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
    type: "",
  },
  {
    title: "수정일",
    type: "",
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
