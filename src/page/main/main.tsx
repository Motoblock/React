import React from 'react';
import MySearch from './../../component/UI/input/MySearch';
import { CardList } from '../../component/CardList';
import './../main/main.module.css';
import SearchProps from './../../component/UI/input/interface';

export class Main extends React.Component {
  prop: SearchProps = { type: 'search', placeholder: 'Input some body...' };
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
