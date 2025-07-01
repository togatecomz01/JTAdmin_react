import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'neutral' | 'icon' | 'file' |'pagination_arrow'| 'text';
    size?: 'small' | 'large' | 'xlarge' | 'file_size';
}

const Button = ({
    children,
    variant = 'primary',
    size,
    className, 
    ...rest
}: ButtonProps) => { //props에 따라 클래스 이름 정하기
    const buttonClass = [
        styles.base, //모든 버튼의 기본 스타일
        styles[variant], //variant에 따른 스타일 추가
        size ? styles[size] : '', 
        className,
        
    ].filter(Boolean).join(' '); //위에 배열 변수 내용들 중 빈 내용이 있었수도 있음->그것을 빼고 배열에 넣기위해 필터사용함

    return (
        <button className={buttonClass} {...rest}>
        {children}
        </button>
    );
};

export default Button;