import React from "react";
export type ButtonProps = {
  children: React.ReactNode;
  disabled: boolean;
  findRepo?: (e: React.MouseEvent) => void;
};
const Button: React.FC<ButtonProps> = ({ children, disabled, findRepo }) => {
  return (
    <button
      onClick={findRepo}
      className="search-form__button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
