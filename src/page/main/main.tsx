import React from 'react';
import { MySearch } from './../../component/UI/input/MySearch';
import { CardList } from '../../component/CardList';
import './../main/main.module.css';
import { IInputProps } from './../../component/UI/input/interface';

export class Main extends React.Component {
  prop: IInputProps = { type: 'search', placeholder: 'Input some body...' };
  render() {
    return (
      <>
        <h2>Paws</h2>
        <MySearch {...this.prop} />
        <CardList />
      </>
    );
  }
}
