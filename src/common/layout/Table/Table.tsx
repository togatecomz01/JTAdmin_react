import Input from "../../form/Input/Input";
import styles from "./Table.module.scss";

function Table({
  headers,
  tableItems,
}: {
  headers: { text: string; value: string }[];
  tableItems: Record<string, string>[];
}) {
  return (
    <>
      <table className={styles.table}>
        <tbody>
          {headers.map((i) => (
            <tr>
              <th>{i.text}</th>
              <td>
                {tableItems.map((j) => {
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
    </>
  );
}

export default Table;
