import { useState } from "react";
import styles from "./List.module.scss";
import PaginationButton from "./PaginationButton/PaginationButton";

function List({
  headers,
  listItems,
}: {
  headers: { text: string; value: string; className?: string }[];
  listItems: Record<string, string | React.ReactNode>[];
}) {
  const headerKey = headers.map((header) => header.value);

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(listItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = listItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <table className={styles.list}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.text} className={styles[`${header.className}`]}>
                {header.text} {/* 컬럼명 바인딩 */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
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

      {/* 페이지네이션 버튼 */}
      {listItems.length > itemsPerPage && (
        <PaginationButton
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}

export default List;
