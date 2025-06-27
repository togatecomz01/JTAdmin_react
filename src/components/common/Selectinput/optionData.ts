export interface Option {
    value: string | number;
    label: string;
}

export const statusOptions: Option[] = [
    { value: '', label: '선택' },
    { value: 'op1', label: '옵션1' },
    { value: 'op2', label: '옵션2' }
];

//필요하면 select옵션 추가하기