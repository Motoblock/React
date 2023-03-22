import React from 'react';
import classes from './Input.module.css';

export const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} className={classes.formInput} {...props} />;
});
