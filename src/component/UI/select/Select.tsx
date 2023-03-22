import React from 'react';
import classes from './Select.module.css';
// import { breedsData } from '../../../assets/data/breeds';

interface ISelect {
  nameType: string;
  data: string[];
}

export const Select = React.forwardRef<HTMLSelectElement, ISelect>((props, ref) => {
  console.log('props', props);
  return (
    <>
      <select ref={ref} className={classes.formSelect} name={props.nameType}>
        <option value={''} key={0}>
          ...
        </option>

        {props.data.map((item, index) => {
          // console.log('item', item);
          // console.log('index', index);
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
