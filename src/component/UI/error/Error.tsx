import React from 'react';
import classes from './Error.module.css';
interface IErrorMessageProps {
  message: string;
}

export const ErrorMessage = (error: IErrorMessageProps) => {
  return (
    <>
      <div key={Date.now()} className={classes.error}>
        {error.message}
      </div>
    </>
  );
};
