import styles from "./Container.module.scss";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Container;
