import React from 'react';
import classes from './Error.module.css';
interface ErrorMessageProps {
  message: string;
}

export class ErrorMessage extends React.Component<ErrorMessageProps> {
  constructor(props: ErrorMessageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <div key={Date.now()} className={classes.error}>
          {this.props.message}
        </div>
      </>
    );
  }
}
