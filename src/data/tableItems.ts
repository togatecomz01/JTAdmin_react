export const HEADER = [{ text: "ID", value: "text" }];

export const ACCOUNT_TABLE = {
  headers: [
    {
      text: "ID",
      value: "id",
    },
    {
      text: "비밀번호",
      value: "password",
    },
    {
      text: "비밀번호 확인",
      value: "passwordCheck",
    },
    {
      text: "부서명",
      value: "department",
    },
    {
      text: "성명",
      value: "name",
    },
    {
      text: "연락처",
      value: "contact",
    },
  ],
};

export const ACCOUNT_TABLE_MAIN = {
  headers: [
    ...ACCOUNT_TABLE.headers,
    {
      text: "이메일",
      value: "email",
    },
  ],
};

export const ACCOUNT_TABLE_SUB = {
  headers: [
    ...ACCOUNT_TABLE.headers,
    {
      text: "메뉴권한",
      value: "checkbox",
      items: ["메인관리", "메뉴관리", "회사관리", "금융소비자", "자료실"],
    },
  ],
};

export const ACCOUNT_TABLE_SUB_MODIFY = {
  headers: [
    ...ACCOUNT_TABLE.headers,
    {
      text: "메뉴권한",
      value: "checkbox",
      items: ["메인관리", "메뉴관리", "회사관리", "금융소비자", "자료실"],
    },
  ],
};

export const ACCOUNT_TABLE_NOTICE_WRITE = {
  headers: [
    {
      text: "작성자",
      value: "",
    },
    {
      text: "작성일",
      value: "",
    },
    {
      text: "제목",
      value: "text",
    },
    {
      text: "게시일",
      value: "date",
    },
    {
      text: "기준일",
      value: "date",
    },
    {
      text: "내용",
      value: "textarea",
    },
    {
      text: "이미지파일",
      value: "image",
    },
    {
      text: "이미지 alt값",
      value: "text",
    },
    {
      text: "첨부파일",
      value: "file",
    },
  ],
};
