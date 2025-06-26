import { getInputByHeader } from "../../../utils/inputMapper";
import styles from "./Table.module.scss";

function Table({
  tableData,
}: {
  tableData: { headers: { text: string; value: string }[] };
}) {
  return (
    <table className={styles.table}>
      <tbody>
        {tableData.headers.map((header) => {
          return (
            <tr>
              <th>{header.text}</th>
              <td>{getInputByHeader(header.value)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
