import React from 'react';
import classes from './Select.module.css';
import { IBreedsData } from '../../../assets/data/breeds';
import { ICatterysData } from '../../../assets/data/catterys';

interface ISelect {
  name: string;
  data: IBreedsData[] | ICatterysData[];
}

export const Select = React.forwardRef<HTMLSelectElement, ISelect>(({ data, ...props }, ref) => {
  return (
    <>
      <select ref={ref} className={classes.formSelect} {...props}>
        <option value={''} key={0}>
          ...
        </option>
        {data.map((item, index) => {
          return (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
});
