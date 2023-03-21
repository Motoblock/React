import React, { ReactNode } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import btn from './Button.module.css';

interface IProps {
  children?: ReactNode;
}

export const Button = ({ children, ...props }: IProps) => {
  // const classes = classNames('btn', className, { active });

  return (
    <button {...props} className={btn.cardBtn}>
      {children}
    </button>
  );
};
