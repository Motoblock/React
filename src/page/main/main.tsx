import React from 'react';
import MySearch from './../../component/UI/input/MySearch';
import catsData from './../../assets/data/cats';
import Card from './../../component/UI/card/card';
import './../main/main.module.css';

function Main() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <h1>Home page</h1>
      <MySearch type="text" placeholder="Input some body..." />
      <div className="cards__sorting">
        <Cards />
      </div>
    </>
  );
}

// breed={el.breed}
// price={el.price}
// discont={el.discont}
// sex={el.sex}
// name={el.name}
// color={el.color}
// colorOption={el.colorOption}
// age={el.age}
// raiting={el.raiting}
// counts={el.counts}
// catterys={el.catterys}
// description={el.description}

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
