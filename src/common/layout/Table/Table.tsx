import Input from "../../form/Input/Input";
import styles from "./Table.module.scss";

const TABLE_EXAMPLE = {
  headers: [
    {
      text: "수정자",
      value: "modifier",
    },
    {
      text: "수정일",
      value: "date",
    },
    {
      text: "제목",
      value: "title",
    },
    {
      text: "게시일",
      value: "postDate",
    },
    {
      text: "내용",
      value: "content",
    },
  ],
  listItems: [
    {
      modifier: "홍길동",
      date: "2025.06.25",
      title: "textInput",
    },
  ],
};

function Table() {
  return (
    <div className={styles.tableContainer}>
      <h1>계정관리</h1>
      <div className={styles.tableWrapper}>
        <h2>게시판수정</h2>
        <table className={styles.table}>
          <tbody>
            {TABLE_EXAMPLE.headers.map((i) => (
              <tr>
                <th>{i.text}</th>
                <td>
                  {TABLE_EXAMPLE.listItems.map((j) => {
                    if (i.value === "modifier" || i.value === "date")
                      return <>{j[i.value]}</>;
                    if (i.value === "title") return <Input type="text" />;
                    if (i.value === "postDate") return <Input type="date" />;
                    if (i.value === "content")
                      return (
                        <Input type="content" placeholder="텍스트 입력하세용" />
                      );
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
