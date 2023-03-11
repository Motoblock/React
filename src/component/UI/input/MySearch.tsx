import React, { ChangeEvent } from 'react';
import classes from './../input/MySearch.module.css';

interface SearchProps {
  type: string;
  placeholder: string;
  value?: string;
}

class MySearch extends React.Component<SearchProps, { value: string }> {
  constructor(props: SearchProps) {
    super(props);
  }

  handleChange(e: ChangeEvent) {
    const searchInput = e.target as HTMLInputElement;

    this.setState({ value: searchInput.value });
    localStorage.setItem('searchInput', searchInput.value);
  }
  componentWillUnmount() {
    if (!this.state) return;

    const value = this.state.value;
    localStorage.setItem('searchInput', value);
  }

  componentDidMount() {
    const value = localStorage.getItem('searchInput');

    if (!value) return;

    if (value) this.setState({ value: value });
  }

  render() {
    return (
      <input
        className={classes.search}
        {...this.props}
        onChange={(e) => {
          this.handleChange(e);
        }}
        value={this.state ? this.state.value : ''}
      />
    );
  }
}

export default MySearch;
