import React from "react";
export type ButtonProps = {
  children: React.ReactNode;
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="search-form__button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
