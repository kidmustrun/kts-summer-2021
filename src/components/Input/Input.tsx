import React from "react";

import styles from "./Input.module.scss";
export type InputProps = {
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent) => void;
};
const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      className={styles.searchform__input}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};
export default Input;
