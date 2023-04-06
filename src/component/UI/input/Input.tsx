import React from 'react';

import classes from './Input.module.css';
import { IInputProps } from './../input/interface';

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(({ ...props }, ref) => {
  return <input ref={ref} className={classes.formInput} {...props} />;
});
