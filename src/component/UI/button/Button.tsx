import React, { ReactNode } from 'react';

import btn from './Button.module.css';

interface IPropsButton {
  children?: ReactNode;
}

export const Button = ({ children, ...props }: IPropsButton) => {
  return (
    <button data-testid="submit-btn" {...props} className={btn.cardBtn}>
      {children}
    </button>
  );
};
