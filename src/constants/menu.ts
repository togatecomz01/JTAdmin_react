const MENU = [
  {
    name: "계정관리",
    children: [
      { name: "메인관리자_목록", path: "/" },
      { name: "메인관리자_수정", path: "/account/modify" },
      { name: "부관리자_목록", path: "/account/sublist" },
      { name: "부관리자_등록", path: "/account/subwrite" },
      { name: "부관리자_수정", path: "/account/submodify" },
    ],
  },
  {
    name: "메인관리",
    children: [
      { name: "팝업관리", path: "/users/banners" },
      { name: "메인배너관리", path: "/users/notices" },
    ],
  },
  {
    name: "메뉴관리",
    children: [{ name: "메뉴관리", path: "/settings/categories" }],
  },
];

export default MENU;
