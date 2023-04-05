import React from 'react';

import classes from './Input.module.css';
import { IInputProps } from './interface';

export const Search = (props: IInputProps) => {
  const {
    onChange,
    value,
    placeholder = 'Укажите параметр поиска (имя, породу, цену возраст)...',
  } = props;

  return (
    <div className="search">
      <input
        className={classes.search}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
