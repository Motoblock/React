import React, { FormEvent, RefObject } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Select } from '../select/Select';
import classForm from './catForm.module.css';
import { propsInput, propsSelect, messagesErrors } from './types';
import { ICardCatProps } from './../card/types';
import Card from './../../UI/card/Card';

interface IFormStateType {
  confirm: boolean;
  cards: ICardCatProps[];
  messages: {
    name: string;
    age: string;
    price: string;
  };
}
export class CatForm extends React.Component {
  name: React.RefObject<HTMLInputElement>;
  age: React.RefObject<HTMLInputElement>;
  breed: React.RefObject<HTMLSelectElement>;
  sex0: React.RefObject<HTMLInputElement>;
  sex1: React.RefObject<HTMLInputElement>;
  catterys: React.RefObject<HTMLSelectElement>;
  price: React.RefObject<HTMLInputElement>;
  image: React.RefObject<HTMLInputElement>;
  counts: React.RefObject<HTMLInputElement>;
  forms: React.RefObject<HTMLFormElement>;
  state: IFormStateType;

  constructor(props: IFormStateType) {
    super(props);
    this.state = {
      confirm: false,
      messages: {
        name: '',
        age: '',
        price: '',
      },
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
    this.forms = React.createRef();
  }

  datediff(first: Date, second: Date) {
    return Math.trunc((Number(second) - Number(first)) / (1000 * 60 * 60 * 24 * 30));
  }

  validateName(el: RefObject<HTMLInputElement>) {
    const value = el.current?.value;
    console.log(value);
    console.log(this.state.messages);
    if (!value) {
      this.saveState(`${messagesErrors[0].name?.nameValue}`, 'name');
      // this.setState({ messages: { name: messagesErrors[0].name?.nameValue } });
      return false;
    }
    // value.match(/[!/^\d*(?:\.\d{0,2})?$/]/) &&
    if (!(value.length > 1) || !(value.length < 30)) {
      this.setState({ messages: { name: messagesErrors[0].name?.nameSize } });
      return false;
    }
    const character = value.charAt(0);
    if (character !== character.toUpperCase()) {
      this.setState({ messages: { name: messagesErrors[0].name?.nameUpper } });
      return false;
    }
    return true;
  }

  saveState(error: string, field: string) {
    const mesAdd = this.state.messages;
    if ('name' === field) mesAdd.name = error;
    if ('price' === field) mesAdd.price = error;
    this.setState({ messages: mesAdd });
  }

  validatePrice(el: RefObject<HTMLInputElement>) {
    const value = el.current?.value;
    console.log(value);
    if (value && Number(value) > 0) return true;
    this.saveState(`${messagesErrors[2].price?.priceValue}`, 'price');
    return false;
  }
  validateForm() {
    const field: boolean[] = [];

    field.push(this.validateName(this.name));
    field.push(this.validatePrice(this.price));
    // field.push(this.validateName(this.breed));
    // field.push(this.validateAge());

    console.log('field', field);
    return !field.includes(false);
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (this.validateForm()) {
      this.setState({ confirm: true });
      setTimeout(() => this.setState({ confirm: false }), 5000);

      let images = '';
      if (this.image.current?.files) {
        const filesRef = this.image.current?.files;
        const selecteds = [...[...filesRef]];
        selecteds.forEach((i) => (images = URL.createObjectURL(i)));
      }

      const age = this.datediff(new Date(this.age.current!.value), new Date());
      // console.log('checked', this.catterys.current?.checked);
      let sex = 0;
      this.name.current?.classList.add();
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
      this.forms.current!.reset();
      return true;
    }
    return false;
  }

  render() {
    console.log(this.state.messages);
    return (
      <>
        {this.state.confirm && <p className={classForm.allRight}>All right</p>}
        <form
          ref={this.forms}
          className={classForm.formCard}
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <label className={classForm.label}>Cats nickname </label>
          <span key={1} className={classForm.error}>
            {this.state.messages?.name}
          </span>
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
          <br></br>
          <label className={classForm.label}>Price </label>
          <span key={2} className={classForm.error}>
            {this.state.messages?.price}
          </span>
          <Input ref={this.price} {...propsInput[2]} />
          <label className={classForm.label}>Photo of cats </label>
          <Input ref={this.image} {...propsInput[3]} />
          <label>
            <input ref={this.counts} name="counts" type="checkbox" value={1} /> I am the owner of
            cat
          </label>
          <Button>Create card</Button>
        </form>
        <div className={classForm.cards__boxAdd}>
          {this.state.cards.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </>
    );
  }
}
