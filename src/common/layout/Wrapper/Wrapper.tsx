import styles from "./Wrapper.module.scss";

type WrapperProps = {
  subTitle: string;
  children: React.ReactNode;
};

const Wrapper = ({ subTitle, children }: WrapperProps) => {
  return (
    <div className={styles.wrapper}>
      <h2>{subTitle}</h2>
      {children}
    </div>
  );
};

export default Wrapper;
