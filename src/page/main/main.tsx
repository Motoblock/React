import React from 'react';
import MySearch from './../../component/UI/input/MySearch';
import catsData from './../../assets/data/cats';
import Card from './../../component/UI/card/Card';
import './../main/main.module.css';

class Main extends React.Component {
  render() {
    return (
      <>
        <h2>Paws</h2>
        <MySearch type="text" placeholder="Input some body..." />
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
