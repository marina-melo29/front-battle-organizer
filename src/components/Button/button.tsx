import React, { ReactNode } from 'react';

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;