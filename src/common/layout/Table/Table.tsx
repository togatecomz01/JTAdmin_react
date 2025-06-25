import styles from "./Table.module.scss";

function Table({ children }: { children: React.ReactNode }) {
  return (
    <>
      <table className={styles.table}>{children}</table>
    </>
  );
}

export default Table;
