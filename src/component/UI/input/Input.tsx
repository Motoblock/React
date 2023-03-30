import React from 'react';

import classes from './Input.module.css';
import { IinputTextProps } from './../AddCard/types';

export const Input = React.forwardRef<HTMLInputElement, IinputTextProps>(({ ...props }, ref) => {
  return <input ref={ref} className={classes.formInput} {...props} />;
});
