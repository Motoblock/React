import React, { FormEvent } from 'react';
import { Button } from '../button/Button';
// import { Input } from '../input/Input';
import { catterysData } from './../../../assets/data/catterys';
import { breedsData } from './../../../assets/data/breeds';
import classForm from './catForm.module.css';
// import { INewCard } from './types';
import { ICardCatProps } from './../card/types';
// import IInputProps from './../input/interface';

export class CatForm extends React.Component<object, { cards: Array<ICardCatProps> }> {
  // setRef = (ref) => {
  //   this.name = ref.name;
  // };
  name: React.RefObject<HTMLInputElement>;
  age: React.RefObject<HTMLInputElement>;
  breed: React.RefObject<HTMLSelectElement>;
  sex: React.RefObject<HTMLInputElement>;
  catterys: React.RefObject<HTMLInputElement>;
  image: React.RefObject<HTMLInputElement>;

  constructor(props: ICardCatProps) {
    super(props);
    this.state = {
      cards: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.age = React.createRef();
    this.breed = React.createRef();
    this.sex = React.createRef();
    this.catterys = React.createRef();
    this.image = React.createRef();

    // form: React.RefObject<HTMLFormElement>;
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    console.log('123');
    e.preventDefault();
    console.log('state', this.state.cards);

    console.log('current', this.name.current!.value);
  }

  render() {
    return (
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
            <option key={0}>...</option>
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
                  <input ref={this.catterys} name="catterys" type="radio" value={1} /> {item.nameT}
                </li>
              );
            })}
          </ul>
        }
        <input
          className={classForm.formInput}
          name="image"
          type="file"
          ref={this.image}
          placeholder="Download image"
        />
        <Button>Create card</Button>
      </form>
    );
  }
}
