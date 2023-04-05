import React from 'react';

import classes from './Select.module.css';
import { ISelectsData } from './type';

interface ISelect {
  id: string;
  name: string;
  data: ISelectsData[];
}

export const Select = React.forwardRef<HTMLSelectElement, ISelect>(({ data, ...props }, ref) => {
  return (
    <select ref={ref} className={classes.formSelect} {...props}>
      <option value=""> ... </option>
      {data.map((item) => {
        return (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
});
