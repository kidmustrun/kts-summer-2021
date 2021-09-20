import React from "react";

import styles from "./Button.module.scss";
export type ButtonProps = {
  children: React.ReactNode;
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.searchform__button}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
