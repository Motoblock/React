import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '../button/Button';
// import { IBreedsData } from './../../../assets/data/breeds';
// import { ICatterysData } from './../../../assets/data/catterys';
import { breedsData } from '../../../assets/data/breeds';
import { catterysData } from '../../../assets/data/catterys';
import { Input } from '../input/Input';
// import { Select } from '../select/Select';
import classForm from './AddCard.module.css';

import { ICardCatProps } from '../card/types';
import { Card } from '../card/Card';
import { ErrorMessage } from '../error/Error';
import { messagesErrors, propsInput } from './dataError';

export function AddCard() {
  const [cards, setCards] = useState<ICardCatProps[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  });

  useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const arr: ICardCatProps[] = cards;
    console.log(JSON.stringify(arr));

    let imageLink = '';
    const selecteds = [...[...data.image]];
    selecteds.forEach((i) => (imageLink = URL.createObjectURL(i)));

    const newCard: ICardCatProps = {
      id: data.length,
      name: data.name,
      age: data.month,
      breed: data.breed,
      sex: data.sex,
      price: Number(data.price),
      image: imageLink,
      counts: Number(data.counts),
      catterys: data.catterys,
    };
    arr.push(newCard);
    setCards(arr);
  };

  return (
    <>
      <form className={classForm.formCard} onSubmit={handleSubmit(onSubmit)}>
        <label className={classForm.label} htmlFor="name">
          Cats nickname
        </label>
        <input
          className={classForm.formInput}
          placeholder={propsInput[0].placeholder}
          {...register('name', {
            required: true,
            pattern: /^[A-Za-z_-]{2, 25}+$/,
          })}
        />
        {errors.name && errors.name.type === 'required' && (
          <ErrorMessage message={`${messagesErrors[0].name?.nameValue}`} />
        )}
        {errors.name && errors.name.type === 'pattern' && (
          <ErrorMessage message={`${messagesErrors[0].name?.nameString}`} />
        )}
        <label className={classForm.label} htmlFor="age">
          Date of birth
        </label>
        <input
          type="date"
          className={classForm.formInput}
          {...register('age', {
            required: `${messagesErrors[1].age?.ageValue}`,
            validate: {
              datediff: (value) => datediff(value) > 1 || 'At least 2 months',
            },
          })}
        />
        {errors.age && <ErrorMessage message={`${errors.age.message}`} />}
        <label className={classForm.label} htmlFor="sex">
          Gender{' '}
        </label>
        Male{' '}
        <input value={0} type="radio" {...register('sex', { required: 'Specify the gender' })} />
        &nbsp;Female{' '}
        <input value={1} type="radio" {...register('sex', { required: 'Specify the gender' })} />
        {errors.sex && <ErrorMessage message={`${errors.sex.message}`} />}
        <br />
        <label className={classForm.label} htmlFor="breed">
          Breed
        </label>
        <select
          className={classForm.formInput}
          {...register('breed', {
            validate: (value) => value !== '',
          })}
        >
          <option value={''}>...</option>
          {breedsData.map((item, index) => {
            return (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
        {errors.breed && <ErrorMessage message="Specify the breed" />}
        <label className={classForm.label} htmlFor="price">
          Price
        </label>
        <Input id={'5'} placeholder="Specify the price" type="number" {...register('price')} />
        {errors.price && <ErrorMessage message={`${messagesErrors[2].price?.priceValue}`} />}
        <label className={classForm.label} htmlFor="catterys">
          Catterys
        </label>
        <select
          className={classForm.formInput}
          {...register('catterys', {
            validate: (value) => value !== '',
          })}
        >
          <option value={''}>...</option>
          {catterysData.map((item, index) => {
            return (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
        {errors.catterys && <ErrorMessage message="Specify the catterys" />}
        <label className={classForm.label} htmlFor="counts"></label>
        <input
          value={0}
          type="checkbox"
          {...register('counts', {
            required: 'Only owners can add information',
          })}
        />{' '}
        I am the owner of cat
        {errors.counts && <ErrorMessage message={`${errors.counts.message}`} />}
        <br />
        <label className={classForm.label} htmlFor="image">
          Photo of cats
        </label>
        <input
          type="file"
          accept="image/*"
          className={classForm.formInput}
          placeholder="file_input"
          {...register('image', {
            required: 'Specify the foto',
          })}
        />
        {errors.image && <ErrorMessage message={'Specify the foto'} />}
        <Button>Create card</Button>
      </form>
      <div className={classForm.cards__boxAdd}>
        {cards.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </div>
    </>
  );
}

const datediff = (first: Date) => {
  if (!first) first = new Date();
  return Math.trunc((Number(new Date()) - Number(first)) / (1000 * 60 * 60 * 24 * 30));
};

//   saveState(error: string, field: string) {
//     const mesAdd = this.state.messages;
//     if ('name' === field) mesAdd.name = error;
//     if ('price' === field) mesAdd.price = error;
//     if ('age' === field) mesAdd.age = error;
//     if ('sex' === field) mesAdd.sex = error;
//     if ('breed' === field) mesAdd.breed = error;
//     if ('cattery' === field) mesAdd.cattery = error;
//     if ('image' === field) mesAdd.image = error;
//     if ('counts' === field) mesAdd.counts = error;

//     this.setState({ messages: mesAdd });
//   }

//   validateName(el: string | undefined) {
//     const value = el;
//     if (!value) {
//       this.saveState(`${messagesErrors[0].name?.nameValue}`, 'name');
//       return false;
//     }
//     if (!value.match(/^[a-zа-я -]+$/i)) {
//       this.saveState(`${messagesErrors[0].name?.nameString}`, 'name');
//       return false;
//     }
//     if (!(value.length > 1) || !(value.length < 30)) {
//       this.saveState(`${messagesErrors[0].name?.nameSize}`, 'name');
//       return false;
//     }
//     const character = value.charAt(0);
//     if (character !== character.toUpperCase()) {
//       this.saveState(`${messagesErrors[0].name?.nameUpper}`, 'name');
//       return false;
//     }
//     this.saveState('', 'name');
//     return true;
//   }

//   validatePrice(el: RefObject<HTMLInputElement>) {
//     const value = el.current?.value;
//     if (Number(value) < 1) {
//       this.saveState(`${messagesErrors[2].price?.priceValue}`, 'price');
//       return false;
//     }
//     if (value && Number(value) > 1000000) {
//       this.saveState(`${messagesErrors[2].price?.priceMax}`, 'price');
//       return false;
//     }
//     this.saveState('', 'price');
//     return true;
//   }

//   private validateSex() {
//     if (this.sex0.current!.checked === true) this.sex = 0;
//     if (this.sex1.current!.checked === true) this.sex = 1;
//     if (this.sex === -1) {
//       this.saveState(`${messagesErrors[3].sex?.sexValue}`, 'sex');
//       return false;
//     }
//     this.saveState('', 'sex');
//     return true;
//   }

//   validateBreeds(el: RefObject<HTMLSelectElement>) {
//     const value = el.current?.value;
//     if (value === '') {
//       this.saveState(`${messagesErrors[4].breed?.breedValue}`, 'breed');
//       return false;
//     }
//     this.saveState('', 'breed');
//     return true;
//   }

//   validateCatterys(el: RefObject<HTMLSelectElement>) {
//     const value = el.current?.value;
//     if (value === '') {
//       this.saveState(`${messagesErrors[5].cattery?.catteryValue}`, 'cattery');
//       return false;
//     }
//     this.saveState('', 'cattery');
//     return true;
//   }

//   validateAge(el: RefObject<HTMLInputElement>) {
//     const value = el.current?.value;
//     if (!value) {
//       this.saveState(`${messagesErrors[1].age?.ageValue}`, 'age');
//       return false;
//     }
//     const correct = this.age.current!.value.match(
//       /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/
//     );

//     if (correct && correct[0] !== value) {
//       this.saveState(`${messagesErrors[1].age?.ageValue}`, 'age');
//       return false;
//     }
//     this.month = this.datediff(new Date(value), new Date());
//     if (this.month === 0) {
//       this.saveState(`${messagesErrors[1].age?.ageSmall}`, 'age');
//       return false;
//     }
//     this.saveState('', 'age');
//     return true;
//   }

//   private validateImage(el: RefObject<HTMLInputElement>) {
//     if (el.current?.files && el.current?.files?.length !== 0) {
//       const filesRef = el.current?.files;
//       if (!filesRef[0].type.includes('image')) {
//         this.saveState(`${messagesErrors[6].image?.imageFormat}`, 'image');
//         return false;
//       }
//       const selecteds = [...[...filesRef]];
//       selecteds.forEach((i) => (this.imageLink = URL.createObjectURL(i)));

//       this.saveState('', 'image');
//       return true;
//     }
//     this.saveState(`${messagesErrors[6].image?.imageValue}`, 'image');
//     return false;
//   }

//   private validateOwner() {
//     if (this.counts.current!.checked === false) {
//       this.saveState(`${messagesErrors[7].counts?.countsValue}`, 'counts');
//       return false;
//     }
//     this.saveState('', 'counts');
//     return true;
//   }

//   private validateForm() {
//     const field: boolean[] = [];

//     field.push(this.validateName(this.name?.current?.value));
//     field.push(this.validatePrice(this.price));
//     field.push(this.validateBreeds(this.breed));
//     field.push(this.validateCatterys(this.catterys));
//     field.push(this.validateAge(this.age));
//     field.push(this.validateSex());
//     field.push(this.validateImage(this.image));
//     field.push(this.validateOwner());

//     return !field.includes(false);
//   }

//   handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     if (this.validateForm()) {
//       this.setState({ confirm: true });
//       setTimeout(() => this.setState({ confirm: false }), 4000);

//       const newCard: ICardCatProps = {
//         id: this.state.cards.length,
//         name: this.name.current!.value,
//         age: this.month,
//         breed: this.breed.current!.value,
//         sex: this.sex,
//         price: Number(this.price.current!.value),
//         image: this.imageLink,
//         counts: Number(this.counts.current!.value),
//         catterys: this.catterys.current!.value,
//       };

//       const cardsAdd = [...this.state.cards];
//       cardsAdd.push(newCard);
//       this.setState({ cards: cardsAdd });
//       this.forms.current!.reset();
//       return true;
//     }
//     return false;
//   }

//   render() {
//     return (
//       <>
//         {this.state.confirm && <p className={classForm.allRight}>All right</p>}
//         <form
//           data-testid="formCard"
//           ref={this.forms}
//           className={classForm.formCard}
//           onSubmit={(event) => this.handleSubmit(event)}
//         >
//           <label className={classForm.label}>Cats nickname </label>
//           <Input ref={this.name} {...propsInput[0]} data-testid={propsInput[0].name} />
//           <ErrorMessage message={this.state.messages?.name} />
//           <label className={classForm.label}>Date of birth</label>
//           <Input ref={this.age} {...propsInput[1]} data-testid={propsInput[1].name} />
//           <ErrorMessage message={this.state.messages?.age} />
//           <label className={classForm.label}>Gender </label>
//           <label>
//             Male <input ref={this.sex0} data-testid="sex0" name="sex" type="radio" value={0} />
//           </label>
//           <label>
//             &nbsp;Female{' '}
//             <input ref={this.sex1} data-testid="sex1" name="sex" type="radio" value={1} />
//           </label>
//           <ErrorMessage message={this.state.messages?.sex} />
//           <label className={classForm.label}>Breeds</label>
//           <Select ref={this.breed} {...propsSelect[0]} data-testid={propsSelect[0].name} />
//           <ErrorMessage message={this.state.messages?.breed} />
//           <label className={classForm.label}>Catterys</label>
//           <Select ref={this.catterys} {...propsSelect[1]} data-testid={propsSelect[1].name} />
//           <ErrorMessage message={this.state.messages?.cattery} />
//           <label className={classForm.label}>Price </label>
//           <Input ref={this.price} {...propsInput[2]} data-testid={propsInput[2].name} />
//           <ErrorMessage message={this.state.messages?.price} />
//           <label className={classForm.label}>Photo of cats </label>
//           <Input ref={this.image} {...propsInput[3]} data-testid={propsInput[3].name} />
//           <ErrorMessage message={this.state.messages?.image} />
//           <label>
//             <input ref={this.counts} name="counts" data-testid="counts" type="checkbox" /> I am the
//             owner of cat
//           </label>
//           <ErrorMessage message={this.state.messages?.counts} />
//           <Button>Create card</Button>
//         </form>
//         <div className={classForm.cards__boxAdd}>
//           {this.state.cards.map((card, index) => {
//             return <Card key={index} {...card} />;
//           })}
//         </div>
//       </>
//     );
//   }
// }
