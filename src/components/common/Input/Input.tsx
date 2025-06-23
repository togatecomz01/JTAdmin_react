import styles from './Input.module.scss';
import SearchIcon from '../img/icon_search.png';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = ({ type = 'text', ...rest }: InputProps) => {

    if (type === 'search') {
        return (
        <div className={styles.searchWrapper}>
            <input type="search" className="form-control"
                {...rest} 
            />
            <button type="button" className={styles.searchButton}>
                <img src={SearchIcon} alt="검색" />
            </button>
        </div>
        );
    }

    return (
        <input type={type} className="form-control"
            {...rest} 
        />
    );
};

export default Input;