import styles from './Radio.module.scss';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Radio = ({ label, name, id, ...rest }: RadioProps) => {
    const uniqueId = id || `radio-${label.replace(/\s/g, '')}`;

    return (
        <div className={styles.radioWrapper}>
        <input
            type="radio"
            id={uniqueId}
            name={name}
            className={styles.radioInput}
            {...rest}
        />
        <label htmlFor={uniqueId} className={styles.radioLabel}>
            {label}
        </label>
        </div>
    );
};

export default Radio;