import React from 'react';

interface Option {
    value: string | number;
    label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[]; //선택 항목 목록을 배열로
}


const Select = ({ options, ...rest }: SelectProps) => {
    return (
        <select className="form-control select-custom" {...rest}>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
            {option.label}
            </option>
        ))}
        </select>
    );
};

export default Select;
