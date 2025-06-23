import styles from './Checkbox.module.scss';

const Checkbox = ({ label = "체크박스" }) => {
    const uniqueId = `checkbox-${Math.random()}`;

    return (
        <div className={styles.checkboxWrapper}>
            <input type="checkbox" id={uniqueId} className={styles.checkboxInput} />
            <label htmlFor={uniqueId} className={styles.checkboxLabel}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;