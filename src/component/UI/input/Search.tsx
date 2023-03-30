import React from 'react';

import classes from './Input.module.css';
import { IInputProps } from './interface';

export const Search = (props: IInputProps) => {
  const { onChange, refLink, value, placeholder = 'Укажите породу...' } = props;

  return (
    <div className="search">
      <input
        className={classes.search}
        type="search"
        defaultValue=""
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        ref={refLink}
      />
    </div>
  );
};
