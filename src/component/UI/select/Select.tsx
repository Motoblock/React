import React from 'react';
import classes from './Select.module.css';
import { breedsData } from '../../../assets/data/breeds';

export const Select = React.forwardRef<HTMLSelectElement>((props, ref) => {
  console.log(props.name);
  return (
    <>
      <select ref={ref} className={classes.formSelect} name={props.name}>
        <option value={''} key={0}>
          ...
        </option>

        {breedsData.map((item) => {
          return (
            <option key={item.breed} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
});
