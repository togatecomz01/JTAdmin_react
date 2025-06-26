import Input from "../../Input/Input";
import styles from "./Table.module.scss";

function Table({
  tableData,
}: {
  tableData: { title: string; type: string; items?: string[] }[];
}) {
  return (
    <table className={styles.table}>
      <tbody>
        {tableData.map((data) => {
          return (
            <tr>
              <th>{data.title}</th>
              <td>
                {data.items ? (
                  <Input type={data.type} items={data.items} />
                ) : (
                  <Input type={data.type} />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
