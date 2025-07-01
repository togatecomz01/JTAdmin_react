import styles from "./PaginationButton.module.scss";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (i: number) => void;
};

const PaginationButton = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      {currentPage > 1 ? (
        <button
          className={styles.prev}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          이전
        </button>
      ) : (
        <div className={styles.prev}></div>
      )}
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={i + 1 === currentPage ? styles.activePage : ""}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      {currentPage < totalPages ? (
        <button
          className={styles.next}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          다음
        </button>
      ) : (
        <div className={styles.prev}></div>
      )}
    </div>
  );
};

export default PaginationButton;
