import React from "react";
export type InputProps = {
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent) => void;
};
const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      className="search-form__input"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};
export default Input;
