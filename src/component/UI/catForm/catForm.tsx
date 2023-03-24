import React, { FormEvent, RefObject } from 'react';
import { Button } from './../button/Button';
import { Input } from './../input/Input';
import { Select } from './../select/Select';
import classForm from './CatForm.module.css';
import { IFormStateType, propsInput, propsSelect, messagesErrors } from './types';
import { ICardCatProps } from './../card/types';
import { Card } from './../card/Card';
import { ErrorMessage } from './../error/Error';

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
  sex: number;
  month: number;
  imageLink: string;

  constructor(props: IFormStateType) {
    super(props);
    this.state = {
      confirm: false,
      messages: {
        name: '',
        age: '',
        price: '',
        sex: '',
        breed: '',
        cattery: '',
        image: '',
        counts: '',
      },
      cards: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.month = 0;
    this.age = React.createRef();
    this.breed = React.createRef();
    this.sex = -1;
    this.sex0 = React.createRef();
    this.sex1 = React.createRef();
    this.catterys = React.createRef();
    this.price = React.createRef();
    this.image = React.createRef();
    this.counts = React.createRef();
    this.forms = React.createRef();
    this.imageLink = '';
  }

  private datediff(first: Date, second: Date) {
    return Math.trunc((Number(second) - Number(first)) / (1000 * 60 * 60 * 24 * 30));
  }

  private saveState(error: string, field: string) {
    const mesAdd = this.state.messages;
    if ('name' === field) mesAdd.name = error;
    if ('price' === field) mesAdd.price = error;
    if ('age' === field) mesAdd.age = error;
    if ('sex' === field) mesAdd.sex = error;
    if ('breed' === field) mesAdd.breed = error;
    if ('cattery' === field) mesAdd.cattery = error;
    if ('image' === field) mesAdd.image = error;
    if ('counts' === field) mesAdd.counts = error;

    this.setState({ messages: mesAdd });
  }

  private validateName(el: RefObject<HTMLInputElement>) {
    const value = el.current?.value;
    if (!value) {
      this.saveState(`${messagesErrors[0].name?.nameValue}`, 'name');
      return false;
    }
    if (!value.match(/^[a-zа-я -]+$/i)) {
      this.saveState(`${messagesErrors[0].name?.nameString}`, 'name');
      return false;
    }
    if (!(value.length > 1) || !(value.length < 30)) {
      this.saveState(`${messagesErrors[0].name?.nameSize}`, 'name');
      return false;
    }
    const character = value.charAt(0);
    if (character !== character.toUpperCase()) {
      this.saveState(`${messagesErrors[0].name?.nameUpper}`, 'name');
      return false;
    }
    this.saveState('', 'name');
    return true;
  }

  private validatePrice(el: RefObject<HTMLInputElement>) {
    const value = el.current?.value;
    if (Number(value) === 0) {
      this.saveState(`${messagesErrors[2].price?.priceValue}`, 'price');
      return false;
    }
    if (value && Number(value) > 1000000) {
      this.saveState(`${messagesErrors[2].price?.priceMax}`, 'price');
      return false;
    }
    this.saveState('', 'price');
    return true;
  }

  private validateSex() {
    if (this.sex0.current!.checked === true) this.sex = 0;
    if (this.sex1.current!.checked === true) this.sex = 1;
    if (this.sex === -1) {
      this.saveState(`${messagesErrors[3].sex?.sexValue}`, 'sex');
      return false;
    }
    this.saveState('', 'sex');
    return true;
  }

  private validateBreeds(el: RefObject<HTMLSelectElement>) {
    const value = el.current?.value;
    if (value === '') {
      this.saveState(`${messagesErrors[4].breed?.breedValue}`, 'breed');
      return false;
    }
    this.saveState('', 'breed');
    return true;
  }

  private validateCatterys(el: RefObject<HTMLSelectElement>) {
    const value = el.current?.value;
    if (value === '') {
      this.saveState(`${messagesErrors[5].cattery?.catteryValue}`, 'cattery');
      return false;
    }
    this.saveState('', 'cattery');
    return true;
  }

  private validateAge() {
    if (!this.age.current!.value) {
      this.saveState(`${messagesErrors[1].age?.ageValue}`, 'age');
      return false;
    }
    this.month = this.datediff(new Date(this.age.current!.value), new Date());
    if (this.month === 0) {
      this.saveState(`${messagesErrors[1].age?.ageSmall}`, 'age');
      return false;
    }
    this.saveState('', 'age');
    return true;
  }

  private validateImage(el: RefObject<HTMLInputElement>) {
    if (el.current?.files && el.current?.files?.length !== 0) {
      const filesRef = el.current?.files;
      if (!filesRef[0].type.includes('image')) {
        this.saveState(`${messagesErrors[6].image?.imageFormat}`, 'image');
        return false;
      }
      const selecteds = [...[...filesRef]];
      selecteds.forEach((i) => (this.imageLink = URL.createObjectURL(i)));

      this.saveState('', 'image');
      return true;
    }
    this.saveState(`${messagesErrors[6].image?.imageValue}`, 'image');
    return false;
  }

  private validateOwner() {
    if (this.counts.current!.checked === false) {
      this.saveState(`${messagesErrors[7].counts?.countsValue}`, 'counts');
      return false;
    }
    this.saveState('', 'counts');
    return true;
  }

  private validateForm() {
    const field: boolean[] = [];

    field.push(this.validateName(this.name));
    field.push(this.validatePrice(this.price));
    field.push(this.validateBreeds(this.breed));
    field.push(this.validateCatterys(this.catterys));
    field.push(this.validateAge());
    field.push(this.validateSex());
    field.push(this.validateImage(this.image));
    field.push(this.validateOwner());

    return !field.includes(false);
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (this.validateForm()) {
      this.setState({ confirm: true });
      setTimeout(() => this.setState({ confirm: false }), 4000);

      const newCard: ICardCatProps = {
        id: this.state.cards.length,
        name: this.name.current!.value,
        age: this.month,
        breed: this.breed.current!.value,
        sex: this.sex,
        price: Number(this.price.current!.value),
        image: this.imageLink,
        counts: Number(this.counts.current!.value),
        catterys: this.catterys.current!.value,
      };

      const cardsAdd = [...this.state.cards];
      cardsAdd.push(newCard);
      this.setState({ cards: cardsAdd });
      this.forms.current!.reset();
      return true;
    }
    return false;
  }

  render() {
    return (
      <>
        {this.state.confirm && <p className={classForm.allRight}>All right</p>}
        <form
          ref={this.forms}
          className={classForm.formCard}
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <label className={classForm.label}>Cats nickname </label>
          <Input ref={this.name} {...propsInput[0]} />
          <ErrorMessage message={this.state.messages?.name} />
          <label className={classForm.label}>Date of birth</label>
          <Input ref={this.age} {...propsInput[1]} />
          <ErrorMessage message={this.state.messages?.age} />
          <label className={classForm.label}>Gender </label>
          <label>
            Male <input ref={this.sex0} name="sex" type="radio" value={0} />
          </label>
          <label>
            &nbsp;Female <input ref={this.sex1} name="sex" type="radio" value={1} />
          </label>
          <ErrorMessage message={this.state.messages?.sex} />
          <label className={classForm.label}>Breeds</label>
          <Select ref={this.breed} {...propsSelect[0]} />
          <ErrorMessage message={this.state.messages?.breed} />
          <label className={classForm.label}>Catterys</label>
          <Select ref={this.catterys} {...propsSelect[1]} />
          <ErrorMessage message={this.state.messages?.cattery} />
          <label className={classForm.label}>Price </label>
          <Input ref={this.price} {...propsInput[2]} />
          <ErrorMessage message={this.state.messages?.price} />
          <label className={classForm.label}>Photo of cats </label>
          <Input ref={this.image} {...propsInput[3]} />
          <ErrorMessage message={this.state.messages?.image} />
          <label>
            <input ref={this.counts} name="counts" type="checkbox" /> I am the owner of cat
          </label>
          <ErrorMessage message={this.state.messages?.counts} />
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
