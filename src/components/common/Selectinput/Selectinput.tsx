import React from 'react';

// 1. 선택 항목(option) 하나의 타입을 정의합니다.
interface Option {
    value: string | number;
    label: string;
}

// 2. Select 컴포넌트가 받을 props 타입을 정의합니다.
//    HTML <select> 태그의 기본 속성도 모두 받을 수 있게 합니다.
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[]; // 선택 항목 목록을 배열로 받습니다.
}


const Select = ({ options, ...rest }: SelectProps) => {
    return (
        // 3. form.scss에 정의된 .form-control 클래스를 적용하여
        //    다른 Input들과 동일한 스타일을 갖도록 합니다.
        <select className="form-control select-custom" {...rest}>
        {/* 4. options 배열을 map으로 순회하며 <option> 태그를 생성합니다. */}
        {options.map((option) => (
            <option key={option.value} value={option.value}>
            {option.label}
            </option>
        ))}
        </select>
    );
};

export default Select;
