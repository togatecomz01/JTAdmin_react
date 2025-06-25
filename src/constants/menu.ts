const MENU = [
  {
    name: "계정관리",
    children: [
      { name: "메인관리자", path: "/account/list" },
      { name: "부관리자", path: "/account/sublist" },
      { name: "게시판", path: "/account/noticelist" },
    ],
  },
  {
    name: "메인관리",
    children: [
      { name: "팝업관리", path: "/mainmang/main-popup-list" },
      { name: "메인배너관리", path: "/mainmang/main-banner-list" },
    ],
  },
  {
    name: "메뉴관리",
    children: [{ name: "메뉴관리", path: "/menu" }],
  },
];

export default MENU;
