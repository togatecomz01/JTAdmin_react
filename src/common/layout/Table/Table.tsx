import { HEADERS, LIST_ITEMS } from "../../../constants/listItems";
import styles from "./Table.module.scss";

function Table() {
  const headerKey = HEADERS.map((header) => header.value);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {HEADERS.map((header) => (
            <th key={header.text}>
              {header.text} {/* 컬럼명 바인딩 */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {LIST_ITEMS.map((item, index) => (
          <tr key={index}>
            {/* headerKey를 순회하면서 key를 가져옴 */}
            {headerKey.map((key) => (
              <td key={key + index}>
                {item[key]} {/* key로 객체의 값을 출력 */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
