import React, { FormEvent } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Select } from '../select/Select';

import classForm from './catForm.module.css';
import { propsInput, propsSelect } from './types';

import { ICardCatProps } from './../card/types';
import Card from './../../UI/card/Card';
interface FormStateType {
  confirm: boolean;
  cards: ICardCatProps[];
}
export class CatForm extends React.Component {
  name: React.RefObject<HTMLInputElement>;
  age: React.RefObject<HTMLInputElement>;
  breed: React.RefObject<HTMLSelectElement>;
  sex0: React.RefObject<HTMLInputElement>;
  sex1: React.RefObject<HTMLInputElement>;
  catterys: React.RefObject<HTMLInputElement>;
  price: React.RefObject<HTMLInputElement>;
  image: React.RefObject<HTMLInputElement>;
  counts: React.RefObject<HTMLInputElement>;
  state: FormStateType;

  constructor(props: FormStateType) {
    super(props);
    this.state = {
      confirm: false,
      cards: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.age = React.createRef();
    this.breed = React.createRef();
    this.sex0 = React.createRef();
    this.sex1 = React.createRef();
    this.catterys = React.createRef();
    this.price = React.createRef();
    this.image = React.createRef();
    this.counts = React.createRef();
  }

  datediff(first: Date, second: Date) {
    return Math.trunc((Number(second) - Number(first)) / (1000 * 60 * 60 * 24 * 30));
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const { catterys } = this.form;
    let images = '';
    if (this.image.current?.files) {
      const filesRef = this.image.current?.files;
      const selecteds = [...[...filesRef]];
      selecteds.forEach((i) => (images = URL.createObjectURL(i)));
    }

    const age = this.datediff(new Date(this.age.current!.value), new Date());
    console.log('checked', this.catterys.current?.checked);
    let sex = 0;
    if (this.sex0.current!.checked === true) sex = 0;
    if (this.sex1.current!.checked === true) sex = 1;
    const newCard: ICardCatProps = {
      id: this.state.cards.length,
      name: this.name.current!.value,
      age: age,
      breed: this.breed.current!.value,
      sex: sex,
      price: Number(this.price.current!.value),
      image: images,
      counts: Number(this.counts.current!.value),
      catterys: this.catterys.current!.value,
      description: '',
    };

    console.log('state', this.state.cards);
    console.log('newCard', newCard);

    const cardsAdd = [...this.state.cards];
    cardsAdd.push(newCard);
    this.setState({ cards: cardsAdd });
    return true;
  }

  render() {
    return (
      <>
        <form className={classForm.formCard} onSubmit={(event) => this.handleSubmit(event)}>
          <label className={classForm.label}>Cats nickname</label>
          <Input ref={this.name} {...propsInput[0]} />
          <label className={classForm.label}>Date of birth</label>
          <Input ref={this.age} {...propsInput[1]} />
          <label className={classForm.label}>Sex </label>
          <label>
            Male <input ref={this.sex0} name="sex" type="radio" value={0} />
          </label>
          <label>
            Female <input ref={this.sex1} name="sex" type="radio" value={1} />
          </label>
          <br></br>
          <label className={classForm.label}>Breeds</label>
          <Select ref={this.breed} {...propsSelect[0]} />
          <br></br>
          <label className={classForm.label}>Catterys</label>
          <Select ref={this.catterys} {...propsSelect[1]} />
          {
            // <ul className={classForm.formUl}>
            //   {catterysData.map((item) => {
            //     return (
            //       <li key={item.cattery}>
            //         <input
            //           ref={this.catterys}
            //           name={`catterys[${item.cattery}]`}
            //           type="radio"
            //           value={item.nameT}
            //         />
            //         &nbsp;{item.nameT}
            //       </li>
            //     );
            //   })}
            // </ul>
          }
          <br></br>
          <label className={classForm.label}>Price </label>
          <Input ref={this.price} {...propsInput[2]} />
          <label className={classForm.label}>Photo of cats </label>
          <Input ref={this.image} {...propsInput[3]} />
          <label>
            <input ref={this.counts} name="counts" type="checkbox" value={1} /> I am the owner of
            cat
          </label>
          <Button>Create card</Button>
        </form>
        <div className="cards__box">
          {this.state.cards.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </>
    );
  }
}
