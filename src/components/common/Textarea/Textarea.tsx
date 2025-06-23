interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}


const Textarea = ({ ...rest }: TextareaProps) => {
    return (
        <textarea className="form-control"
            {...rest}
        ></textarea>
    );
};

export default Textarea;