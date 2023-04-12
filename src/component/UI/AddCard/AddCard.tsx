import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '../button/Button';
import { breedsData } from '../../../assets/data/breeds';
import { catterysData } from '../../../assets/data/catterys';
import { Input } from '../input/Input';
import { Select } from '../select/Select';
import classForm from './AddCard.module.css';
import { ICardCatProps } from '../card/types';
import { Card } from '../card/Card';
import { ErrorMessage } from '../error/Error';
import { messagesErrors } from './dataError';
import { datediff } from './../../util/dateFunction';
import { CARD_SHOW_TIME } from '../../util/variable';
import {
  validationName,
  validatePrice,
  validateSex,
  validateBreeds,
  validateCatterys,
  validateAge,
  validateOwner,
  validateImage,
} from './../../util/validation';

export function AddCard() {
  const [cards, setCards] = useState<ICardCatProps[]>([]);
  const [confirm, setConfirm] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    let imageLink = '';
    const selecteds = [...[...data.image]];
    selecteds.forEach((i) => (imageLink = URL.createObjectURL(i)));

    const newCard: ICardCatProps = {
      id: data.length,
      name: data.name,
      age: datediff(new Date(data.age)),
      breed: data.breed,
      sex: data.sex,
      price: Number(data.price),
      image: imageLink,
      counts: Number(data.counts),
      catterys: data.catterys,
    };
    const arr: ICardCatProps[] = cards;
    arr.push(newCard);
    setConfirm(true);
    setTimeout(() => setConfirm(false), CARD_SHOW_TIME);
    setCards(arr);
    reset();
  };

  return (
    <>
      {confirm && <p className={classForm.allRight}>The card was created successfully</p>}
      <form className={classForm.formCard} id="formCard" onSubmit={handleSubmit(onSubmit)}>
        <label className={classForm.label} htmlFor="fieldName">
          Cats nickname
        </label>
        <Input
          id="fieldName"
          type="text"
          placeholder="Specify the cat's nickname"
          {...register('name', {
            required: `${messagesErrors[0].name?.nameValue}`,
            validate: {
              nameValidation: (value) => validationName(value),
            },
          })}
        />
        {errors.name && <ErrorMessage message={`${errors.name.message}`} />}
        <label className={classForm.label} htmlFor="fieldAge">
          Date of birth
        </label>
        <Input
          id="fieldAge"
          type="date"
          {...register('age', {
            required: `${messagesErrors[1].age?.ageValue}`,
            validate: {
              validateAge: (value) => validateAge(value),
            },
          })}
        />
        {errors.age && <ErrorMessage message={`${errors.age.message}`} />}
        <label className={classForm.label} htmlFor="fieldSex">
          Gender{' '}
        </label>
        <div className={classForm.formBlock}>
          Male{' '}
          <input
            id="fieldSex"
            value="0"
            type="radio"
            {...register('sex', {
              validate: {
                validateSex: (value) => validateSex(value),
              },
            })}
          />
          &nbsp;Female{' '}
          <input
            id="fieldSex"
            value="1"
            type="radio"
            {...register('sex', {
              validate: {
                validateSex: (value) => validateSex(value),
              },
            })}
          />
          {errors.sex && <ErrorMessage message={`${errors.sex.message}`} />}
        </div>
        <label className={classForm.label} htmlFor="fieldBreed">
          Breed
        </label>
        <Select
          id="fieldBreed"
          data={breedsData}
          {...register('breed', {
            validate: {
              validateBreeds: (value) => validateBreeds(value),
            },
          })}
        />
        {errors.breed && <ErrorMessage message={`${errors.breed.message}`} />}
        <label className={classForm.label} htmlFor="fieldPrice">
          Price
        </label>
        <Input
          id="fieldPrice"
          placeholder="Specify the price"
          type="number"
          {...register('price', {
            validate: {
              priceValidation: (value) => validatePrice(value),
            },
          })}
        />
        {errors.price && <ErrorMessage message={`${errors.price.message}`} />}
        <label className={classForm.label} htmlFor="fielsCatterys">
          Catterys
        </label>
        <Select
          id="fielsCatterys"
          data={catterysData}
          {...register('catterys', {
            validate: {
              validateCatterys: (value) => validateCatterys(value),
            },
          })}
        />
        {errors.catterys && <ErrorMessage message="Specify the catterys" />}
        <div className={classForm.formBlock}>
          <label className={classForm.label} htmlFor="fielsCounts"></label>
          <input
            id="fielsCounts"
            value={0}
            type="checkbox"
            {...register('counts', {
              validate: {
                validateOwner: (value) => validateOwner(value),
              },
            })}
          />{' '}
          I am the owner of cat
          {errors.counts && <ErrorMessage message={`${errors.counts.message}`} />}
        </div>
        <label className={classForm.label} htmlFor="fielsImage">
          Photo of cats
        </label>
        <Input
          id="fielsImage"
          type="file"
          accept="image/*"
          {...register('image', {
            validate: {
              validateImage: (value) => validateImage(value),
            },
          })}
        />
        {errors.image && <ErrorMessage message={`${errors.image.message}`} />}
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
