import Input from "../../Input/Input";
import styles from "./Table.module.scss";

function Table({
  tableData,
}: {
  tableData: {
    title: string;
    type: string;
    items?: string[];
    placeholder?: string;
    constant?: string | React.ReactNode;
  }[];
}) {
  return (
    <table className={styles.table}>
      <tbody>
        {tableData.map((data) => {
          return (
            <tr>
              <th>{data.title}</th>
              <td>
                {data.placeholder ? (
                  <Input
                    type={data.type}
                    items={data.items}
                    placeholder={data.placeholder}
                  />
                ) : data.items ? (
                  <Input type={data.type} items={data.items} />
                ) : data.type === "constant" ? (
                  <div className={styles.text}>{data.constant}</div>
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
