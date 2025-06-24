interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ type = 'text', ...rest }: InputProps) => {
    return (
        <input 
            type={type} 
                className="form-control" 
            {...rest} 
        />
    );
};

export default Input;