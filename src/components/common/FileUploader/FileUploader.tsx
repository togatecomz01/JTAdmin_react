// src/components/common/FileUploader/FileUploader.tsx
import styles from './FileUploader.module.scss';
import btnStyles from '../Button/Button.module.scss';

interface FileUploaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  //prop
}

const FileUploader = ({ id = 'file-upload', ...rest }: FileUploaderProps) => {
    return (
        <div className={styles.fileUploaderWrapper}>
            <input type="file" id={id} className={styles.hiddenInput}
                {...rest}
            />

            <div className={styles.fakeInput}>
                <label htmlFor={id} className={`${btnStyles.base} ${btnStyles.file} ${btnStyles.file_size}`}>
                    파일 선택
                </label>
                <span className={styles.fileName}>
                    선택된 파일 없음
                </span>
            </div>
        </div>// 기존인풋파일 스타일이 별로라 실제역할을 하는 input은 숨겨두고 보여질 fakeinput파일을 사용
    );
};

export default FileUploader;
