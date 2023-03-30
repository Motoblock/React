import React from 'react';

import classes from './Input.module.css';
import { IinputTextProps } from './../AddCard/types';

export const Input = React.forwardRef<HTMLInputElement, IinputTextProps>(
  ({ id, ...props }, ref) => {
    console.log(props);
    return <input id={id} ref={ref} className={classes.formInput} {...props} />;
  }
);
