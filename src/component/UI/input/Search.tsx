// import React, { ChangeEvent } from 'react';
import React from 'react';

import classes from './Input.module.css';
import { IInputProps } from './interface';

export const Search = (props: IInputProps) => {
  const { onChange, value, ref, placeholder = 'Укажите породу...' } = props;
  // const [searchInput, setValue] = useState(
  //   localStorage.getItem('searchInput') ? localStorage.getItem('searchInput') : ''
  // );

  // useEffect(() => {
  //   return () => {
  //     localStorage.setItem('searchInput', searchInput);
  //   };
  // });

  // props.onChange = (e: ChangeEvent) => {
  //   const searchInput = e.target as HTMLInputElement;
  //   if (searchInput) setValue(searchInput.value);
  // };
  // componentWillUnmount() {
  //   if (!this.state) return;

  //   const value = this.state.value || '';
  //   localStorage.setItem('searchInput', value);
  // }

  // componentDidMount() {
  //   const value = localStorage.getItem('searchInput');

  //   if (!value) return;
  //   if (value) this.setState({ value: value });
  // }

  return (
    <div className="search">
      <input
        className={classes.search}
        type="search"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        ref={ref}
      />
    </div>
  );
};
