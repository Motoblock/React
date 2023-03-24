import React, { ReactNode } from 'react';
import btn from './Button.module.css';

interface IProps {
  children?: ReactNode;
}

export const Button = ({ children, ...props }: IProps) => {
  return (
    <button {...props} className={btn.cardBtn}>
      {children}
    </button>
  );
};
