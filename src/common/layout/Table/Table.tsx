import styles from "./Table.module.scss";

function Table() {
  return (
    <div className={styles.tableContainer}>
      <h1>팝업관리</h1>
      <div className={styles.tableWrapper}>
        <h2>팝업 등록</h2>
        <table className={styles.table}>
          <thead>
            <tr></tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
