import React, { ChangeEvent } from 'react';
import classes from './Input.module.css';
import { IInputProps } from './interface';

export class MySearch extends React.Component<object, IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  handleChange(e: ChangeEvent) {
    const searchInput = e.target as HTMLInputElement;
    this.setState({ value: searchInput.value });
  }
  componentWillUnmount() {
    if (!this.state) return;

    const value = this.state.value || '';
    localStorage.setItem('searchInput', value);
  }

  componentDidMount() {
    const value = localStorage.getItem('searchInput');

    if (!value) return;
    if (value) this.setState({ value: value });
  }

  render() {
    return (
      <div className="search">
        <input
          className={classes.search}
          {...this.props}
          onChange={(e) => {
            this.handleChange(e);
          }}
          value={this.state ? this.state.value : ''}
        />
      </div>
    );
  }
}
