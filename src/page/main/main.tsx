import React from 'react';
import MySearch from './../../component/UI/input/MySearch';
import catsData from './../../assets/data/cats';
import Card from './../../component/UI/card/Card';
import './../main/main.module.css';
import SearchProps from './../../component/UI/input/interface';

class Main extends React.Component {
  prop: SearchProps = { type: 'search', placeholder: 'Input some body...' };
  render() {
    return (
      <>
        <h2>Paws</h2>
        <MySearch {...this.prop} />
        <Cards />
      </>
    );
  }
}

function Cards() {
  return (
    <div className="cards__box">
      {catsData.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
}

export default Main;
