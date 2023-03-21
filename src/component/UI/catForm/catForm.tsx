import React, { FormEvent } from 'react';
import { Button } from '../button/Button';
// import { Input } from '../input/Input';
import { catterysData } from './../../../assets/data/catterys';
import { breedsData } from './../../../assets/data/breeds';
import classForm from './catForm.module.css';
// import { INewCard } from './types';
import { ICardCatProps } from './../card/types';

// import IInputProps from './../input/interface';

interface FormStateType {
  confirm: boolean;
  // url: string | undefined;
  cards: ICardCatProps[];
}
export class CatForm extends React.Component<object, FormStateType> {
  name: React.RefObject<HTMLInputElement>;
  age: React.RefObject<HTMLInputElement>;
  breed: React.RefObject<HTMLSelectElement>;
  sex: React.RefObject<HTMLInputElement>;
  catterys: React.RefObject<HTMLInputElement>;
  price: React.RefObject<HTMLInputElement>;
  image: React.RefObject<HTMLInputElement>;
  counts: React.RefObject<HTMLInputElement>;

  constructor(props: FormStateType) {
    super(props);
    this.state = {
      confirm: false,
      // url: '',
      cards: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.age = React.createRef();
    this.breed = React.createRef();
    this.sex = React.createRef();
    this.catterys = React.createRef();
    this.price = React.createRef();
    this.image = React.createRef();
    this.counts = React.createRef();

    // form: React.RefObject<HTMLFormElement>;
  }

  datediff(first: Date, second: Date) {
    console.log(Math.trunc((Number(second) - Number(first)) / (1000 * 60 * 60 * 24 * 30)));
    return Math.trunc((Number(second) - Number(first)) / (1000 * 60 * 60 * 24 * 30));
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let images = '';
    if (this.image.current?.files) {
      const filesRef = this.image.current?.files;
      console.log('files', filesRef);
      const selecteds = [...[...filesRef]];

      selecteds.forEach((i) => (images = URL.createObjectURL(i)));
      console.log('images', images);
    }
    // this.counts.current?.classList
    console.log(this.age.current!.value);
    const age = this.datediff(new Date(this.age.current!.value), new Date());
    console.log(age);

    const newCard: ICardCatProps = {
      id: this.state.cards.length,
      name: this.name.current!.value,
      age: age,
      breed: this.breed.current!.value,
      sex: Number(this.sex.current!.value),
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
          <input
            className={classForm.formInput}
            name="name"
            ref={this.name}
            type="text"
            placeholder="Specify the cat's nickname"
          />
          <label className={classForm.label}>Date of birth</label>
          <input
            className={classForm.formInput}
            name="age"
            type="date"
            ref={this.age}
            placeholder="Its date of birth"
          />
          <label className={classForm.label}>Sex </label>
          <label>
            Mail <input ref={this.sex} name="sex" type="radio" value={0} />
          </label>
          <label>
            Woman <input ref={this.sex} name="sex" type="radio" value={1} />
          </label>
          <br></br>
          <label className={classForm.label}>Breeds</label>
          {
            <select ref={this.breed} className={classForm.formSelect} name="breeds">
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
          }
          <br></br>
          <label className={classForm.label}>Catterys</label>
          {
            <ul className={classForm.formUl}>
              {catterysData.map((item) => {
                return (
                  <li key={item.cattery}>
                    <input ref={this.catterys} name="catterys" type="radio" value={item.cattery} />
                    &nbsp;{item.nameT}
                  </li>
                );
              })}
            </ul>
          }
          <label className={classForm.label}>Price </label>
          <input
            className={classForm.formInput}
            name="price"
            ref={this.price}
            type="number"
            placeholder="Specify the price"
          />
          <label className={classForm.label}>Photo of cats </label>
          <input
            className={classForm.formInput}
            name="image"
            type="file"
            ref={this.image}
            placeholder="Download image"
          />
          <label>
            <input ref={this.counts} name="counts" type="checkbox" value={1} /> I am the owner of
            cat
          </label>
          <Button>Create card</Button>
        </form>
        {this.state.cards.map((card, index) => {
          console.log('index', index);
          <div key={index}>
            <p>{card.age}</p>;<p>{card.catterys}</p>;<p>{card.breed}</p>;
            <img src={card.image} alt="cat" />;
          </div>;
        })}
      </>
    );
  }
}
