import React, { ChangeEvent } from 'react';
import classes from './../input/MySearch.module.css';
import SearchProps from './interface';

class MySearch extends React.Component<object, SearchProps> {
  constructor(props: SearchProps) {
    super(props);
  }

  handleChange(e: ChangeEvent) {
    const searchInput = e.target as HTMLInputElement;
    this.setState({ value: searchInput.value });
  }
  componentWillUnmount() {
    if (!this.state) return;

    const value = this.state.value;
    if (value) localStorage.setItem('searchInput', value);
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

export default MySearch;
