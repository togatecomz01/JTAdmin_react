interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    width?: string | number; //width 받아오기 위한 props
}
const Input = ({ type = 'text',width, ...rest }: InputProps) => {
    const style = width ? { width: width } : {};
    return (
        <input type={type} className="form-control" style={style} {...rest}/>
    );
};

export default Input;
