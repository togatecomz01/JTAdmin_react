import styles from './SearchInput.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import SearchIcon from '../img/icon_search.png';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ ...rest }: SearchInputProps) => {
    return (
        <div className={styles.wrapper}>
            <Input type="search" {...rest} />
            <Button
                type="button"
                variant="icon" 
                className={styles.iconPosition} 
            >
                <img src={SearchIcon} alt="검색" />
            </Button>
        </div>
    );
};

export default SearchInput;